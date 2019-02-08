//META{"name":"SteamLinker"}*//

const SteamLinker = function(){};

SteamLinker.prototype.getName = function() {
    return "SteamLinker";
}
SteamLinker.prototype.getDescription = function() {
    return "Opens Steam links inside of Steam instead of your Browser.";
}
SteamLinker.prototype.getVersion = function() {
    return "2.0";
}
SteamLinker.prototype.getAuthor = function() {
    return "AdventDiscord";
}

SteamLinker.prototype.start = function() {
    $(document).on("click." + this.getName(), "a[href*='//steamcommunity.com/'], a[href*='//store.steampowered.com/']", (e) => {
        if (require("electron").shell.openExternal("steam://openurl/" + e.currentTarget.href)) {
            e.preventDefault();
            e.stopImmediatePropagation();
        } else {
            console.log('Failed to open Steam Link!');
        };
    });
}

SteamLinker.prototype.stop = function() {
    $(document).off("click." + this.getName(), "a[href*='//steamcommunity.com/'], a[href*='//store.steampowered.com/']");
}