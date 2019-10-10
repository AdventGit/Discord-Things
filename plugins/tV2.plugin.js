//META{"name":"tV2"}*//

//Base functions
const tV2 = function(){};

//Version control
tV2.prototype.curVer = function() {
    return '2.0.1'
}
tV2.prototype.verAction = function() {
    BdApi.alert('Update Available!','Place in %appdata%\\BetterDiscord\\plugins');
    $('form.modal-yWgWj- div.footer-3rDWdC').append($('<a href="https://raw.githubusercontent.com/AdventGit/Discord-Things/master/plugins/tV2.plugin.js" download="tV2.plugin.js" class="primaryButton-2BsGPp button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeXlarge-2yFAlZ grow-q77ONN" style="margin-right: 10px !important;"><div class="contents-18-Yxp">Download</div></button>'));
    return true;
}

//BD information init
tV2.prototype.getName = function() {
    return 'tV2';
};
tV2.prototype.getDescription = function() {
    return 'Better theming idea';
};
tV2.prototype.getVersion = function() {
    return tV2.prototype.curVer();
};
tV2.prototype.getAuthor = function() {
    return 'Advent';
};

tV2.prototype.mutTarget = function() {
    return 'div.content-98HsJk';
}
tV2.prototype.activityTarget = function() {
    return tV2.prototype.mutTarget()+' > div.activityFeed-1C0EmJ';
}
tV2.prototype.removeTarget = function() {
    return tV2.prototype.activityTarget()+' > div.scrollerWrap-2lJEkd > div.scroller-2FKFPG > div';
}
tV2.prototype.mutationObserverConfig = function() {
    return {attributeOldValue: false, attributes: false, characterData: false, characterDataoldValue: false, childList: true, subtree: true};
}

tV2.prototype.mutTarget2 = function() {
    return 'div.chat-3bRxxu';
}
tV2.prototype.mutationObserverConfig2 = function() {
    return {attributeOldValue: false, attributes: false, characterData: false, characterDataoldValue: false, childList: true, subtree: false};
}

