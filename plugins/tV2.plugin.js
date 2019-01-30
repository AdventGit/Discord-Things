//META{"name":"tV2"}*//

//Base functions
const BDA = BdApi;
const tV2 = function(){};

//BD information init
tV2.prototype.getName = function() {
    return 'tV2';
};
tV2.prototype.getDescription = function() {
    return 'Better theming idea';
};
tV2.prototype.getVersion = function() {
    return '1.0.0';
};
tV2.prototype.getAuthor = function() {
    return 'Advent';
};

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
background: url(https://puu.sh/CcbNy.png) !important;\
background-repeat: no-repeat !important;\
background-size: 16px 16px !important;\
background-position: center !important;\
background-color: #777777 !important;\
color: white !important;\
border: none !important;\
border-radius: 5px !important;\
"></button>\
        <input type="color" value="' + BDA.loadData('tV2', 'startcolor') + '" name="tV2-usercolor" class="tV2-usercolor" style="\
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
background: url(https://puu.sh/CcbNy.png) !important;\
background-repeat: no-repeat !important;\
background-size: 16px 16px !important;\
background-position: center !important;\
background-color: #777777 !important;\
color: white !important;\
border: none !important;\
border-radius: 5px !important;\
"></button>\
        <input type="number" min="0" max="1" value="' + BDA.loadData('tV2', 'starttrans') + '" step=".01" name="tV2-trans-num" class="tV2-trans-num" style="\
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
        <input type="range" min="0" max="1" value="' + BDA.loadData('tV2', 'starttrans') + '" step=".01" name="tV2-trans" class="tV2-trans" style="\
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
background: url(https://puu.sh/CcbNy.png) !important;\
background-repeat: no-repeat !important;\
background-size: 16px 16px !important;\
background-position: center !important;\
background-color: #777777 !important;\
color: white !important;\
border: none !important;\
border-radius: 5px !important;\
"></button>\
        <input type="number" min="30" max="70" value="' + BDA.loadData('tV2', 'startguilds') + '" step="1" name="tV2-guilds-num" class="tV2-guilds-num" style="\
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
        <input type="range" min="30" max="70" value="' + BDA.loadData('tV2', 'guilds') + '" step="1" name="tV2-guilds" class="tV2-guilds" style="\
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
background: url(https://puu.sh/CcbNy.png) !important;\
background-repeat: no-repeat !important;\
background-size: 16px 16px !important;\
background-position: center !important;\
background-color: #777777 !important;\
color: white !important;\
border: none !important;\
border-radius: 5px !important;\
"></button>\
        <input type="number" min="16" max="22" pattern="^\d+$" value="' + BDA.loadData('tV2', 'startbadge') + '" step="2" name="tV2-badge-num" class="tV2-badge-num" style="\
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
        <input type="range" min="16" max="22" pattern="^\d+$" value="' + BDA.loadData('tV2', 'badge') + '" step="2" name="tV2-badge" class="tV2-badge" style="\
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
background: url(https://puu.sh/CcbNy.png) !important;\
background-repeat: no-repeat !important;\
background-size: 16px 16px !important;\
background-position: center !important;\
background-color: #777777 !important;\
color: white !important;\
border: none !important;\
border-radius: 5px !important;\
"></button>\
        <input type="text" value="' + BDA.loadData('tV2', 'image') + '" name="tV2-image" class="tV2-image" style="\
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
background: url(https://puu.sh/CcbNy.png) !important;\
background-repeat: no-repeat !important;\
background-size: 16px 16px !important;\
background-position: center !important;\
background-color: #777777 !important;\
color: white !important;\
border: none !important;\
border-radius: 5px !important;\
"></button>\
        <input type="number" min="0" max="1" pattern="^\d+$" value="' + BDA.loadData('tV2', 'startimagetrans') + '" step=".01" name="tV2-image-trans-num" class="tV2-image-trans-num" style="\
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
        <input type="range" min="0" max="1" pattern="^\d+$" value="' + BDA.loadData('tV2', 'imagetrans') + '" step=".01" name="tV2-image-trans" class="tV2-image-trans" style="\
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
                $(this).css('width', Math.min(options.maxWidth,Math.max(options.minWidth,$(this).textWidth() + options.padding)));
            }).trigger('input mousemove');
            return this;
        };
        $.fn.autoresizeOnDemand = function(options) {
            $(this).css('width', Math.min(options.maxWidth,Math.max(options.minWidth,$(this).textWidth() + options.padding)));
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
            const usercolor = ((userhex >> 16) & 255) + ',' + ((userhex >> 8) & 255) + ',' + (userhex & 255)
            const startcolor = $('.tV2-usercolor').val()
            const trans = $('.tV2-trans').val();
            const guilds = $('.tV2-guilds').val();
            const badge = $('.tV2-badge').val();
            const imagetrans = $('.tV2-image-trans').val();
            BDA.saveData('tV2', 'usercolor', usercolor);
            BDA.saveData('tV2', 'startcolor', startcolor);
            if (trans.length === 1) {
                BDA.saveData('tV2', 'trans', trans);
            } else {
                BDA.saveData('tV2', 'trans', trans.substr(1));
            };
            BDA.saveData('tV2', 'starttrans', trans);
            BDA.saveData('tV2', 'startguilds', guilds);
            BDA.saveData('tV2', 'startbadge', badge);
            BDA.saveData('tV2', 'startimagetrans', imagetrans);
            BDA.saveData('tV2', 'guilds', guilds);
            BDA.saveData('tV2', 'badge', badge);
            BDA.saveData('tV2', 'imagetrans', imagetrans);
            if ($('.tV2-image').val() == 0) {
                BDA.saveData('tV2', 'image', 'None');;
            } else {
                BDA.saveData('tV2', 'image', ($('.tV2-image').val()));;
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
            $('.tV2-guilds-num').val('50');
            $('.tV2-guilds').val('50');
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
            const usercolor = ((userhex >> 16) & 255) + ',' + ((userhex >> 8) & 255) + ',' + (userhex & 255)
            const startcolor = $('.tV2-usercolor').val()
            BDA.saveData('tV2', 'usercolor', usercolor);
            BDA.saveData('tV2', 'startcolor', startcolor);
        });
    }, 1);
};

