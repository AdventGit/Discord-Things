const Overlay = require('./discord_overlay2.node');

const isElectronRenderer =
  typeof window !== 'undefined' && window != null && window.DiscordNative && window.DiscordNative.isRenderer;
const features = isElectronRenderer ? require('electron').remote.getGlobal('features') : global.features;

let clickZoneCallback;
let interceptInput = false;

function eventHandler(pid, event) {
  if (event.message === 'click_zone_event') {
    if (clickZoneCallback) {
      clickZoneCallback(event.name);
    }
  }
}

// [adill][TODO] assume this by 5/1/18
features.declareSupported('overlay_hook_independent');

Overlay._setEventHandler(eventHandler);

if (__OVERLAY__) {
  const {URL} = require('url');
  const url = new URL(window.location);
  const pid = parseInt(url.searchParams.get('pid'));
  Overlay.connectProcess(pid);

  Overlay.rendererStarted = () => {
    Overlay.sendCommand(pid, {message: 'notify_renderer_started'});
  };
}

Overlay.setClickZoneCallback = callback => {
  clickZoneCallback = callback;
};
Overlay.setInputLocked = locked => {
  interceptInput = !locked;
  Overlay.broadcastCommand({message: 'intercept_input', intercept: interceptInput});
};
module.exports = Overlay;
