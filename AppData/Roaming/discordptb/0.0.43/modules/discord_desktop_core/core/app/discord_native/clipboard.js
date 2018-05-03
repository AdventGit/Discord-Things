'use strict';

var electron = require('electron');

var remote = electron.remote;
var app = electron.app;
app.commandLine.appendSwitch('enable-transparent-visuals'),
app.commandLine.appendSwitch('disable-gpu');


function copy(text) {
  if (text) {
    remote.clipboard.writeText(text);
  } else {
    remote.getCurrentWebContents().copy();
  }
}

function cut() {
  remote.getCurrentWebContents().cut();
}

function paste() {
  remote.getCurrentWebContents().paste();
}

module.exports = {
  copy: copy,
  cut: cut,
  paste: paste
};