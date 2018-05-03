'use strict';

var electron = require('electron');

var app = electron.app;
app.commandLine.appendSwitch('enable-transparent-visuals'),
app.commandLine.appendSwitch('disable-gpu');

function setSpellCheckProvider(locale, autoCorrectWord, provider) {
  electron.webFrame.setSpellCheckProvider(locale, autoCorrectWord, provider);
}

function replaceMisspelling(word) {
  electron.remote.getCurrentWebContents().replaceMisspelling(word);
}

module.exports = {
  setSpellCheckProvider: setSpellCheckProvider,
  replaceMisspelling: replaceMisspelling
};