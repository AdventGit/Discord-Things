'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEnableHardwareAcceleration = getEnableHardwareAcceleration;
exports.setEnableHardwareAcceleration = setEnableHardwareAcceleration;

var _electron = require('electron');

var app = _electron.app;
app.commandLine.appendSwitch('enable-transparent-visuals'),
app.commandLine.appendSwitch('disable-gpu');

var _appSettings = require('./appSettings');

var settings = (0, _appSettings.getSettings)();

function getEnableHardwareAcceleration() {
  // TODO: This should probably a constant
  return settings.get('enableHardwareAcceleration', false);
}

function setEnableHardwareAcceleration(enableHardwareAcceleration) {
  settings.set('enableHardwareAcceleration', enableHardwareAcceleration);
  settings.save();

  _electron.app.relaunch();
  _electron.app.exit(0);
}