//Sets up the plugin and injects the newest jQuery
tV2.prototype.startupSetup = function() {
    const jQ3 = document.createElement('script');
    jQ3.src = '//code.jquery.com/jquery-3.3.1.min.js';
    jQ3.classList.add('tV2-jQ3');
    if (BDA.loadData('tV2', 'loaded') == undefined) {
        BDA.saveData('tV2', 'loaded', 'False');
        BDA.saveData('tV2', 'startcolor', '#000000');
        BDA.saveData('tV2', 'starttrans', '1');
        BDA.saveData('tV2', 'startguilds', '50');
        BDA.saveData('tV2', 'startbadge', '18');
        BDA.saveData('tV2', 'startimagetrans', '.15');
        BDA.saveData('tV2', 'usercolor', '#000000');
        BDA.saveData('tV2', 'trans', '1');
        BDA.saveData('tV2', 'guilds', '50');
        BDA.saveData('tV2', 'badge', '18');
        BDA.saveData('tV2', 'image', 'None');
        BDA.saveData('tV2', 'imagetrans', '.15');
        document.getElementsByTagName('head')[0].appendChild(jQ3);
        BDA.saveData('tV2', 'loaded', 'True');
    } else if (BDA.loadData('tV2', 'loaded') == 'False') {
        if (BDA.loadData('tV2', 'startcolor') == undefined) {
            BDA.saveData('tV2', 'startcolor', '#000000');
            BDA.saveData('tV2', 'usercolor', '#000000');
        };
        if (BDA.loadData('tV2', 'starttrans') == undefined) {
            BDA.saveData('tV2', 'starttrans', '1');
            BDA.saveData('tV2', 'trans', '1');
        };
        if (BDA.loadData('tV2', 'startguilds') == undefined) {
            BDA.saveData('tV2', 'startguilds', '50');
            BDA.saveData('tV2', 'guilds', '50');
        };
        if (BDA.loadData('tV2', 'startbadge') == undefined) {
            BDA.saveData('tV2', 'startbadge', '18');
            BDA.saveData('tV2', 'badge', '18');
        };
        if (BDA.loadData('tV2', 'image') == undefined) {
            BDA.saveData('tV2', 'image', 'None');
        };
        if (BDA.loadData('tV2', 'startimagetrans') == undefined) {
            BDA.saveData('tV2', 'startimagetrans', '.15');
            BDA.saveData('tV2', 'imagetrans', '.15');
        };
        document.getElementsByTagName('head')[0].appendChild(jQ3);
        BDA.saveData('tV2', 'loaded', 'True');
    };
};

