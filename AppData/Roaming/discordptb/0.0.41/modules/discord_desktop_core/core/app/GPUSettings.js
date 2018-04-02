'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.getEnableHardwareAcceleration = getEnableHardwareAcceleration;
exports.setEnableHardwareAcceleration = setEnableHardwareAcceleration;

var _electron = require('electron');

var app = _electron.app;
app.commandLine.appendSwitch('enable-transparent-visuals'),
app.commandLine.appendSwitch('disable-gpu');

var _appFeatures = require('./appFeatures');

var _appSettings = require('./appSettings');

var features = (0, _appFeatures.getFeatures)();
var settings = (0, _appSettings.getSettings)();

function init() {
  features.declareSupported('electron_configure_hardware_acceleration');
}

function getEnableHardwareAcceleration() {
  // TODO: This should probably a constant
  return settings.get('enableHardwareAcceleration', true);
}

function setEnableHardwareAcceleration(enableHardwareAcceleration) {
  settings.set('enableHardwareAcceleration', enableHardwareAcceleration);
  settings.save();

  _electron.app.relaunch();
  _electron.app.exit(0);
}