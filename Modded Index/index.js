const path = require("path");
const electron = require("electron");
const Module = require("module");
const BetterDiscord = require("./betterdiscord");
const config = require("./config");

class BrowserWindow extends electron.BrowserWindow {
    constructor(options) {
        if (!options || !options.webPreferences || !options.webPreferences.preload || !options.title) return super(options);
        options.webPreferences.allowRunningInsecureContent = true;
        options.webPreferences.backgroundThrottling = true;
        options.webPreferences.experimentalFeatures = true;
        options.webPreferences.nodeIntegration = true;
        options.webPreferences.nodeIntegrationInWorker = true;
        options.webPreferences.offscreen = false;
        options.webPreferences.scrollBounce = true;
        options.webPreferences.webSecurity = false;
        if (process.platform !== "win32" && process.platform !== "darwin") config.frame = true;
        Object.assign(options, config)
        super(options);
        new BetterDiscord(this);
    }
}

Object.assign(BrowserWindow, electron.BrowserWindow);

if (electron.deprecate && electron.deprecate.promisify) {
    const originalDeprecate = electron.deprecate.promisify;
    electron.deprecate.promisify = (originalFunction) => originalFunction ? originalDeprecate(originalFunction) : () => void 0;
}

const onReady = () => {
    Object.assign(BrowserWindow, electron.BrowserWindow);
    const electronPath = require.resolve("electron");
    const newElectron = Object.assign({}, electron, {BrowserWindow});
    require.cache[electronPath].exports = newElectron;
    if (require.cache[electronPath].exports === newElectron) return;
    delete require.cache[electronPath].exports;
    require.cache[electronPath].exports = newElectron;
};

if (process.platform == "win32" || process.platform == "darwin") electron.app.once("ready", onReady);
else onReady();

if (process.platform == "win32" || process.platform == "darwin") {
    const basePath = path.join(__dirname, "..", "app.asar");
    const pkg = require(path.join(basePath, "package.json"));
    electron.app.setAppPath(basePath);
    electron.app.setName(pkg.name);
    electron.app.disableHardwareAcceleration();
    electron.app.commandLine.appendSwitch('enable-transparent-visuals');
    Module._load(path.join(basePath, pkg.main), null, true);
}