//When called updates the theme in Discord
tV2.prototype.updateTheme = function() {
    const tV2_web = '\
<style class="tV2-web">\
@import url("https://raw.githack.com/AdventGit/Discord-Things/master/tV2/New_Advent.theme.css")\
</style>';
    const numGuildSize = parseInt(BDA.loadData('tV2', 'guilds'), 10);
    const numBadgeSize = parseInt(BDA.loadData('tV2', 'badge'), 10);
    const font_size = ((numGuildSize * 2.2) / (10 + (numGuildSize / 125)));
    const read_all_font_size = ((numGuildSize * 2.5) / (10 + (numGuildSize / 49)));
    const guild_base_size = (numGuildSize + 4);
    const friend_icon_size = (numGuildSize / 1.35);
    const guild_add_size_h = ((numGuildSize / -1) + ((numGuildSize * 2) / 3.95));
    const guild_add_size_v = -1;
    const guild_error_size_h = (guild_add_size_h - 1);
    const guild_error_size_v = (((((numGuildSize * 2) / 2) / 4.6) + 0) * 2);
    const guild_base_h = (guild_error_size_h / 11);
    if (BDA.loadData('tV2', 'guilds') < 50) {
        var server_menu_width = (65 - (50 - BDA.loadData('tV2', 'guilds')));
    } else if (BDA.loadData('tV2', 'guilds') > 50)  {
        var server_menu_width = (65 + (BDA.loadData('tV2', 'guilds') - 50));
    } else {
        var server_menu_width = 65;
    };
    const dms_transform = ((numGuildSize + 6) * -1);
    const dms_margin = ((-1 * dms_transform) + 4);
    const tV2_base = '\
<style class="tV2-base">\
:root{\
text-rendering: geometricPrecision !important;\
-webkit-font-smoothing: antialiased !important;\
font-variant-ligatures: none !important;\
text-decoration: none !important;\
background: rgba(0,0,0,' + BDA.loadData('tV2', 'trans') + ') !important;\
--user-color: rgba(' + BDA.loadData('tV2', 'usercolor') + ',1);\
--user-color-smooth: rgba(' + BDA.loadData('tV2', 'usercolor') + ',.22);\
--neutral: rgba(100, 100, 100, .5);\
--neutral-opaque: hsla(0, 0%, 16%, .78);\
--neutral-mini-trans: hsla(0, 0%, 16%, .94);\
--neutral-semi-trans: rgba(127, 127, 127, .42);\
--neutral-hsla-trans: hsla(0, 0%, 42%, .3);\
--neutral-hsla-trans-plugin: hsla(0, 0%, 21%, .3);\
--neutral-text: hsla(0, 0%, 100%, .26);\
--neutral-smooth: hsla(0, 0%, 100%, .1);\
--neutral-guild: hsla(0, 0%, 100%, .48);\
--dark: rgba(26, 26, 26, .92);\
--light: rgba(229, 229, 229, .78);\
--light-o: rgba(229, 229, 229, 1);\
--guild-size: ' + numGuildSize + 'px;\
--server-menu-width: ' + server_menu_width + 'px;\
--badge-size: ' + numBadgeSize + 'px;\
--font-size: ' + font_size + 'px;\
--read-all-font-size: ' + read_all_font_size + 'px;\
--guild-base-size: ' + guild_base_size + 'px;\
--guild-base-h: ' + guild_base_h + 'px;\
--friend-icon-size: ' + friend_icon_size + 'px;\
--dms-transform: ' + dms_transform + 'px;\
--dms-margin: ' + dms_margin + 'px;\
--guild-add-size-h: ' + guild_add_size_h + 'px;\
--guild-add-size-v: ' + guild_add_size_v + 'px;\
--guild-error-size-h: -' + guild_error_size_h + 'px;\
--guild-error-size-v: ' + guild_error_size_v + 'px;}\
</style>';
    const tV2_base_css = '\
<style class="tV2-base-css">\
.tV2-trans::-webkit-slider-thumb,\
.tV2-guilds::-webkit-slider-thumb,\
.tV2-badge::-webkit-slider-thumb,\
.tV2-image-trans::-webkit-slider-thumb{\
-webkit-appearance: none !important;\
appearance: none !important;\
width: 12px !important;\
height: 12px !important;\
background: #777777 !important;}\
.tV2-hide{\
-webkit-box-direction: unset !important;\
-webkit-box-orient: unset !important;\
-webkit-box-pack: unset !important;\
animation: none !important;\
background: transparent !important;\
border-radius: 0px !important;\
border: none !important;\
bottom: unset !important;\
box-shadow: none !important;\
box-sizing: unset !important;\
color: unset !important;\
cursor: unset !important;\
display: none !important;\
flex-direction: unset !important;\
flex-wrap: unset !important;\
font-size: 0px !important;\
height: 0px !important;\
justify-content: unset !important;\
left: unset !important;\
letter-spacing: 0px !important;\
line-height: 0px !important;\
margin: 0px !important;\
opacity: 0 !important;\
outline: none !important;\
overflow: unset !important;\
padding: 0px !important;\
pointer-events: unset !important;\
position: absolute !important;\
right: unset !important;\
top: unset !important;\
transform: none !important;\
transition: none !important;\
vertical-align: unset !important;\
visibility: hidden !important;\
width: 0px !important;\
z-index: -99999 !important;}\
body div#app-mount div.popouts-3dRSmE div[class="noArrow-3BYQ0Z noShadow-321ZPm popout-3sVMXz \
popoutBottom-1YbShG arrowAlignmentTop-iGQczz popoutbottom theme-undefined"]{\
left: 100% !important;\
top: 51px !important;\
transform: translateX(-123.7%) !important;}\
body div#app-mount div.app-19_DXt div.app div.layers-3iHuyZ div.layer-3QrUeG \
div.flex-1xMQg5.container-2lgZY8 div.flex-1xMQg5.base-3dtUhz div.flex-1xMQg5.spacer-29U_x8 div.chat-3bRxxu \
div.titleWrapper-1l0xT9 div.flex-1xMQg5.headerBar-UHpsPw div.flex-1xMQg5.flex-1O1GKY.flex-1O1GKY \
div.search-l1Wz-Q{\
margin: 0px 4px 0px 8px !important;\
min-width: 321px !important;\
max-width: 321px !important;\
width: 321px !important;}\
body div#app-mount div.app-19_DXt div.app div.layers-3iHuyZ div.layer-3QrUeG \
div.flex-1xMQg5.container-2lgZY8 div.flex-1xMQg5.base-3dtUhz div.flex-1xMQg5.spacer-29U_x8 div.chat-3bRxxu \
div.titleWrapper-1l0xT9 div.flex-1xMQg5.headerBar-UHpsPw div.flex-1xMQg5.flex-1O1GKY.flex-1O1GKY \
div.search-l1Wz-Q div.search-2oPWTC div.searchBar-3dMhjb{\
min-width: 322px !important;\
max-width: 322px !important;\
width: 322px !important;}\
body div#app-mount div.app-19_DXt div.app div.layers-3iHuyZ div.layer-3QrUeG \
div.flex-1xMQg5.container-2lgZY8 div.flex-1xMQg5.base-3dtUhz div.flex-1xMQg5.spacer-29U_x8 div.chat-3bRxxu \
div.titleWrapper-1l0xT9 div.flex-1xMQg5.headerBar-UHpsPw div.flex-1xMQg5.flex-1O1GKY.flex-1O1GKY \
.divider-2PMBlV{\
-webkit-box-direction: unset !important;\
-webkit-box-orient: unset !important;\
-webkit-box-pack: unset !important;\
animation: none !important;\
background: transparent !important;\
border-radius: 0px !important;\
border: none !important;\
bottom: unset !important;\
box-shadow: none !important;\
box-sizing: unset !important;\
color: unset !important;\
cursor: unset !important;\
display: none !important;\
flex-direction: unset !important;\
flex-wrap: unset !important;\
font-size: 0px !important;\
height: 0px !important;\
justify-content: unset !important;\
left: unset !important;\
letter-spacing: 0px !important;\
line-height: 0px !important;\
margin: 0px !important;\
opacity: 0 !important;\
outline: none !important;\
overflow: unset !important;\
padding: 0px !important;\
pointer-events: unset !important;\
position: absolute !important;\
right: unset !important;\
top: unset !important;\
transform: none !important;\
transition: none !important;\
vertical-align: unset !important;\
visibility: hidden !important;\
width: 0px !important;\
z-index: -99999 !important;}</style>';
    const tV2_base_bd = '\
<style class="tV2-base-bd">\
.bda-slist li{\
background: var(--neutral-hsla-trans);\
border: none !important;\
border-radius: 3px !important;\
box-shadow: 0px 0px 4px 1px var(--neutral) inset !important;}\
.bda-header,\
.bda-description-wrap,\
.bda-footer{\
border: none !important;}\
.bda-links a{\
color: var(--user-color) !important;}\
.downloadLink-2oSgiF:hover{\
text-decoration: none !important;}\
.translate-button{\
width: 22px !important;\
height: 22px !important;}\
.send-button{\
width: 26px !important;\
height: 26px !important;\
position: absolute !important;\
right: 9px !important;\
top: 9px !important;}\
#files_directDownload{\
cursor: move !important;}\
#files_directDownload span{\
color: var(--neutral-text) !important;\
background: var(--neutral-hsla-trans) !important;\
border: 1px solid var(--neutral) !important;\
border-radius: 3px !important;}\
#files_directDownload svg{\
fill: var(--neutral) !important;}\
#files_directDownload .file .progress-bar{\
background: var(--user-color) !important;}\
#qs_button{\
display: block !important;\
margin-top: -30px !important;\
margin-left: 90px !important;}\
body > [id^="app"] > [class^="context"] > div > span{\
color: var(--neutral-text) !important;}\
body > [id^="app"] > [class^="context"] > div[class^="item-"]:hover{\
background: var(--neutral-hsla-trans) !important;}\
.downloadLink-1ywL9o{\
width: fit-content !important;}\
.toasts{\
display: block !important;\
position: absolute !important;\
width: inherit !important;\
float: left !important;\
bottom: 8% !important;\
left: 0px !important;\
right: 0px !important;\
top: unset !important;\
flex-direction: inherit !important;\
align-items: baseline !important;\
justify-content: inherit !important;\
pointer-events: none !important;\
z-index: 9999 !important;}\
.toast{\
background: var(--neutral-hsla-trans) !important;\
opacity: 1 !important;\
border-radius: 4px !important;\
box-shadow: none !important;\
font-weight: 500 !important;\
font-size: 14px !important;\
color: var(--user-color) !important;\
user-select: text !important;\
pointer-events: none !important;\
transform: translateY(-10px) !important;\
width: fit-content !important;\
margin: 10px auto 0px auto !important;\
padding: 10px !important;}\
.notice-2FJMB4{\
background: transparent !important;\
-webkit-app-region: no-drag !important;\
border-bottom: 1px solid var(--user-color) !important;\
border-radius: 0px !important;\
width: fit-content !important;\
left: calc(50% - 10px) !important;\
transform: translate(-50%, 0%) !important;}\
.dismiss-SCAH9H{\
width: 36px !important;\
height: 36px !important;\
background-position: 98% !important;\
background-size: 10px !important;\
bottom: 0px !important;\
right: 8px !important;\
left: unset !important;\
top: 0px !important;\
opacity: 1 !important;\
transition: none !important;\
border-bottom: 1px solid var(--user-color) !important;}\
.bd-toasts{\
display: block !important;\
position: absolute !important;\
float: left !important;\
bottom: 8% !important;\
left: 50% !important;\
right: 0px !important;\
top: unset !important;\
transform: translate(-50%, 0%) !important;\
flex-direction: inherit !important;\
align-items: baseline !important;\
justify-content: inherit !important;\
pointer-events: none !important;\
width: max-content !important;\
height: max-content !important;\
z-index: 9999 !important;}\
.bd-toast{\
background: var(--neutral-hsla-trans) !important;\
opacity: 1 !important;\
border-radius: 4px !important;\
box-shadow: none !important;\
font-weight: 500 !important;\
font-size: 14px !important;\
color: var(--user-color) !important;\
user-select: none !important;\
pointer-events: none !important;\
width: fit-content !important;\
margin: 10px auto 0px auto !important;\
padding: 10px !important;\
transform: none !important;\
}</style>';
    if ($('head .tV2-web').length === 0) {
        $('head').prepend(tV2_web);
    };
    if ($('head .tV2-base').length === 0) {
        $('head').prepend(tV2_base);
    } else {
        $('head .tV2-base').remove();
        $(tV2_base).insertBefore('head .tV2-web');
    };
    if ($('head .tV2-base-css').length === 0) {
        $(tV2_base_css).insertAfter('head .tV2-web');
    };
    if ($('head .tV2-base-bd').length === 0) {
        $(tV2_base_bd).insertAfter('head .tV2-web');
    };
    if (BDA.loadData('tV2', 'image') !== 'None') {
    const tV2_optional_image = '\
<style class="tV2-image-css">\
:root::after {\
content: "";\
width: inherit !important;\
height: inherit !important;\
background-image: url("' + BDA.loadData('tV2', 'image') + '") !important;\
background-size: cover !important;\
background-repeat: no-repeat !important;\
background-position: center !important;\
position: absolute !important;\
top: 0px !important;\
left: 0px !important;\
bottom: 0px !important;\
right: 0px !important;\
opacity: ' + BDA.loadData('tV2', 'imagetrans') + ' !important;\
z-index: -1 !important;\
}</style>';
    if ($('head .tV2-image-css').length === 0) {
        $(tV2_optional_image).insertAfter('head .tV2-base');
    } else if (($('head .tV2-image-css').length !== 0) && (BDA.loadData('tV2', 'image') !== 'None')) {
        $('head .tV2-image-css').remove();
        $(tV2_optional_image).insertAfter('head .tV2-base');
    };
    } else if ((BDA.loadData('tV2', 'image') == 'None') && ($('head .tV2-image-css').length !== 0)) {
        $('head .tV2-image-css').remove();
    };
};

