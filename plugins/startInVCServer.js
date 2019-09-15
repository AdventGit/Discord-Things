//META{"name":"startInVCServer"}*//

const startInVCServer = function () {};

startInVCServer.prototype.getName = function () {
    return 'Start In Voice Chat Server';
}
startInVCServer.prototype.getDescription = function () {
    return 'Selects the server you'+"'"+'re speaking in on startup.';
}
startInVCServer.prototype.getVersion = function () {
    return '2.0';
}
startInVCServer.prototype.getAuthor = function () {
    return 'AdventDiscord (TonyLemur Inspired)';
}

startInVCServer.prototype.start = function() {
    try {
        $('div.labelWrapper-Pniq53 > a')[0].click();
    } catch {}
}

startInVCServer.prototype.stop = function() {}