//Settings
tV2.prototype.getSettingsPanel = function() {
    try {
        return '\
<div style="display: flex !important; flex-wrap: wrap !important; flex-direction: row !important;">\
    <div style="flex: 1 0 100% !important; text-align: center !important; font-weight: 500 !important;">Theme Settings</div>\
    <div style="padding: 16px 0px 0px 0px !important;">\
        <div style="padding: 0px 0px 0px 0px !important;">User Color: \
        <button name="tV2-color-reset" class="tV2-color-reset" style="\
float: right !important;\
margin: -1px 2px 0px 2px !important;\
padding: 10px 10px 10px 10px !important;\
background: url(https://puu.sh/Eqvwl.png) !important;\
background-repeat: no-repeat !important;\
background-size: 16px 16px !important;\
background-position: center !important;\
background-color: #777777 !important;\
color: white !important;\
border: none !important;\
border-radius: 5px !important;\
"></button>\
        <input type="color" value="'+BdApi.loadData('tV2', 'startcolor')+'" name="tV2-usercolor" class="tV2-usercolor" style="\
background: transparent !important;\
border: none !important;\
outline: none !important;\
float: right !important;\
margin: -5px 0px 0px 473px !important;\
padding: 0px 0px 0px 0px !important;\
width: 52px !important;\
height: 28px !important;\
">\
        </div>\
        <div style="padding: 6px 0px 0px 0px !important;">Transparency Amount: \
        <button name="tV2-trans-reset" class="tV2-trans-reset" style="\
float: right !important;\
margin: -2px 2px 0px 2px !important;\
padding: 10px 10px 10px 10px !important;\
background: url(https://puu.sh/Eqvwl.png) !important;\
background-repeat: no-repeat !important;\
background-size: 16px 16px !important;\
background-position: center !important;\
background-color: #777777 !important;\
color: white !important;\
border: none !important;\
border-radius: 5px !important;\
"></button>\
        <input type="number" min="0" max="1" value="'+BdApi.loadData('tV2', 'starttrans')+'" step=".01" name="tV2-trans-num" class="tV2-trans-num" style="\
float: right !important;\
margin: -2px 2px 0px 10px !important;\
padding: 0px 0px 0px 0px !important;\
webkit-appearance: none !important;\
appearance: none !important;\
background: black !important;\
color: white !important;\
border: 1px solid #777777 !important;\
width: 48px !important;\
height: 20px !important;\
">\
        <input type="range" min="0" max="1" value="'+BdApi.loadData('tV2', 'starttrans')+'" step=".01" name="tV2-trans" class="tV2-trans" style="\
float: right !important;\
margin: 2px 0px 0px 0px !important;\
padding: 0px 0px 0px 0px !important;\
-webkit-appearance: none !important;\
appearance: none !important;\
width: 131px !important;\
height: 12px !important;\
background: #000000 !important;\
border: 1px solid #777777 !important;\
">\
        </div>\
        <div style="padding: 6px 0px 0px 0px !important;">Guild Size: \
        <button name="tV2-guild-reset" class="tV2-guild-reset" style="\
float: right !important;\
margin: -2px 2px 0px 2px !important;\
padding: 10px 10px 10px 10px !important;\
background: url(https://puu.sh/Eqvwl.png) !important;\
background-repeat: no-repeat !important;\
background-size: 16px 16px !important;\
background-position: center !important;\
background-color: #777777 !important;\
color: white !important;\
border: none !important;\
border-radius: 5px !important;\
"></button>\
        <input type="number" min="38" max="58" value="'+BdApi.loadData('tV2', 'startguilds')+'" step="1" name="tV2-guilds-num" class="tV2-guilds-num" style="\
float: right !important;\
margin: -2px 2px 0px 10px !important;\
padding: 0px 0px 0px 0px !important;\
-webkit-appearance: none !important;\
appearance: none !important;\
background: black !important;\
color: white !important;\
border: 1px solid #777777 !important;\
width: 48px !important;\
height: 20px !important;\
">\
        <input type="range" min="38" max="58" value="'+BdApi.loadData('tV2', 'guilds')+'" step="1" name="tV2-guilds" class="tV2-guilds" style="\
float: right !important;\
margin: 2px 0px 0px 0px !important;\
padding: 0px 0px 0px 0px !important;\
-webkit-appearance: none !important;\
appearance: none !important;\
width: 131px !important;\
height: 12px !important;\
background: #000000 !important;\
border: 1px solid #777777 !important;\
">\
        </div>\
        <div style="padding: 6px 0px 0px 0px !important;">Badge Size: \
        <button name="tV2-badge-reset" class="tV2-badge-reset" style="\
float: right !important;\
margin: -2px 2px 0px 2px !important;\
padding: 10px 10px 10px 10px !important;\
background: url(https://puu.sh/Eqvwl.png) !important;\
background-repeat: no-repeat !important;\
background-size: 16px 16px !important;\
background-position: center !important;\
background-color: #777777 !important;\
color: white !important;\
border: none !important;\
border-radius: 5px !important;\
"></button>\
        <input type="number" min="16" max="22" pattern="^\d+$" value="'+BdApi.loadData('tV2', 'startbadge')+'" step="2" name="tV2-badge-num" class="tV2-badge-num" style="\
float: right !important;\
margin: -2px 2px 0px 10px !important;\
padding: 0px 0px 0px 0px !important;\
-webkit-appearance: none !important;\
appearance: none !important;\
background: black !important;\
color: white !important;\
border: 1px solid #777777 !important;\
width: 48px !important;\
height: 20px !important;\
">\
        <input type="range" min="16" max="22" pattern="^\d+$" value="'+BdApi.loadData('tV2', 'badge')+'" step="2" name="tV2-badge" class="tV2-badge" style="\
float: right !important;\
margin: 2px 0px 0px 0px !important;\
padding: 0px 0px 0px 0px !important;\
-webkit-appearance: none !important;\
appearance: none !important;\
width: 131px !important;\
height: 12px !important;\
background: #000000 !important;\
border: 1px solid #777777 !important;\
">\
        </div>\
        <div style="padding: 6px 0px 0px 0px !important;">Background Image: \
        <button name="tV2-image-reset" class="tV2-image-reset" style="\
float: right !important;\
margin: -2px 2px 0px 2px !important;\
padding: 10px 10px 10px 10px !important;\
background: url(https://puu.sh/Eqvwl.png) !important;\
background-repeat: no-repeat !important;\
background-size: 16px 16px !important;\
background-position: center !important;\
background-color: #777777 !important;\
color: white !important;\
border: none !important;\
border-radius: 5px !important;\
"></button>\
        <input type="text" value="'+BdApi.loadData('tV2', 'image')+'" name="tV2-image" class="tV2-image" style="\
float: right !important;\
margin: -2px 2px 0px 0px !important;\
padding: 0px 0px 0px 0px !important;\
-webkit-appearance: none !important;\
appearance: none !important;\
background: black !important;\
color: white !important;\
border: 1px solid #777777 !important;\
min-width: 48px !important;\
width: 48px !important;\
max-width: 465px !important;\
height: 20px !important;\
">\
        </div>\
        <div id="tV2-image-trans" class="tV2-hide" style="padding: 6px 0px 0px 0px !important;">Image Transparency: \
        <button name="tV2-image-trans-reset" class="tV2-image-trans-reset" style="\
float: right !important;\
margin: -2px 2px 0px 2px !important;\
padding: 10px 10px 10px 10px !important;\
background: url(https://puu.sh/Eqvwl.png) !important;\
background-repeat: no-repeat !important;\
background-size: 16px 16px !important;\
background-position: center !important;\
background-color: #777777 !important;\
color: white !important;\
border: none !important;\
border-radius: 5px !important;\
"></button>\
        <input type="number" min="0" max="1" pattern="^\d+$" value="'+BdApi.loadData('tV2', 'startimagetrans')+'" step=".01" name="tV2-image-trans-num" class="tV2-image-trans-num" style="\
float: right !important;\
margin: -2px 2px 0px 10px !important;\
padding: 0px 0px 0px 0px !important;\
-webkit-appearance: none !important;\
appearance: none !important;\
background: black !important;\
color: white !important;\
border: 1px solid #777777 !important;\
width: 48px !important;\
height: 20px !important;\
">\
        <input type="range" min="0" max="1" pattern="^\d+$" value="'+BdApi.loadData('tV2', 'imagetrans')+'" step=".01" name="tV2-image-trans" class="tV2-image-trans" style="\
float: right !important;\
margin: 2px 0px 0px 0px !important;\
padding: 0px 0px 0px 0px !important;\
-webkit-appearance: none !important;\
appearance: none !important;\
width: 131px !important;\
height: 12px !important;\
background: #000000 !important;\
border: 1px solid #777777 !important;\
">\
        </div>\
        <div style="\
margin: 18px 0px 0px 0px !important;\
padding: 0px 0px 0px 0px !important;\
">\
            <button name="tV2-submit" class="tV2-submit" style="\
float: right !important;\
margin: 0px 2px 0px 0px !important;\
padding: 2px 16px 2px 16px !important;\
background: #777777 !important;\
color: black !important;\
font-weight: 500 !important;\
border: none !important;\
border-radius: 5px !important;\
">Submit</button>\
        </div>\
    </div>\
</div>';
    }
    finally {
        tV2.prototype.settingsPanelJS();
    };
};

