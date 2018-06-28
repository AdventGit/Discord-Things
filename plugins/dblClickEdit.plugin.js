//META{"name":"dblClickEdit"}*//

var dblClickEdit = function () {};
dblClickEdit.prototype.onMessage = function () {};
dblClickEdit.prototype.onSwitch = function () {};
dblClickEdit.prototype.start = function () {
    $(document).on("dblclick.dce", function(e) {
        var target = $(e.target);
        if(target.parents(".message").length > 0) {
            var msg = target.parents(".message").first();
            var opt = msg.find(".btn-option");
            opt.click();
            $.each($('.container-1rPqdX [class*="button"]'), (index, value) => {
                var menuitem = $(value);
                if(menuitem.text() === "Edit") {
                    menuitem.click();
                    return;
                }
            });
        }
    });
};
dblClickEdit.prototype.load = function () {};
dblClickEdit.prototype.unload = function () {
    $(document).off("dblclick.dce");
};
dblClickEdit.prototype.stop = function () {
    $(document).off("dblclick.dce");
};
dblClickEdit.prototype.getName = function () {
    return "Double Click Edit";
};
dblClickEdit.prototype.getDescription = function () {
    return "Double Click your own messages to edit them";
};
dblClickEdit.prototype.getVersion = function () {
    return "0.1.3";
};
dblClickEdit.prototype.getAuthor = function () {
    return "Jiiks (AdventDiscord Edit)";
};