//Functions that should only run once after setup
tV2.prototype.runOnce = function() {
    $('.layers-3iHuyZ').prop('onclick',null);
    document.getElementsByClassName('layers-3iHuyZ')[0].onclick = function() {
        setTimeout(function() {
            try {
                $('.header-2o-2hj').prop('onclick',null);
                document.getElementsByClassName('header-2o-2hj')[0].onclick = function() {
                    setTimeout(function() {
                        const tV2_server_menu_css = '\
<style class="tV2-server-menu-css">\
body div#app-mount div.popouts-3dRSmE div[class="noArrow-3BYQ0Z popout-3sVMXz \
popoutBottom-1YbShG arrowAlignmentTop-iGQczz popoutbottom theme-undefined"]{\
top: 61px !important;\
width: 240px !important;}\
body div#app-mount div.popouts-3dRSmE div[class="noArrow-3BYQ0Z popout-3sVMXz \
popoutBottom-1YbShG arrowAlignmentTop-iGQczz popoutbottom theme-undefined"] div.menu-Sp6bN1{\
width: 240px !important;}</style>';
                        if ($('head .tV2-server-menu-css').length === 0) {
                            $(tV2_server_menu_css).insertAfter('head .tV2-base-css');
                        };
                    }, 0);
                };
            } catch (e) {};
            if ($('head .tV2-server-menu-css').length !== 0) {
                if ($('.popouts-3dRSmE .container-3cGP6G .item-2J1YMK.button-38aScr.lookBlank-3eh9lL.colorBrand-3pXr91.grow-q77ONN').length !== 0) {
                    $('head .tV2-server-menu-css').remove()
                };
            };
            $('head .tV2-text').remove();
        }, 0);
    };
    if (document.body.contains($('body > div#app-mount > div.app-19_DXt > div.app-2rEoOp > div.layers-3iHuyZ > div.layer-3QrUeG > div.flex-1xMQg5 > div.flex-1xMQg5 > div.flex-1xMQg5 > div.activityFeed-28jde9').get(0))) {
        $('body > div#app-mount > div.app-19_DXt > div.app-2rEoOp > div.layers-3iHuyZ > div.layer-3QrUeG > div.flex-1xMQg5 > div.flex-1xMQg5 > div.flex-1xMQg5 > div.activityFeed-28jde9 > div.flex-1xMQg5 > div.scrollerWrap-2lJEkd > div.scroller-2FKFPG > div.body-vr4WiF > div:nth-of-type(1)').addClass('carousel-bs');
        $('body > div#app-mount > div.app-19_DXt > div.app-2rEoOp > div.layers-3iHuyZ > div.layer-3QrUeG > div.flex-1xMQg5 > div.flex-1xMQg5 > div.flex-1xMQg5 > div.activityFeed-28jde9 > div.flex-1xMQg5 > div.scrollerWrap-2lJEkd > div.scroller-2FKFPG > div.body-vr4WiF > div:nth-of-type(2)').addClass('quicklaunch-bs');
        $('body > div#app-mount > div.app-19_DXt > div.app-2rEoOp > div.layers-3iHuyZ > div.layer-3QrUeG > div.flex-1xMQg5 > div.flex-1xMQg5 > div.flex-1xMQg5 > div.activityFeed-28jde9 > div.flex-1xMQg5 > div.scrollerWrap-2lJEkd > div.scroller-2FKFPG > div.body-vr4WiF > div:nth-of-type(3)').addClass('nowplaying-bs');
        $('body > div#app-mount > div.app-19_DXt > div.app-2rEoOp > div.layers-3iHuyZ > div.layer-3QrUeG > div.flex-1xMQg5 > div.flex-1xMQg5 > div.flex-1xMQg5 > div.activityFeed-28jde9 > div.flex-1xMQg5 > div.scrollerWrap-2lJEkd > div.scroller-2FKFPG > div.body-vr4WiF > div:nth-of-type(3) > div:nth-of-type(1)').addClass('nowplaying-bs-child');
        $('body > div#app-mount > div.app-19_DXt > div.app-2rEoOp > div.layers-3iHuyZ > div.layer-3QrUeG > div.flex-1xMQg5 > div.flex-1xMQg5 > div.flex-1xMQg5 > div.activityFeed-28jde9 > div.flex-1xMQg5 > div.scrollerWrap-2lJEkd > div.scroller-2FKFPG > div.body-vr4WiF > div:nth-of-type(4)').addClass('whatsnew-bs');
        $('body > div#app-mount > div.app-19_DXt > div.app-2rEoOp > div.layers-3iHuyZ > div.layer-3QrUeG > div.flex-1xMQg5 > div.flex-1xMQg5 > div.flex-1xMQg5 > div.activityFeed-28jde9 > div.flex-1xMQg5 > div.scrollerWrap-2lJEkd > div.scroller-2FKFPG > div.body-vr4WiF > div:nth-of-type(4) > div:nth-of-type(1)').addClass('whatsnew-bs-child');
    };
};

