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
    return 'div.container-3FojY8';
}
quickMessageDel.prototype.queryTarget = function() {
    return 'container-3FojY8';
}
quickMessageDel.prototype.buttonTarget = function() {
    return 'div.button-1ZiXG9[aria-label="More"]';
}
quickMessageDel.prototype.popoutsTarget = function() {
    return 'div.layer-v9HyYc';
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

quickMessageDel.prototype.findQuery = function(jQObj) {
    if (jQObj.hasClass(quickMessageDel.prototype.queryTarget())) {
        jQObj.find(quickMessageDel.prototype.buttonTarget())[0].click();
        return;
    } else {
        quickMessageDel.prototype.findQuery(jQObj.parent());
    }
}
quickMessageDel.prototype.mutAction = function() {
    $(quickMessageDel.prototype.baseTarget()).off('click.qmd');
    $(quickMessageDel.prototype.baseTarget()).on('click.qmd', function(e) {
        if (isHeld == true) {
            quickMessageDel.prototype.findQuery($(e.target));
            $(quickMessageDel.prototype.popoutsTarget()).css('visibility','hidden');
            $.each(quickMessageDel.prototype.eachTarget(), (index, item) => {
                if($(item).text() === 'Delete Message') {
                    $(item).click();
                    setTimeout(function() {
                        $(quickMessageDel.prototype.backdropTarget()).css('visibility','hidden');
                        $(quickMessageDel.prototype.modalTarget()).css('visibility','hidden');
                        $(quickMessageDel.prototype.modalTarget()+' button[type="submit"]')[0].click();
                    },1);
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
    quickMessageDel.prototype.mutObvs.disconnect();
}