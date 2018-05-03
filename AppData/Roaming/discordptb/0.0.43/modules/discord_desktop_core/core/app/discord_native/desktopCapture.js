'use strict';

var electron = require('electron');

var app = electron.app;
app.commandLine.appendSwitch('enable-transparent-visuals'),
app.commandLine.appendSwitch('disable-gpu');
var desktopCapturer = electron.desktopCapturer;

function getDesktopCaptureSources(options) {
  return new Promise(function (resolve, reject) {
    desktopCapturer.getSources(options, function (err, sources) {
      if (err != null) {
        return reject(err);
      }
      return resolve(sources.map(function (source) {
        return {
          id: source.id,
          name: source.name,
          url: source.thumbnail.toDataURL()
        };
      }));
    });
  });
}

module.exports = {
  getDesktopCaptureSources: getDesktopCaptureSources
};