//Extends Settings
tV2.prototype.settingsPanelJS = function() {
    setTimeout(function() {
        $.fn.textWidth = function(_text, _font) {
            const fakeEl = $('<span>').hide().appendTo(document.body).text(_text || this.val() || this.text()).css({font: _font || this.css('font'), whiteSpace: "pre"});
            const width = fakeEl.width();
            fakeEl.remove();
            return width;
        };
        $.fn.autoresize = function(options) {
            $(this).on('input mousemove', function() {
                $(this).css('width', Math.min(options.maxWidth,Math.max(options.minWidth,$(this).textWidth()+options.padding)));
            }).trigger('input mousemove');
            return this;
        };
        $.fn.autoresizeOnDemand = function(options) {
            $(this).css('width', Math.min(options.maxWidth,Math.max(options.minWidth,$(this).textWidth()+options.padding)));
            return this;
        };
        const bgimageBounds = {padding:4,minWidth:48,maxWidth:465};
        $('.tV2-image').autoresizeOnDemand(bgimageBounds);
        if ($('.tV2-image').val().toLowerCase() !== 'None'.toLowerCase()) {
            $('#tV2-image-trans').removeClass('tV2-hide');
        } else {
            $('#tV2-image-trans').addClass('tV2-hide');
        };
        if ($('.tV2-image').val().length === 0) {
            $('#tV2-image-trans').addClass('tV2-hide');
        }
        $('.tV2-image').on('input', function () {
            if ($('.tV2-image').val().toLowerCase() !== 'None'.toLowerCase()) {
                $('#tV2-image-trans').removeClass('tV2-hide');
            } else {
                $('#tV2-image-trans').addClass('tV2-hide');
            };
            if ($('.tV2-image').val().length === 0) {
                $('#tV2-image-trans').addClass('tV2-hide');
            }
        });
        $('.tV2-submit').on('click', function() {
            const userhex = parseInt($('.tV2-usercolor').val().substr(1), 16);
            const usercolor = ((userhex >> 16) & 255)+','+((userhex >> 8) & 255)+','+(userhex & 255)
            const startcolor = $('.tV2-usercolor').val()
            const trans = $('.tV2-trans').val();
            const guilds = $('.tV2-guilds').val();
            const badge = $('.tV2-badge').val();
            const imagetrans = $('.tV2-image-trans').val();
            BdApi.saveData('tV2', 'usercolor', usercolor);
            BdApi.saveData('tV2', 'startcolor', startcolor);
            if (trans.length === 1) {
                BdApi.saveData('tV2', 'trans', trans);
            } else {
                BdApi.saveData('tV2', 'trans', trans.substr(1));
            };
            BdApi.saveData('tV2', 'starttrans', trans);
            BdApi.saveData('tV2', 'startguilds', guilds);
            BdApi.saveData('tV2', 'startbadge', badge);
            BdApi.saveData('tV2', 'startimagetrans', imagetrans);
            BdApi.saveData('tV2', 'guilds', guilds);
            BdApi.saveData('tV2', 'badge', badge);
            BdApi.saveData('tV2', 'imagetrans', imagetrans);
            if ($('.tV2-image').val() == 0) {
                BdApi.saveData('tV2', 'image', 'None');;
            } else {
                BdApi.saveData('tV2', 'image', ($('.tV2-image').val()));;
            };
            tV2.prototype.updateTheme();
        });
        $('.tV2-color-reset').on('click', function() {
            $('.tV2-usercolor').val('#000000');
        });
        $('.tV2-trans-reset').on('click', function() {
            $('.tV2-trans-num').val('1');
            $('.tV2-trans').val('1');
        });
        $('.tV2-guild-reset').on('click', function() {
            $('.tV2-guilds-num').val('48');
            $('.tV2-guilds').val('48');
        });
        $('.tV2-badge-reset').on('click', function() {
            $('.tV2-badge-num').val('18');
            $('.tV2-badge').val('18');
        });
        $('.tV2-image-reset').on('click', function() {
            $('.tV2-image').val('None');
            $('.tV2-image').autoresizeOnDemand(bgimageBounds);
            $('#tV2-image-trans').addClass('tV2-hide');
        });
        $('.tV2-image-trans-reset').on('click', function() {
            $('.tV2-image-trans-num').val('.15');
            $('.tV2-image-trans').val('.15');
        });
        $('.tV2-trans').on('change mousemove', function() {
            $('.tV2-trans-num').val(this.value);
        });
        $('.tV2-trans-num').on('input', function() {
            $('.tV2-trans').val(this.value);
        });
        $('.tV2-guilds').on('change mousemove', function() {
            $('.tV2-guilds-num').val(this.value);
        });
        $('.tV2-guilds-num').on('input', function() {
            $('.tV2-guilds').val(this.value);
        });
        $('.tV2-badge').on('change mousemove', function() {
            $('.tV2-badge-num').val(this.value);
        });
        $('.tV2-badge-num').on('input', function() {
            $('.tV2-badge').val(this.value);
        });
        $('.tV2-image-trans').on('change mousemove', function() {
            $('.tV2-image-trans-num').val(this.value);
        });
        $('.tV2-image-trans-num').on('input', function() {
            $('.tV2-image-trans').val(this.value);
        });
        $('.tV2-image').autoresize(bgimageBounds);
        $('.tV2-usercolor').on('input', function() {
            const userhex = parseInt($('.tV2-usercolor').val().substr(1), 16);
            const usercolor = ((userhex >> 16) & 255)+','+((userhex >> 8) & 255)+','+(userhex & 255)
            const startcolor = $('.tV2-usercolor').val()
            BdApi.saveData('tV2', 'usercolor', usercolor);
            BdApi.saveData('tV2', 'startcolor', startcolor);
        });
    }, 1);
};

