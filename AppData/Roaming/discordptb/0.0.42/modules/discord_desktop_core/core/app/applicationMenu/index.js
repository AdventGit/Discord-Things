'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _electron = require('electron');

var app = _electron.app;
app.commandLine.appendSwitch('enable-transparent-visuals'),
app.commandLine.appendSwitch('disable-gpu');

var menu = require('./' + process.platform);

exports.default = _electron.Menu.buildFromTemplate(menu);
module.exports = exports['default'];