//META{"name":"OSUDirect"}*//

const OSUDirect = function(){};

OSUDirect.prototype.getName = function() {
    return "OSUDirect";
}
OSUDirect.prototype.getDescription = function() {
    return "Opens OSU! links inside of OSU! Direct instead of your Browser.";
}
OSUDirect.prototype.getVersion = function() {
    return "2.0";
}
OSUDirect.prototype.getAuthor = function() {
    return "AdventDiscord";
}

OSUDirect.prototype.start = function() {
    $(document).on("click." + this.getName(), "a[href*='//osu.ppy.sh/s/'], a[href*='//osu.ppy.sh/b/'], a[href*='//osu.ppy.sh/beatmapsets/']", (e) => {
        const bmid = e.currentTarget.href.split('?')[0].split('/').pop();
        if (require("electron").shell.openExternal("osu://b/" + bmid)) {
            e.preventDefault();
            e.stopImmediatePropagation();
        } else {
            console.log('Failed to open OSU! Link!');
        };
    });
}

OSUDirect.prototype.stop = function() {
    $(document).off("click." + this.getName(), "a[href*='//osu.ppy.sh/s/'], a[href*='//osu.ppy.sh/beatmapsets/']");
}

