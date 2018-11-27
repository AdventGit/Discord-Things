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
        <div>User Color: \
        <input type="color" value="' + BDA.loadData('tV2', 'startcolor') + '" name="tV2-usercolor" class="tV2-usercolor" style="\
background: transparent !important;\
border: none !important;\
outline: none !important;\
float: right !important;\
margin: -6px 0px 0px 498px !important;\
padding: 0px 0px 0px 0px !important;\
width: 52px !important;\
height: 27px !important;\
">\
        </div>\
        <div style="padding: 6px 0px 0px 0px !important;">Transparency Amount: \
        <input type="number" min="0" max="1" value="' + BDA.loadData('tV2', 'starttrans') + '" step=".01" name="tV2-trans-num" class="tV2-trans-num" style="\
float: right !important;\
margin: -2px 2px 0px 10px !important;\
padding: 0px 0px 0px 0px !important;\
-webkit-appearance: none !important;\
appearance: none !important;\
background: black !important;\
color: white !important;\
border: 1px solid #777777 !important;\
width: 48px !important;\
height: 19px !important;\
">\
        <input type="range" min="0" max="1" value="' + BDA.loadData('tV2', 'starttrans') + '" step=".01" name="tV2-trans" class="tV2-trans" style="\
float: right !important;\
margin: 0px 0px 0px 0px !important;\
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
height: 19px !important;\
">\
        <input type="range" min="30" max="70" value="' + BDA.loadData('tV2', 'guilds') + '" step="1" name="tV2-guilds" class="tV2-guilds" style="\
float: right !important;\
margin: 0px 0px 0px 0px !important;\
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
height: 19px !important;\
">\
        <input type="range" min="16" max="22" pattern="^\d+$" value="' + BDA.loadData('tV2', 'badge') + '" step="2" name="tV2-badge" class="tV2-badge" style="\
float: right !important;\
margin: 0px 0px 0px 0px !important;\
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
height: 19px !important;\
">\
        <div style="\
margin: 18px 0px 0px 0px !important;\
padding: 0px 0px 0px 0px !important;\
">\
            <button name="tV2-submit" class="tV2-submit" style="\
float: right !important;\
margin: 0px 2px 0px 0px !important;\
padding: 2px 16px 2px 16px !important;\
background: #777777 !important;\
color: white !important;\
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
//<input id="txt" type="text" >
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
            options = $.extend({padding:10,minWidth:0,maxWidth:10000}, options||{});
            $(this).on('input', function() {
                $(this).css('width', Math.min(options.maxWidth,Math.max(options.minWidth,$(this).textWidth() + options.padding)));
            }).trigger('input');
            return this;
        };
        $('.tV2-submit').on('click', function() {
            const trans = $('.tV2-trans').val();
            const guilds = $('.tV2-guilds').val();
            const badge = $('.tV2-badge').val();
            if (trans.length === 1) {
                BDA.saveData('tV2', 'trans', trans);
            } else {
                BDA.saveData('tV2', 'trans', trans.substr(1));
            };
            BDA.saveData('tV2', 'starttrans', trans);
            BDA.saveData('tV2', 'startguilds', guilds);
            BDA.saveData('tV2', 'startbadge', badge);
            BDA.saveData('tV2', 'guilds', guilds);
            BDA.saveData('tV2', 'badge', badge);
            if ($('.tV2-image').val() == 0) {
                BDA.saveData('tV2', 'image', 'None');;
            } else {
                BDA.saveData('tV2', 'image', ($('.tV2-image').val()));;
            };
            tV2.prototype.updateTheme();
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
        $('.tV2-image').autoresize({padding:4,minWidth:48,maxWidth:492});
        $('.tV2-usercolor').on('input', function() {
            const userhex = parseInt($('.tV2-usercolor').val().substr(1), 16);
            const usercolor = ((userhex >> 16) & 255) + ',' + ((userhex >> 8) & 255) + ',' + (userhex & 255)
            const startcolor = $('.tV2-usercolor').val()
            BDA.saveData('tV2', 'usercolor', usercolor);
            BDA.saveData('tV2', 'startcolor', startcolor);
        });
    }, 1);
};

