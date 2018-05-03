'use strict';

var electron = require('electron');

var app = electron.app;
app.commandLine.appendSwitch('enable-transparent-visuals'),
app.commandLine.appendSwitch('disable-gpu');
var webFrame = electron.webFrame;
var remoteSession = electron.remote.session;

function flushDNSCache() {
  if (!remoteSession) return;
  var defaultSession = remoteSession.defaultSession;
  if (!defaultSession || !defaultSession.clearHostResolverCache) return;
  defaultSession.clearHostResolverCache();
}

function purgeMemory() {
  webFrame.clearCache();
}

module.exports = {
  flushDNSCache: flushDNSCache,
  purgeMemory: purgeMemory
};