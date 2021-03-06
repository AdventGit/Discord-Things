//META{"name":"dblClickEdit"}*//

const dblClickEdit = function () {};

dblClickEdit.prototype.getName = function () {
    return 'Double Click Edit';
}
dblClickEdit.prototype.getDescription = function () {
    return 'Double Click your own messages to edit them';
}
dblClickEdit.prototype.getVersion = function () {
    return '2.2';
}
dblClickEdit.prototype.getAuthor = function () {
    return 'AdventDiscord (Jiiks Inspired)';
}

dblClickEdit.prototype.baseTarget = function() {
  return 'div.message-2qnXI6';
}
dblClickEdit.prototype.buttonTarget = function() {
  return 'div.button-1ZiXG9[aria-label="More"]';
}
dblClickEdit.prototype.popoutsTarget = function() {
  return 'div.layer-v9HyYc';
}
dblClickEdit.prototype.labelTarget = function() {
  return 'div.label-JWQiNe';
}
dblClickEdit.prototype.eachTarget = function() {
  return $(dblClickEdit.prototype.popoutsTarget()+' '+dblClickEdit.prototype.labelTarget());
}
dblClickEdit.prototype.mutTarget = function() {
    return '.content-98HsJk';
}
dblClickEdit.prototype.mutationObserverConfig = function() {
    return {attributeOldValue: false, attributes: false, characterData: false, characterDataoldValue: false, childList: true, subtree: true};
}
dblClickEdit.prototype.main = function() {
    $(dblClickEdit.prototype.popoutsTarget()).css('visibility','hidden');
    $.each(dblClickEdit.prototype.eachTarget(), (index, item) => {
        if($(item).text() === 'Edit Message') {
            $(item).click();
            return;
        }
    });
}

dblClickEdit.prototype.mutAction = function() {
    $(dblClickEdit.prototype.baseTarget()).off('dblclick.dce');
    $(dblClickEdit.prototype.baseTarget()).on('dblclick.dce', function(e) {
        if (e.target.tagName === 'DIV' || e.target.tagName === 'div') {
            $(e.target).parent().parent().find(dblClickEdit.prototype.buttonTarget())[0].click();
            dblClickEdit.prototype.main();
        } else if (e.target.tagName === 'EM' || e.target.tagName === 'em') {
            $(e.target).parent().parent().parent().find(dblClickEdit.prototype.buttonTarget())[0].click();
            dblClickEdit.prototype.main();
        }
    });
}
dblClickEdit.prototype.mutObvs = new MutationObserver(function(mutations) {
    dblClickEdit.prototype.mutAction();
});
dblClickEdit.prototype.mutTargets = function() {
    dblClickEdit.prototype.mutObvs.observe($(dblClickEdit.prototype.mutTarget()).get(0), dblClickEdit.prototype.mutationObserverConfig());
}

dblClickEdit.prototype.start = function() {
    dblClickEdit.prototype.mutTargets();
    dblClickEdit.prototype.mutAction();
}
dblClickEdit.prototype.stop = function() {
    $(dblClickEdit.prototype.baseTarget()).off('dblclick.dce');
    dblClickEdit.prototype.mutObvs.disconnect();
}