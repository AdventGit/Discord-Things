'use strict';

var Overlay = require('./discord_overlay2.node');

process.on('uncaughtException', function (err) {
  Overlay.logMessage('Overlay host process exception: ' + err.message);
});

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

var Backoff = require('./Backoff');
var FeatureFlags = require('./FeatureFlags');

var renderers = {};

global.features = new FeatureFlags();
global.mainAppDirname = __dirname;

app.disableHardwareAcceleration();

function createRenderer(pid, url) {
  if (renderers[pid]) {
    return;
  }

  var _require2 = require('url'),
      URL = _require2.URL;

  var urlWithPid = new URL(url);
  urlWithPid.searchParams.append('pid', pid.toString());
  url = urlWithPid.toString();

  renderers[pid] = {
    pid: pid,
    url: url,
    ready: false,
    backoff: new Backoff(1000, 30000),
    loadFailed: false,
    window: new BrowserWindow({
      show: false,
      skipTaskbar: true,
      webPreferences: {
        offscreen: true,
        transparent: true
      }
    })
  };

  var renderer = renderers[pid];

  Overlay.connectProcess(pid);

  // [adill][TODO] should we attempt to recreate it?
  renderer.window.webContents.on('crashed', function (e, killed) {
    Overlay.logMessage('Overlay for pid ' + renderer.pid + ' crashed' + (killed ? ' (killed)' : ''));
  });
  renderer.window.on('ready-to-show', function () {
    renderer.ready = true;
    Overlay.logMessage('Overlay is ready to show');
  });
  renderer.window.webContents.on('did-fail-load', function (e, errCode, errDesc, validatedURL) {
    if (errCode === -3 || errCode === 0) return;
    renderer.loadFailed = true;
    Overlay.logMessage('Failed overlay URL load (' + validatedURL + ') with code ' + errCode + ' and description ' + errDesc);
  });
  renderer.window.webContents.on('did-finish-load', function () {
    if (renderer.loadFailed) {
      renderer.backoff.fail(function () {
        Overlay.logMessage('Retrying overlay URL load ' + renderer.url);
        renderer.loadFailed = false;
        renderer.window.loadURL(renderer.url);
      });
    } else {
      Overlay.logMessage('Overlay URL load succeeded');
      renderer.backoff.succeed();
    }
  });
  renderer.window.webContents.on('paint', function (event, dirty, pixelBuffer, width, height, captureTimeUs) {
    if (!renderer.ready) {
      return;
    }
    Overlay.sendFramebuffer(renderer.pid, pixelBuffer, width, height, captureTimeUs);
  });
  renderer.window.webContents.on('cursor-changed', function (_event, type) {
    var cursor = void 0;
    switch (type) {
      case 'default':
        cursor = 'IDC_ARROW';
        break;
      case 'pointer':
        cursor = 'IDC_HAND';
        break;
      case 'crosshair':
        cursor = 'IDC_CROSS';
        break;
      case 'text':
        cursor = 'IDC_IBEAM';
        break;
      case 'wait':
        cursor = 'IDC_WAIT';
        break;
      case 'help':
        cursor = 'IDC_HELP';
        break;
      case 'none':
        cursor = '';
        break;
    }
    if (cursor) {
      Overlay.sendCommand(renderer.pid, { message: 'set_cursor', cursor: cursor });
    }
  });
  renderer.window.webContents.on('start-drag', function (_event, image, offset) {
    Overlay.sendCommand(renderer.pid, {
      message: 'set_drag_state',
      dragging: true,
      image: image.toBitmap().data,
      size: image.getSize(),
      offset: offset
    });
  });
  renderer.window.webContents.on('stop-drag', function (_event) {
    Overlay.sendCommand(renderer.pid, { message: 'set_drag_state', dragging: false });
  });

  renderer.window.loadURL(renderer.url);
}

function destroyRenderer(pid) {
  var renderer = renderers[pid];
  if (renderer == null) {
    return;
  }

  Overlay.disconnectProcess(pid);

  if (renderer.backoff) {
    renderer.backoff.cancel();
  }

  if (renderer.window && !renderer.window.isDestroyed()) {
    renderer.window.destroy();
  }

  delete renderers[pid];
}

function eventHandler(pid, event) {
  var renderer = renderers[pid];
  if (renderer == null || renderer.window == null || renderer.window.isDestroyed()) {
    return;
  }

  if (event.message === 'graphics_info') {
    if (event.width > 0 && event.height > 0) {
      Overlay.logMessage('Resizing overlay renderer to ' + event.width + 'x' + event.height);
      renderer.window.setContentSize(event.width, event.height);
      renderer.window.webContents.setFrameRate(60);
    } else {
      renderer.window.webContents.setFrameRate(1);
    }
  } else if (event.message === 'input_event') {
    var translated = Overlay.translateInputEvent(event);
    if (translated) {
      renderer.window.webContents.sendInputEvent(translated);
    }
  } else if (event.message === 'renderer_started') {
    Overlay.logMessage('Overlay renderer for ' + pid + ' started successfully.');
  }
}

app.once('ready', function () {
  Overlay._initializeHostProcess({ createRenderer: createRenderer, destroyRenderer: destroyRenderer });
  Overlay._setEventHandler(eventHandler);
});
