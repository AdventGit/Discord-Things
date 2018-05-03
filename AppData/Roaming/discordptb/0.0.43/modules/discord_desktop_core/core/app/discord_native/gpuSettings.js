'use strict';

var electron = require('electron');

var app = electron.app;
app.commandLine.appendSwitch('enable-transparent-visuals'),
app.commandLine.appendSwitch('disable-gpu');
var remoteGPUSettings = electron.remote.require('./GPUSettings');

function getEnableHardwareAcceleration() {
  return remoteGPUSettings.getEnableHardwareAcceleration();
}

function setEnableHardwareAcceleration(enable) {
  remoteGPUSettings.setEnableHardwareAcceleration(enable);
}

module.exports = {
  getEnableHardwareAcceleration: getEnableHardwareAcceleration,
  setEnableHardwareAcceleration: setEnableHardwareAcceleration
};