//Sets up the plugin and injects the newest jQuery
tV2.prototype.startupSetup = function() {
    const jQ3 = document.createElement('script');
    jQ3.src = '//code.jquery.com/jquery-3.3.1.min.js';
    jQ3.classList.add('tV2-jQ3');
    if (BdApi.loadData('tV2', 'loaded') == undefined) {
        BdApi.saveData('tV2', 'loaded', 'False');
        BdApi.saveData('tV2', 'startcolor', '#000000');
        BdApi.saveData('tV2', 'starttrans', '1');
        BdApi.saveData('tV2', 'startguilds', '48');
        BdApi.saveData('tV2', 'startbadge', '18');
        BdApi.saveData('tV2', 'startimagetrans', '.15');
        BdApi.saveData('tV2', 'usercolor', '#000000');
        BdApi.saveData('tV2', 'trans', '1');
        BdApi.saveData('tV2', 'guilds', '48');
        BdApi.saveData('tV2', 'badge', '18');
        BdApi.saveData('tV2', 'image', 'None');
        BdApi.saveData('tV2', 'imagetrans', '.15');
        document.getElementsByTagName('head')[0].appendChild(jQ3);
        BdApi.saveData('tV2', 'loaded', 'True');
    } else if (BdApi.loadData('tV2', 'loaded') == 'False') {
        if (BdApi.loadData('tV2', 'startcolor') == undefined) {
            BdApi.saveData('tV2', 'startcolor', '#000000');
            BdApi.saveData('tV2', 'usercolor', '#000000');
        };
        if (BdApi.loadData('tV2', 'starttrans') == undefined) {
            BdApi.saveData('tV2', 'starttrans', '1');
            BdApi.saveData('tV2', 'trans', '1');
        };
        if (BdApi.loadData('tV2', 'startguilds') == undefined) {
            BdApi.saveData('tV2', 'startguilds', '48');
            BdApi.saveData('tV2', 'guilds', '48');
        };
        if (BdApi.loadData('tV2', 'startbadge') == undefined) {
            BdApi.saveData('tV2', 'startbadge', '18');
            BdApi.saveData('tV2', 'badge', '18');
        };
        if (BdApi.loadData('tV2', 'image') == undefined) {
            BdApi.saveData('tV2', 'image', 'None');
        };
        if (BdApi.loadData('tV2', 'startimagetrans') == undefined) {
            BdApi.saveData('tV2', 'startimagetrans', '.15');
            BdApi.saveData('tV2', 'imagetrans', '.15');
        };
        document.getElementsByTagName('head')[0].appendChild(jQ3);
        BdApi.saveData('tV2', 'loaded', 'True');
    };
};

