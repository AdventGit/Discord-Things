//META{"name":"autoSelectServer"}*//

const autoSelectServer = function () {};

autoSelectServer.prototype.getName = function () {
    return 'Auto-Select Server';
}
autoSelectServer.prototype.getDescription = function () {
    return 'Selects the server you'+"'"+'re speaking in on startup.';
}
autoSelectServer.prototype.getVersion = function () {
    return '2.0';
}
autoSelectServer.prototype.getAuthor = function () {
    return 'AdventDiscord (TonyLemur Inspired)';
}

autoSelectServer.prototype.start = function() {
    try {
        $('div.labelWrapper-Pniq53 > a')[0].click();
    } catch {}
}

autoSelectServer.prototype.stop = function() {}