//When called updates the theme in Discord
tV2.prototype.updateTheme = function() {
    const tV2_web = '\
<style class="tV2-web">\
@import url("https://raw.githack.com/AdventGit/Discord-Things/master/tV2/goodgood.css")\
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
    const tV2_base = '\
<style class="tV2-base">\
:root {\
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
--dark: rgba(26, 26, 26, .78);\
--light: rgba(229, 229, 229, .78);\
--guild-size: ' + numGuildSize + 'px;\
--badge-size: ' + numBadgeSize + 'px;\
--font-size: ' + font_size + 'px;\
--read-all-font-size: ' + read_all_font_size + 'px;\
--guild-base-size: ' + guild_base_size + 'px;\
--guild-base-h: ' + guild_base_h + 'px;\
--friend-icon-size: ' + friend_icon_size + 'px;\
--guild-add-size-h: ' + guild_add_size_h + 'px;\
--guild-add-size-v: ' + guild_add_size_v + 'px;\
--guild-error-size-h: -' + guild_error_size_h + 'px;\
--guild-error-size-v: ' + guild_error_size_v + 'px;\
}</style>';
    const tV2_base_css = '\
<style class="tV2-base-css">\
.tV2-trans::-webkit-slider-thumb,\
.tV2-guilds::-webkit-slider-thumb,\
.tV2-badge::-webkit-slider-thumb{\
-webkit-appearance: none !important;\
appearance: none !important;\
width: 12px !important;\
height: 12px !important;\
background: #777777 !important;\
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
opacity: .15 !important;\
z-index: -1 !important;\
}</style>';
        if ($('head .tV2-image-css').length === 0) {
            $(tV2_optional_image).insertAfter('head .tV2-base');
        };
    } else if ((BDA.loadData('tV2', 'image') == 'None') && ($('head .tV2-image-css').length !== 0)) {
        $('head .tV2-image-css').remove();
    };
};

//On plugin start
tV2.prototype.start = function() {
    //Inject jQuery 3.3.1
    const jQ3 = document.createElement('script');
    jQ3.src = '//code.jquery.com/jquery-3.3.1.min.js';
    jQ3.classList.add('tV2-jQ3');
    if (BDA.loadData('tV2', 'loaded') == undefined) {
        BDA.saveData('tV2', 'loaded', 'False');
        BDA.saveData('tV2', 'startcolor', '#000000');
        BDA.saveData('tV2', 'starttrans', '1');
        BDA.saveData('tV2', 'startguilds', '50');
        BDA.saveData('tV2', 'startbadge', '18');
        BDA.saveData('tV2', 'usercolor', '#000000');
        BDA.saveData('tV2', 'trans', '1');
        BDA.saveData('tV2', 'guilds', '50');
        BDA.saveData('tV2', 'badge', '18');
        BDA.saveData('tV2', 'image', 'None');
        document.getElementsByTagName('head')[0].appendChild(jQ3);
        BDA.saveData('tV2', 'loaded', 'True');
        BDA.showToast('jQuery 3.3.1 loaded!');
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
        document.getElementsByTagName('head')[0].appendChild(jQ3);
        BDA.saveData('tV2', 'loaded', 'True');
        BDA.showToast('tV2: jQuery 3.3.1 loaded!');
    };
    //Start theming
    tV2.prototype.updateTheme();
};

//On plugin stop
tV2.prototype.stop = function() {
    //Uninjecting elements
    try {
        $('head .tV2-jQ3').remove();
        $('head .tV2-base-css').remove();
        $('head .tV2-base').remove();
        $('head .tV2-web').remove();
        $('head .tV2-image-css').remove();
    }
    finally {
        BDA.saveData('tV2', 'loaded', 'False');
        BDA.showToast('tV2: jQuery 3.3.1 unloaded!');
    };
};