//When called updates the theme in Discord
tV2.prototype.updateTheme = function() {
    const tV2_web = '\
<style class="tV2-web">\
@import url("https://raw.githack.com/AdventGit/Discord-Things/master/themes/tV2.css")\
</style>';
    const numGuildSize = parseInt(BdApi.loadData('tV2', 'guilds'), 10);
    const numBadgeSize = parseInt(BdApi.loadData('tV2', 'badge'), 10);
    const shiftPos = (numGuildSize-58);
    const guildWidth = (72+shiftPos);
    const pillHoverHeight = (numGuildSize/1.5)
    const tV2_base = '\
<style class="tV2-base">\
:root{\
text-rendering: geometricPrecision !important;\
-webkit-font-smoothing: antialiased !important;\
font-variant-ligatures: none !important;\
text-decoration: none !important;\
background: rgba(0,0,0,'+BdApi.loadData('tV2', 'trans')+') !important;\
--user-color: rgba('+BdApi.loadData('tV2', 'usercolor')+',1);\
--user-color-smooth: rgba('+BdApi.loadData('tV2', 'usercolor')+',.22);\
--neutral: rgba(100, 100, 100, .5);\
--neutral-hsla-trans: hsla(0, 0%, 42%, .3);\
--neutral-text: hsla(0, 0%, 100%, .26);\
--neutral-smooth: hsla(0, 0%, 100%, .1);\
--neutral-guild: hsla(0, 0%, 100%, .48);\
--dark: rgba(26, 26, 26, .92);\
--light: rgba(220, 220, 220, .78);\
--light-o: rgba(229, 229, 229, 1);\
--guild-size: '+numGuildSize+'px;\
--shift-pos: '+shiftPos+'px;\
--guild-width: '+guildWidth+'px;\
--pill-hover-h: '+pillHoverHeight+'px;\
</style>';
    if ($('head .tV2-web').length === 0) {
        $('head').append(tV2_web);
    };
    if ($('head .tV2-base').length === 0) {
        $('head').append(tV2_base);
    } else {
        $('head .tV2-base').remove();
        $(tV2_base).insertBefore('head .tV2-web');
    };
    if (BdApi.loadData('tV2', 'image') !== 'None') {
    const tV2_optional_image = '\
<style class="tV2-image-css">\
:root::after {\
content: "";\
width: inherit !important;\
height: inherit !important;\
background-image: url("'+BdApi.loadData('tV2', 'image')+'") !important;\
background-size: cover !important;\
background-repeat: no-repeat !important;\
background-position: center !important;\
position: absolute !important;\
top: 0px !important;\
left: 0px !important;\
bottom: 0px !important;\
right: 0px !important;\
opacity: '+BdApi.loadData('tV2', 'imagetrans')+' !important;\
z-index: -1 !important;\
}</style>';
    if ($('head .tV2-image-css').length === 0) {
        $(tV2_optional_image).insertAfter('head .tV2-base');
    } else if (($('head .tV2-image-css').length !== 0) && (BdApi.loadData('tV2', 'image') !== 'None')) {
        $('head .tV2-image-css').remove();
        $(tV2_optional_image).insertAfter('head .tV2-base');
    };
    } else if ((BdApi.loadData('tV2', 'image') == 'None') && ($('head .tV2-image-css').length !== 0)) {
        $('head .tV2-image-css').remove();
    };
};

