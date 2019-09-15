//META{"name":"quickMessageDel"}*//

const quickMessageDel = function(){};

var isHeld = false;

quickMessageDel.prototype.getName = function() {
    return 'Quick Message Delete';
}
quickMessageDel.prototype.getDescription = function() {
    return 'Quickly Delete Messages!';
}
quickMessageDel.prototype.getVersion = function() {
    return '1.0';
}
quickMessageDel.prototype.getAuthor = function() {
    return 'AdventDiscord';
}

quickMessageDel.prototype.baseTarget = function() {
  return 'div.container-1YxwTf';
}
quickMessageDel.prototype.buttonTarget = function() {
    return 'div.button-3Jq0g9';
}
quickMessageDel.prototype.popoutsTarget = function() {
    return 'div.popouts-2bnG9Z';
}
quickMessageDel.prototype.labelTarget = function() {
    return 'div.label-JWQiNe';
}
quickMessageDel.prototype.eachTarget = function() {
    return $(quickMessageDel.prototype.popoutsTarget()+' '+quickMessageDel.prototype.labelTarget());
}
quickMessageDel.prototype.backdropTarget = function() {
    return 'div.backdrop-1wrmKB';
}
quickMessageDel.prototype.modalTarget = function() {
    return 'div.modal-3c3bKg';
}
quickMessageDel.prototype.mutTarget = function() {
    return '.content-98HsJk';
}
quickMessageDel.prototype.mutationObserverConfig = function() {
    return {attributeOldValue: false, attributes: false, characterData: false, characterDataoldValue: false, childList: true, subtree: true};
}

quickMessageDel.prototype.mutAction = function() {
    $(quickMessageDel.prototype.baseTarget()).off('click.qmd');
    $(quickMessageDel.prototype.baseTarget()).on('click.qmd', function(e) {
        if (isHeld == true) {
            $(e.target).parent().find(quickMessageDel.prototype.buttonTarget())[0].click();
            $(quickMessageDel.prototype.popoutsTarget()+' > div').css('visibility','hidden');
            $.each(quickMessageDel.prototype.eachTarget(), (index, item) => {
                if($(item).text() === 'Delete') {
                    $(item).click();
                    $(quickMessageDel.prototype.backdropTarget()).css('visibility','hidden');
                    $(quickMessageDel.prototype.modalTarget()).css('visibility','hidden');
                    $(quickMessageDel.prototype.modalTarget()+' button[type="submit"]')[0].click();
                    return;
                }
            });
        }
    });
}

quickMessageDel.prototype.mutObvs = new MutationObserver(function(mutations) {
    quickMessageDel.prototype.mutAction();
});

quickMessageDel.prototype.mutTargets = function() {
    quickMessageDel.prototype.mutObvs.observe($(quickMessageDel.prototype.mutTarget()).get(0), quickMessageDel.prototype.mutationObserverConfig());
}

quickMessageDel.prototype.start = function() {
    $(window).on('keydown.qmd', function(e) {
        if (e.which == 46) {
            if (isHeld == false) {
                isHeld = true;
            }
        }
    });
    $(window).on('keyup.qmd', function(e) {
        isHeld = false;
    });
    quickMessageDel.prototype.mutTargets();
    quickMessageDel.prototype.mutAction();
}

quickMessageDel.prototype.stop = function() {
    $(window).off('keydown.qmd');
    $(window).off('keyup.qmd');
    $(quickMessageDel.prototype.baseTarget()).off('click.qmd');
}