tV2.prototype.activityFeed = new MutationObserver(function(mutations) {
    if (document.body.contains($('body > div#app-mount > div.app-19_DXt > div.app-2rEoOp > div.layers-3iHuyZ > div.layer-3QrUeG > div.flex-1xMQg5 > div.flex-1xMQg5 > div.flex-1xMQg5 > div.activityFeed-28jde9').get(0))) {
        $('body > div#app-mount > div.app-19_DXt > div.app-2rEoOp > div.layers-3iHuyZ > div.layer-3QrUeG > div.flex-1xMQg5 > div.flex-1xMQg5 > div.flex-1xMQg5 > div.activityFeed-28jde9 > div.flex-1xMQg5 > div.scrollerWrap-2lJEkd > div.scroller-2FKFPG > div.body-vr4WiF > div:nth-of-type(1)').addClass('carousel-bs');
        $('body > div#app-mount > div.app-19_DXt > div.app-2rEoOp > div.layers-3iHuyZ > div.layer-3QrUeG > div.flex-1xMQg5 > div.flex-1xMQg5 > div.flex-1xMQg5 > div.activityFeed-28jde9 > div.flex-1xMQg5 > div.scrollerWrap-2lJEkd > div.scroller-2FKFPG > div.body-vr4WiF > div:nth-of-type(2)').addClass('quicklaunch-bs');
        $('body > div#app-mount > div.app-19_DXt > div.app-2rEoOp > div.layers-3iHuyZ > div.layer-3QrUeG > div.flex-1xMQg5 > div.flex-1xMQg5 > div.flex-1xMQg5 > div.activityFeed-28jde9 > div.flex-1xMQg5 > div.scrollerWrap-2lJEkd > div.scroller-2FKFPG > div.body-vr4WiF > div:nth-of-type(3)').addClass('nowplaying-bs');
        $('body > div#app-mount > div.app-19_DXt > div.app-2rEoOp > div.layers-3iHuyZ > div.layer-3QrUeG > div.flex-1xMQg5 > div.flex-1xMQg5 > div.flex-1xMQg5 > div.activityFeed-28jde9 > div.flex-1xMQg5 > div.scrollerWrap-2lJEkd > div.scroller-2FKFPG > div.body-vr4WiF > div:nth-of-type(4)').addClass('whatsnew-bs');
    };
});

