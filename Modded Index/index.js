const path = require("path");
const electron = require("electron");
const Module = require("module");
const basePath = path.join(__dirname, "..", "app.asar");
const pkg = require(path.join(basePath, "package.json"));
const BetterDiscord = require("./betterdiscord");
const config = require("./config");

class BrowserWindow extends electron.BrowserWindow {
    constructor(options) {
        if (!options || !options.webPreferences || !options.webPreferences.preload || !options.title) return super(options);
        options.webPreferences.backgroundThrottling = true;
        options.webPreferences.experimentalFeatures = true;
        options.webPreferences.nodeIntegration = true;
        options.webPreferences.offscreen = false;
        options.webPreferences.scrollBounce = true;
        Object.assign(options, config)
        super(options);
        new BetterDiscord(this);
    }
}

Object.assign(BrowserWindow, electron.BrowserWindow);

const electron_path = require.resolve("electron");
electron.app.once("ready", () => {
	Object.assign(BrowserWindow, electron.BrowserWindow);
	require.cache[electron_path].exports = Object.assign({}, electron, {BrowserWindow});
});

const browser_window_path = require.resolve(path.resolve(electron_path, "..", "..", "browser-window.js"));
require.cache[browser_window_path].exports = BrowserWindow;
Module._cache[browser_window_path].exports = BrowserWindow;
electron.app.setAppPath(basePath);
electron.app.setName(pkg.name);
Module._load(path.join(basePath, pkg.main), null, true);