//Functions that should only run once after setup
tV2.prototype.runOnce = function() {
    if ($('div[data-no-focus-lock="true"] div.modal-3c3bKg').length !== 0) {
        $('form.modal-yWgWj- div.footer-3rDWdC button div.contents-18-Yxp:contains(Okay)').click();
    }
};

tV2.prototype.mutAction = function() {
    if ($(tV2.prototype.activityTarget()).length > 0 && $(tV2.prototype.removeTarget()).length > 0) {
        $(tV2.prototype.removeTarget()).remove();
    }
}
tV2.prototype.mutObvs = new MutationObserver(function(mutations) {
    tV2.prototype.mutAction();
});
tV2.prototype.mutTargets = function() {
    tV2.prototype.mutObvs.observe($(tV2.prototype.mutTarget()).get(0), tV2.prototype.mutationObserverConfig());
};

tV2.prototype.mutAction2 = function() {
    $('div.search-36MZv-').next().next().addClass('customNuke');
    $('div.search-36MZv-').insertAfter($('div.iconWrapper-2OrFZ1[aria-label="Mentions"]'));
    if ($('div.children-19S4PO div.status-1XNdyw').length === 0) {
        $('div.iconWrapper-2OrFZ1[aria-label="Member List"]').insertAfter($('div.iconWrapper-2OrFZ1[aria-label="Mentions"]'));
    } else {
        $('div.iconWrapper-2OrFZ1[aria-label="Add Friends to DM"]').insertBefore($('div.iconWrapper-2OrFZ1[aria-label="Start Voice Call"]'));
    }
    $('div.inner-zqa7da div.buttons-205you button[aria-label="Send a gift"]').addClass('customNuke');
    $('div.inner-zqa7da div.buttons-205you > div').addClass('customNuke');
}
tV2.prototype.mutObvs2 = new MutationObserver(function(mutations) {
    tV2.prototype.mutAction2();
});
tV2.prototype.mutTargets2 = function() {
    tV2.prototype.mutObvs2.observe($(tV2.prototype.mutTarget()).get(0), tV2.prototype.mutationObserverConfig2());
    tV2.prototype.mutObvs2.observe($(tV2.prototype.mutTarget2()).get(0), tV2.prototype.mutationObserverConfig2());
}

