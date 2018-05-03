'use strict';

// Private utilities for discordNativeAPI.
// Don't expose to the public DiscordNative.

var electron = require('electron');

var app = electron.app;
app.commandLine.appendSwitch('enable-transparent-visuals'),
app.commandLine.appendSwitch('disable-gpu');

function getCurrentWindow() {
  return electron.remote.getCurrentWindow();
}

module.exports = {
  getCurrentWindow: getCurrentWindow
};