tV2.prototype.activityfeedclasses = function() {
    tV2.prototype.activityFeed.observe($('body > div#app-mount > div.app-19_DXt > div.app-2rEoOp > div.layers-3iHuyZ > div.layer-3QrUeG > div.flex-1xMQg5 > div.flex-1xMQg5 > div.flex-1xMQg5').get(0), {
        attributeOldValue: false,
        attributes: false,
        characterData: false,
        characterDataoldValue: false,
        childList: true,
        subtree: true
    });
};

//On plugin start
tV2.prototype.start = function() {
    tV2.prototype.startupSetup();
    tV2.prototype.updateTheme();
    tV2.prototype.runOnce();
    tV2.prototype.activityfeedclasses();
    BDA.showToast('tV2: Loaded!');
};

//On plugin stop
tV2.prototype.stop = function() {
    try {
        $('.layers-3iHuyZ').prop('onclick',null)
        $('head .tV2-base-bd').remove();
        $('head .tV2-base-css').remove();
        $('head .tV2-base').remove();
        $('head .tV2-web').remove();
        $('head .tV2-image-css').remove();
        $('head .tV2-text').remove();
        $('head .tV2-jQ3').remove();
        tV2.prototype.activityFeed.disconnect();
    }
    finally {
        BDA.saveData('tV2', 'loaded', 'False');
        BDA.showToast('tV2: Unloaded!');
    };
};