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
    return '.container-1YxwTf div.markup-2BOw-j > a';
}
directLinker.prototype.mutTarget = function() {
    return '.content-98HsJk';
}
directLinker.prototype.mutationObserverConfig = function() {
    return {attributeOldValue: false, attributes: false, characterData: false, characterDataoldValue: false, childList: true, subtree: true};
}

directLinker.prototype.mutAction = function() {
    $(directLinker.prototype.baseTarget()).off('click.directLinker');
    $(directLinker.prototype.baseTarget()).on('click.directLinker', function(e) {
        const hrefLink = $(e.target).attr('href');
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
    });
}
directLinker.prototype.mutObvs = new MutationObserver(function(mutations) {
    directLinker.prototype.mutAction();
});
directLinker.prototype.mutTargets = function() {
    directLinker.prototype.mutObvs.observe($(directLinker.prototype.mutTarget()).get(0), directLinker.prototype.mutationObserverConfig());
}

directLinker.prototype.start = function() {
    directLinker.prototype.mutTargets();
    directLinker.prototype.mutAction();
}

directLinker.prototype.stop = function() {
    $(directLinker.prototype.baseTarget()).off('click.directLinker');
    directLinker.prototype.mutObvs.disconnect();
}