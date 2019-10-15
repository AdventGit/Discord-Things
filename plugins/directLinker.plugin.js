//META{"name":"directLinker"}*//

const directLinker = function(){};

directLinker.prototype.getName = function() {
    return 'Direct Linker';
}
directLinker.prototype.getDescription = function() {
    return 'Opens a variety of links inside the proper installed programs. (Example: Steam links open Steam instead of the browser)';
}
directLinker.prototype.getVersion = function() {
    return '1.0';
}
directLinker.prototype.getAuthor = function() {
    return 'AdventDiscord';
}

directLinker.prototype.getSettingsPanel = function() {
    try {
        return '\
<div style="display: flex !important; flex-wrap: wrap !important; flex-direction: row !important;">\
    <div style="flex: 1 0 100% !important; text-align: center !important; font-weight: 500 !important;">Direct Linker Settings</div>\
    <div style="padding: 16px 0px 0px 0px !important;">\
        <div style="flex: 0 0 auto !important;">\
            <div style="flex 0 0 auto !important;\
float: left !important;">Steam:</div>\
            <label class="ui-switch-wrapper ui-flex-child directLinker-Steam" style="flex: 0 0 auto !important;\
float: right !important;\
margin-top: -3px !important;\
margin-left: 8px !important;">\
            <input class="ui-switch-checkbox" type="checkbox"></input>\
            <div class="ui-switch"></div>\
            </label>\
        </div>\
        <div style="flex: 0 0 auto !important;\
margin: 32px 0px 0px 0px !important;">\
            <div style="flex 0 0 auto !important;\
float: left !important;">OSU!:</div>\
            <label class="ui-switch-wrapper ui-flex-child directLinker-OSU" style="flex: 0 0 auto !important;\
float: right !important;\
margin-top: -3px !important;\
margin-left: 8px !important;">\
                <input class="ui-switch-checkbox" type="checkbox"></input>\
                <div class="ui-switch"></div>\
            </label>\
        </div>\
    </div>\
</div>';
    } finally {
        directLinker.prototype.settingsPanelJS();
    };
};
directLinker.prototype.settingsPanelJS = function() {
    setTimeout(function() {
        if (BdApi.loadData('directLinker', 'Steam') == undefined) {
            BdApi.saveData('directLinker', 'Steam', 'Disabled');
        } else if (BdApi.loadData('directLinker', 'Steam') == 'Enabled') {
            $('.directLinker-Steam div').addClass('checked');
        }
        if (BdApi.loadData('directLinker', 'OSU!') == undefined) {
            BdApi.saveData('directLinker', 'OSU!', 'Disabled');
        } else if (BdApi.loadData('directLinker', 'OSU!') == 'Enabled') {
            $('.directLinker-OSU div').addClass('checked');
        }
        $('.directLinker-Steam').on('click', function() {
            if ($('.directLinker-Steam div').hasClass('checked')) {
                BdApi.saveData('directLinker', 'Steam', 'Disabled');
                $('.directLinker-Steam div').removeClass('checked');
            } else {
                BdApi.saveData('directLinker', 'Steam', 'Enabled');
                $('.directLinker-Steam div').addClass('checked');
            }
        });
        $('.directLinker-OSU').on('click', function() {
            if ($('.directLinker-OSU div').hasClass('checked')) {
                BdApi.saveData('directLinker', 'OSU!', 'Disabled');
                $('.directLinker-OSU div').removeClass('checked');
            } else {
                BdApi.saveData('directLinker', 'OSU!', 'Enabled');
                $('.directLinker-OSU div').addClass('checked');
            }
        });
    },1);
};

directLinker.prototype.baseTarget = function() {
    return 'div.container-1YxwTf div.markup-2BOw-j > a';
}
directLinker.prototype.baseTarget2 = function() {
    return 'div.modal-3c3bKg div.connectedAccounts-repVzS div.connectedAccount-36nQx7 > a';
}
directLinker.prototype.mutTarget = function() {
    return 'div.content-98HsJk';
}
directLinker.prototype.mutTarget2 = function() {
    return 'div#app-mount div.popouts-2bnG9Z';
}
directLinker.prototype.mutationObserverConfig = function() {
    return {attributeOldValue: false, attributes: false, characterData: false, characterDataoldValue: false, childList: true, subtree: true};
}

directLinker.prototype.mainAct = function(e) {
    if (e.target.tagName === 'svg') {
        var hrefLink = $(e.target).parent().attr('href');
    } else if (e.target.tagName === 'path') {
        var hrefLink = $(e.target).parent().parent().attr('href');
    }
    const steamConditions = ['//steamcommunity.com/','//store.steampowered.com/'];
    const osuConditions = ['//osu.ppy.sh/s/','//osu.ppy.sh/b/','//osu.ppy.sh/beatmapsets/'];
    if (BdApi.loadData('directLinker', 'Steam') == 'Enabled') {
        if (steamConditions.some(cond => hrefLink.includes(cond))) {
            if (require('electron').shell.openExternal('steam://openurl/'+hrefLink)) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        }
    }
    if (BdApi.loadData('directLinker', 'OSU!') == 'Enabled') {
        if (osuConditions.some(cond => hrefLink.includes(cond))) {
            const bmid = hrefLink.split('?')[0].split('/').pop();
            if (require('electron').shell.openExternal('osu://b/'+bmid)) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        }
    }
}

directLinker.prototype.mutAction = function() {
    $(directLinker.prototype.baseTarget()).off('click.directLinker');
    $(directLinker.prototype.baseTarget2()).off('click.directLinker');
    $(directLinker.prototype.baseTarget()).on('click.directLinker', function(e) {
        directLinker.prototype.mainAct(e);
    });
    $(directLinker.prototype.baseTarget2()).on('click.directLinker', function(e) {
        directLinker.prototype.mainAct(e);
    });
}
directLinker.prototype.mutObvs = new MutationObserver(function(mutations) {
    directLinker.prototype.mutAction();
});
directLinker.prototype.mutTargets = function() {
    directLinker.prototype.mutObvs.observe($(directLinker.prototype.mutTarget()).get(0), directLinker.prototype.mutationObserverConfig());
    directLinker.prototype.mutObvs.observe($(directLinker.prototype.mutTarget2()).next().get(0), directLinker.prototype.mutationObserverConfig());
}

directLinker.prototype.startTargets = function() {
    try {
        directLinker.prototype.mutTargets();
        directLinker.prototype.mutAction();
    } catch(err) {
        console.log(err);
        $(directLinker.prototype.baseTarget()).off('click.directLinker');
        $(directLinker.prototype.baseTarget2()).off('click.directLinker');
        directLinker.prototype.mutObvs.disconnect();
        setTimeout(function() {
            tV2d.prototype.startTargets();
        }, 500);
    } finally {
        BdApi.showToast('directLinker: Loaded!');
    }
}

directLinker.prototype.mainExit = function() {
    try {
        $(directLinker.prototype.baseTarget()).off('click.directLinker');
        $(directLinker.prototype.baseTarget2()).off('click.directLinker');
        directLinker.prototype.mutObvs.disconnect();
    } catch(err) {
        console.log(err);
        setTimeout(function() {
            directLinker.prototype.mainExit();
        }, 500);
    } finally {
        BdApi.showToast('directLinker: Unloaded!');
    }
}

directLinker.prototype.start = function() {
    directLinker.prototype.startTargets();
}

directLinker.prototype.stop = function() {
    directLinker.prototype.mainExit();
}