tV2.prototype.mutAction3 = function() {
    if (String(window.getComputedStyle($('head')[0]).getPropertyValue('--curVer')) === "") {
        setTimeout(function() {
            const onVer = String(window.getComputedStyle($('head')[0]).getPropertyValue('--curVer')).substr(1);
            if ($('div.theme-dark div.modal-3c3bKg').length === 0 && tV2.prototype.curVer() < onVer) {
                tV2.prototype.verAction();
            }
        }, 1);
    } else {
        const onVer = String(window.getComputedStyle($('head')[0]).getPropertyValue('--curVer')).substr(1);
        if ($('div.theme-dark div.modal-3c3bKg').length === 0 && tV2.prototype.curVer() < onVer) {
            tV2.prototype.verAction();
        }
    }
}
tV2.prototype.mutObvs3 = new MutationObserver(function(mutations) {
    tV2.prototype.mutAction3();
});
tV2.prototype.mutTargets3 = function() {
    tV2.prototype.mutObvs3.observe($(tV2.prototype.mutTarget()).get(0), tV2.prototype.mutationObserverConfig2());
}

//On plugin start
tV2.prototype.start = function() {
    tV2.prototype.startupSetup();
    tV2.prototype.updateTheme();
    tV2.prototype.runOnce();
    tV2.prototype.mutTargets();
    tV2.prototype.mutTargets2();
    tV2.prototype.mutTargets3();
    tV2.prototype.mutAction();
    tV2.prototype.mutAction2();
    tV2.prototype.mutAction3();
    BdApi.showToast('tV2: Loaded!');
};

//On plugin stop
tV2.prototype.stop = function() {
    try {
        $('.layers-3iHuyZ').prop('onclick',null)
        $('head .tV2-base').remove();
        $('head .tV2-web').remove();
        $('head .tV2-image-css').remove();
        $('head .tV2-jQ3').remove();
        tV2.prototype.mutObvs.disconnect();
        tV2.prototype.mutObvs2.disconnect();
        tV2.prototype.mutObvs3.disconnect();
    }
    finally {
        BdApi.saveData('tV2', 'loaded', 'False');
        BdApi.showToast('tV2: Unloaded!');
    };
};