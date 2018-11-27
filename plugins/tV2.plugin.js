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
/* Base Transparency */\
	/* -Top */\
	head,\
	body,\
	body > div:first-of-type,\
	/* -Titlebar */\
	[class^="type"][class*="title"],\
	/* Popouts */\
	/* -Base */\
	[class^="app"][class*="platform"],\
	[class^="app"][class*="platform"] > [class^="app"],\
	[class^="app"][class*="platform"] > [class^="app"] > [class^="layer"],\
	[class^="app"][class*="platform"] > [class^="app"] > [class^="layer"] > [class^="layer"]:nth-of-type(2) > [class^="ui"],\
	[class^="app"][class*="platform"] > [class^="app"] > [class^="layer"] > [class^="layer"]:nth-of-type(2) > [class^="ui"]  > [class^="sidebar"],\
	[class^="app"][class*="platform"] > [class^="app"] > [class^="layer"] > [class^="layer"]:nth-of-type(2) > [class^="ui"]  > [class^="content"],\
	[class^="app"][class*="platform"] > [class^="app"] > [class^="layer"] > [class^="layer"],\
	[class^="app"][class*="platform"] > [class^="app"] > [class^="layer"] > [class^="layer"] > [class^="flex"],\
	/* -Guilds */\
	[class^="guildsWrapper"],\
		/* --Guilds Add/Error Button */\
		[class^="guildsWrapper"] [class^="guilds-"] > button,\
	/* -Channel/Chat Base */\
	[class^="app"][class*="platform"] > [class^="app"] > [class^="layer"] > [class^="layer"] > [class^="flex"] > [class^="flex"],\
	[class^="app"][class*="platform"] > [class^="app"] > [class^="layer"] > [class^="layer"] > [class^="flex"] > [class^="flex"] > [class^="flex"]:nth-of-type(2),\
	/* -Channels */\
	[class^="channels"],\
	[class^="channels"] > [class^="contain"],\
	[class^="channels"] > [class^="flex"],\
	/* -Chat */\
	[class^="chat"],\
		/* --TitleBar */\
		[class^="chat"] > [class^="title"],\
		[class^="chat"] > [class^="title"] > [class^="flex"],\
		/* --Chat */\
		[class^="chat"] > [class^="content"],\
		[class^="chat"] > [class^="content"] > [class^="flex"],\
		[class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"],\
	/* -Chat Message Panel */\
	[class^="chat"] > [class^="content"] > [class^="flex"] > form,\
	[class^="chat"] > [class^="content"] > [class^="flex"] > form > [class^="channel"],\
	[class^="chat"] > [class^="content"] > [class^="flex"] > form > [class^="typing"],\
	/* -Members List */\
	[class^="chat"] > [class^="content"] > [class^="member"],\
	[class^="chat"] > [class^="content"] > [class^="member"] > [class^="scroll"],\
	[class^="chat"] > [class^="content"] > [class^="member"] > [class^="scroll"] > [class^="scroll"],\
	/* -Friends Panel */\
	[id^="friend"],\
	[id^="friend"] > [class^="flex"] {\
	background: transparent !important;\
	border: none !important;\
	box-shadow: none !important;\
}\
\
/* Base Theme Items */\
	/* -Font Smoothing */\
		/* --Normal */\
            /* ---Neutral */\
            #files_directDownload span,\
            .thumbQuicksave,\
            body > [id^="app"] > [class^="context"] > div > span,\
            code,\
            [class^="chat"] > [class^="content"] > [class^="flex"] > form > [class^="channel"] > [class^="inner"] > textarea,\
            [class^="chat"] > [class^="content"] > [class^="flex"] > form > [class^="channel"] > [class^="inner"] > textarea::-webkit-input-placeholder,\
            [class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="content"] > [class^="container"] > [class^="markup"],\
            [class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="content"] > [class^="isM"] > [class^="markup"],\
            [class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="header"] > [class^="header"] > [class^="time"],\
            [class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="pagination"],\
            [class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class*="container"] > [class^="markup"],\
            [class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class^="isM"] > [class^="markup"],\
            [class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class^="isM"],\
            [class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="header"] > [class^="header"] > [class^="time"],\
            [class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="separator"] span,\
            [class^="chat"] > [class^="content"] > [class^="search"] > [class^="search"] div,\
            [class^="embed"] > [class*="nner"] > [class*="ontent"] > [class*="nner"] > [class*="ield"] > [class*="ield"] > [class*="alue"],\
            [class^="embed"] > [class*="nner"] > [class*="ooter"] > span,\
            [style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="option"] > [class^="search"] > strong,\
            [style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="option"] > [class^="search"],\
            [style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="result"] > [class^="header"],\
            [style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="result"] > [class^="option"] span,\
            [style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="result"] > [class^="option"] strong {\
                -webkit-text-stroke: .45px var(--neutral-smooth) !important;\
                text-shadow: 0px 0px 0px var(--neutral-smooth), -.45px -.45px 0px var(--neutral-smooth), .45px -.45px 0px var(--neutral-smooth), -.45px .45px 0px var(--neutral-smooth), .45px .45px 0px var(--neutral-smooth);\
                text-decoration: none !important;\
            }\
            /* --User Color */\
            .bd-toast,\
            .bda-links a,\
            .toast,\
            [class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="content"] > [class*="container"] > [class^="markup"] > [class^="mention"],\
            [class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="content"] > [class^="container"] > [class^="markup"] > a,\
            [class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class*="container"] > [class^="markup"] > [class^="mention"],\
            [class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class*="container"] > [class^="markup"] > [class^="mention"]:hover,\
            [class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class^="container"] > [class^="markup"] > a,\
            [class^="embed"] > [class*="nner"] > [class*="ontent"] a {\
                -webkit-text-stroke: .45px var(--user-color-smooth) !important;\
                text-shadow: 0px 0px 0px var(--user-color-smooth), -.45px -.45px 0px var(--user-color-smooth), .45px -.45px 0px var(--user-color-smooth), -.45px .45px 0px var(--user-color-smooth), .45px .45px 0px var(--user-color-smooth);\
                text-decoration: none !important;\
            }\
        /* --Abnormal */\
            /* ---Neutral */\
            #bd-pub-button,\
            #RANbutton,\
            body > [id^="app"] > [class*="popout"] > [class^="popout"] > [class^="menu"] > div,\
            body > [id^="app"] > [class^="context"] > div > span,\
            body > [id^="app"] > [class^="context"] div > div,\
            body > [id^="app"] > [class^="context"] span,\
            [class^="guildsWrapper"] [class^="guilds-"] > [class^="friend"] {\
                -webkit-text-stroke: .45px var(--neutral-smooth) !important;\
                text-decoration: none !important;\
            }\
            /* ---Red */\
            body > [id^="app"] > [class*="popout"] > [class^="popout"] > [class^="menu"] > div[class*="leave"],\
            body > [id^="app"] > [class^="context"] div > div[class*="danger"] span,\
            body > [id^="app"] > [class^="context"] div > div[class*="danger"] {\
                -webkit-text-stroke: .45px red !important;\
                text-decoration: none !important;\
            }\
	/* -Scrollbar */\
		/* --Base */\
			/* ---Hidden */\
			[class*="scroll"] > [class*="scroll"]::-webkit-resizer,\
			[class*="scroll"] > [class*="scroll"]::-webkit-scrollbar,\
			[class*="scroll"] > [class*="scroll"]::-webkit-scrollbar-button,\
			[class*="scroll"] > [class*="scroll"]::-webkit-scrollbar-corner,\
			[class*="scroll"] > [class*="scroll"]::-webkit-scrollbar-track,\
			[class*="scroll"] > [class*="scroll"]::-webkit-scrollbar-track-piece {\
				visibility: hidden !important;\
				background: transparent !important;\
			}\
			/* ---Shown When Hovered */\
			[class*="scroll"] > [class*="scroll"]:hover::-webkit-resizer,\
			[class*="scroll"] > [class*="scroll"]:hover::-webkit-scrollbar,\
			[class*="scroll"] > [class*="scroll"]:hover::-webkit-scrollbar-button,\
			[class*="scroll"] > [class*="scroll"]:hover::-webkit-scrollbar-corner,\
			[class*="scroll"] > [class*="scroll"]:hover::-webkit-scrollbar-track,\
			[class*="scroll"] > [class*="scroll"]:hover::-webkit-scrollbar-track-piece {\
				visibility: visible !important;\
				background: transparent !important;\
			}\
		/* --General */\
		    /* ---Hidden */\
			[class*="scroll"] > [class*="scroll"]::-webkit-scrollbar,\
			[class*="scroll"] > [class*="scroll"]::-webkit-scrollbar-track-piece,\
			[class*="scroll"] > [class*="scroll"]::-webkit-scrollbar-thumb {\
				visibility: hidden !important;\
			}\
			[class*="scroll"] > [class*="scroll"]::-webkit-scrollbar {\
				width: 4px !important;\
			}\
			[class*="scroll"] > [class*="scroll"]::-webkit-scrollbar-track-piece {\
				border: none !important;\
			}\
			[class*="scroll"] > [class*="scroll"]::-webkit-scrollbar-thumb {\
				background: transparent !important;\
				border: none !important;\
			}\
			/* ---Shown When Hovered */\
			[class*="scroll"] > [class*="scroll"]::-webkit-scrollbar,\
			[class*="scroll"] > [class*="scroll"]::-webkit-scrollbar-track-piece,\
			[class*="scroll"] > [class*="scroll"]::-webkit-scrollbar-thumb {\
				visibility: visible !important;\
			}\
			[class*="scroll"] > [class*="scroll"]:hover::-webkit-scrollbar {\
				width: 4px !important;\
			}\
			[class*="scroll"] > [class*="scroll"]:hover::-webkit-scrollbar-track-piece {\
				border: none !important;\
			}\
			[class*="scroll"] > [class*="scroll"]:hover::-webkit-scrollbar-thumb {\
				background: var(--user-color) !important;\
				border: none !important;\
			}\
		/* --Chat */\
		[class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class*="scroll"] > [class*="scroll"]::-webkit-scrollbar {\
			width: 8px !important;\
		}\
		/* --Settings */\
		[class^="app"][class*="platform"] > [class^="app"] > [class^="layer"] > [class^="layer"]:nth-of-type(2) > [class^="ui"] > [class^="sidebar"] {\
			z-index: 2 !important;\
		}\
	/* -Badge Icon */\
	[class^="wrapper"][class*="badge"],\
	.betterfriendcount-badge {\
		background: rgba(0, 0, 0, 1) !important;\
		border: 2px solid var(--user-color) !important;\
		border-radius: 50% !important;\
		padding: 0px !important;\
		height: var(--badge-size) !important;\
		width: var(--badge-size) !important;\
		text-align: center !important;\
		vertical-align: middle !important;\
		line-height: var(--badge-size) !important;\
		font-weight: 500 !important;\
	}\
    *::selection {\
        background-color: var(--user-color-smooth) !important;\
    }\
\
/* Guilds */\
[class^="guildsWrapper"] {\
    width: inherit !important;\
}\
[class^="guildsWrapper"] div {\
    margin: 0px !important;\
}\
[class^="guildsWrapper"] > [class^="scroll"] {\
    width: 100% !important;\
    padding-right: 10px !important;\
}\
[class^="guildsWrapper"] [href="/activity"],\
[class^="guildsWrapper"] [href*="@"],\
[class^="guildsWrapper"] [href="/library"],\
[class^="guildsWrapper"] [href="/store"] {\
    height: var(--guild-base-size) !important;\
    width: var(--guild-base-size) !important;\
    margin-left: var(--guild-base-h) !important;\
}\
[class^="guildsWrapper"] [href="/activity"] use,\
[class^="guildsWrapper"] [href*="@"] use,\
[class^="guildsWrapper"] [href="/library"] use,\
[class^="guildsWrapper"] [href="/store"] use {\
    fill: var(--neutral-semi-trans) !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class^="guild-"]:first-child [class^="guildInner"],\
[class^="guildsWrapper"] [class^="guilds-"] > [class^="guild-"],\
[class^="guildsWrapper"] [class^="guilds-"] > [class^="guild-"]:nth-of-type(n+4) [class^="guildInner"] a{\
    height: var(--guild-size) !important;\
    width: var(--guild-size) !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class^="friend"]:not([class^="friendsO"]) {\
    height: var(--guild-size) !important;\
    width: var(--guild-size) !important;\
    background-size: var(--friend-icon-size) !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] [class^="icon"] {\
    height: var(--guild-size) !important;\
    width: var(--guild-size) !important;\
    background-size: var(--guild-size) !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] [class^="guild-"]:nth-of-type(n+2) {\
    margin-top: 7px !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] [class^="guild-"]:nth-of-type(n+4) .avatar-small {\
    background-size: var(--guild-size) !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] [class^="guild-"] [class^="guildInner"] {\
    background-color: transparent !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class^="dms-"] {\
    position: relative !important;\
    margin-left: 0px !important;\
    margin-bottom: 5px !important;\
    margin-top: -4px !important;\
    margin-right: 0px !important;\
    z-index: 0 !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class^="dms-"] [class^="guild-"],\
[class^="guildsWrapper"] [class^="guilds-"] > [class^="dms-"] [class^="guildInner"] {\
    height: var(--guild-size) !important;\
    width: var(--guild-size) !important;\
    margin-top: 7px !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class^="dms-"] [class^="guildInner"] .avatar-small {\
    height: var(--guild-size) !important;\
    width: var(--guild-size) !important;\
    background-size: var(--guild-size) !important;\
    margin-left: unset !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class^="guildSeparator"] {\
    height: 1px !important;\
    width: var(--guild-size) !important;\
    margin-bottom: 7px !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class^="guildSeparator"]:after {\
    height: 1px !important;\
    margin-top: 2px !important;\
    left: 0% !important;\
    right: 0% !important;\
    width: 100% !important;\
    background: var(--user-color) !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class^="friend"] {\
    font-size: var(--font-size) !important;\
    text-align: left !important;\
    white-space: nowrap !important;\
    width: var(--guild-size) !important;\
    word-wrap: normal !important;\
    height: 18px !important;\
    line-height: 18px !important;\
	color: var(--neutral-text) !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] [class^="guild-"][class*="unread"]:before,\
[class^="guildsWrapper"] [class^="guilds-"] [class^="guild-"][class*="selected"]:before {\
    background: var(--user-color) !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] [class^="guild-"]:first-of-type[class*="selected"]:before {\
	background: transparent !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class*="guildsAdd"] {\
    margin-top: 7px !important;\
    height: var(--guild-size) !important;\
    width: var(--guild-size) !important;\
    border: 2px dashed var(--neutral) !important;\
    font-size: 0px !important;\
    line-height: 0px !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class*="guildsAdd"]:after {\
    content: "+" !important;\
    color: var(--neutral) !important;\
    position: absolute !important;\
    height: var(--guild-size) !important;\
    width: var(--guild-size) !important;\
    font-size: var(--guild-size) !important;\
    line-height: 0px !important;\
    text-align: center !important;\
    vertical-align: middle !important;\
    margin-left: var(--guild-add-size-h) !important;\
    margin-top: var(--guild-add-size-v) !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class*="guildsAdd"]:hover {\
    border: 2px dashed var(--user-color) !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class*="guildsAdd"]:hover:after {\
    color: var(--user-color) !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class*="guildsError"] {\
    margin-top: 7px !important;\
    height: var(--guild-size) !important;\
    width: var(--guild-size) !important;\
    border: 2px dashed var(--neutral) !important;\
    font-size: 0px !important;\
    line-height: 0px !important;\
    font-weight: 500 !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class*="guildsError"]:after {\
    content: "!" !important;\
    color: var(--neutral) !important;\
    position: absolute !important;\
    height: var(--guild-size) !important;\
    width: var(--guild-size) !important;\
    font-size: var(--guild-size) !important;\
    line-height: 0px !important;\
    text-align: center !important;\
    vertical-align: middle !important;\
    margin-left: var(--guild-error-size-h) !important;\
    margin-top: var(--guild-error-size-v) !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class*="guildsError"]:hover {\
    border: 2px dashed red !important;\
}\
[class^="guildsWrapper"] [class^="guilds-"] > [class*="guildsError"]:hover:after {\
    color: red !important;\
}\
\
/* Channels */\
    /* -DM and Normal */\
    [class^="channels"] > [class^="flex"] > [class^="flex"] > [class^="container"] > [class^="header"],\
    [class^="channel"] > [class^="private"] > [class^="search"] {\
        box-shadow: none !important;\
    }\
	/* -DM Channels */\
	[class^="channel"] > [class^="private"] > [class^="scroll"] > [class^="scroll"] > [class^="channel"]:nth-of-type(3),\
    [class^="channel"] > [class^="private"] > [class^="scroll"] > [class^="scroll"] > [class^="channel"]:nth-of-type(4)    {\
		display: none !important;\
	}\
	/* -Channel */\
	[class^="channels"] > [class^="flex"] > [class^="scroll"] > [class^="scroll"] > [class^="container"] > [class^="container"] > [class*="Selected"][class*="Text"] > [class*="content"],\
	[class^="channels"] > [class^="flex"] > [class^="scroll"] > [class^="scroll"] > [class^="container"] > [class^="container"] > [class*="Hovered"][class*="Text"] > [class*="content"] {\
		background: var(--neutral) !important;\
	}\
	[class^="channels"] > [class^="flex"] > [class^="scroll"] > [class^="scroll"] > [class^="container-1"] > div > [class^="container"] > [class^="flex"] > [class^="name"],\
	[class^="channels"] > [class^="flex"] > [class^="scroll"] > [class^="scroll"] > [class^="container"] > [class^="container"] > [class^="flex"] > [class^="name"],\
	[class^="channels"] > [class^="flex"] > [class^="scroll"] > [class^="scroll"] > [class^="container"] > [class^="container"] > [class*="wrapper"] > [class*="content"] > [class^="name"],\
    [class^="channels"] > [class^="flex"] > [class^="scroll"] > [class^="scroll"] > [class*="hidden"] > [class^="container"] > [class*="flex"] > [class^="color"] {\
		color: var(--neutral-text) !important;\
	}\
	[class^="channels"] > [class^="flex"] > [class^="scroll"] > [class^="scroll"] > [class^="container"] > [class^="container"] > [class*="wrapper"] > [class*="unread"] {\
		background: var(--user-color) !important;\
	}\
	[class^="channels"] > [class^="flex"] > [class^="scroll"] > [class^="scroll"] svg {\
		color: var(--neutral-text) !important;\
	}\
		/* --VC */\
		[class^="channels"] > [class^="flex"] > [class^="scroll"] > [class^="scroll"] > [class^="container"] > [class^="container"] > [class^="flex"] > div > [class^="voice"] > [class^="name"] {\
			color: var(--neutral-text) !important;\
		}\
\
/* Chat */\
	/* -Chat */\
		/* --New Messages Bar */\
		@keyframes decay {\
			from {\
				top: 0px;\
				opacity: 1;\
			}\
			\
			to {\
				top: -22px;\
				opacity: 0;\
			}\
		}\
		@keyframes revive {\
			from {\
				top: -22px;\
				opacity: 0;\
			}\
			\
			to {\
				top: 0px;\
				opacity: 1;\
			}\
		}\
		[class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="new"] {\
			display: flex !important;\
			background: var(--dark) !important;\
			animation: decay .4s linear 2s 1 normal forwards;\
			color: var(--user-color) !important;\
			position: absolute !important;\
			top: 0px !important;\
			bottom: unset !important;\
			left: 50% !important;\
			right: unset !important;\
			width: fit-content !important;\
			text-transform: unset !important;\
			transition: unset !important;\
			border-radius: 0px 0px 3px 3px !important;\
			transform: translate(-50%, 0%) !important;\
		}\
		[class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="new"]:hover {\
			animation: revive .4s linear 0s 1 normal forwards;\
		}\
		[class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="new"] button {\
			color: var(--user-color) !important;\
		}\
        /* --Emoji */\
        .emoji {\
            margin: 0px !important;\
        }\
		/* --Chat Colors */\
		[class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="header"] > [class^="header"] > [class^="time"],\
		[class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="content"] > [class*="container"] > [class^="markup"],\
		[class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="content"] > [class^="isM"] {\
			color: var(--neutral-text) !important;\
		}\
			/* ---@Yous */\
			[class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="content"] > [class^="isM"],\
            [class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="content"] > [class^="isM"]::after {\
				background: var(--user-color-smooth) !important;\
			}\
			[class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="content"] > [class^="isM"]::after {\
				border-left: 4px solid var(--user-color) !important;\
			}\
            [class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="content"] > [class*="container"] > [class^="markup"] > [class^="mention"],\
            [class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="content"] > [class*="container"] > [class^="markup"] > [class^="mention"]:hover {\
                background: var(--user-color-smooth) !important;\
                border: none !important;\
                border-radius: 4px !important;\
                color: var(--user-color) !important;\
            }\
            [class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="content"] > [class^="isM"] > [class^="markup"] > [class^="mention"],\
            [class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="content"] > [class^="isM"] > [class^="markup"] > [class^="mention"]:hover {\
                background: transparent !important;\
            }\
            [class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="content"] > [class^="isM"] > [class^="markup"] {\
                color: var(--neutral-text) !important;\
            }\
            /* ---Links */\
            [class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="message"] > [class^="content"] > [class^="container"] > [class^="markup"] > a {\
                color: var(--user-color) !important;\
            }\
            /* ---Code Blocks */\
            code[class^="inline"] {\
                background: var(--neutral-semi-trans) !important;\
                color: var(--neutral-text) !important;\
            }\
            [class^="markup"] pre {\
                background: transparent !important;\
                border: none !important;\
            }\
            [class^="markup"] pre code {\
                background: var(--neutral-hsla-trans) !important;\
                border-radius: 4px !important;\
            }\
            code {\
                color: var(--neutral-text) !important;\
            }\
        /* --Embeds */\
        [class^="embed"] {\
            border: none !important;\
            border-radius: 4px !important;\
            box-shadow: none !important;\
        }\
        [class^="embed"] > [class*="ill"] {\
            background-color: var(--user-color) !important;\
        }\
        [class^="embed"] > [class*="nner"] {\
            background: var(--neutral-hsla-trans) !important;\
            border: none !important;\
            border-radius: 4px !important;\
            box-shadow: none !important;\
        }\
        [class^="embed"] > [class*="ideo"][class*="nner"] {\
            background: transparent !important;\
            border: none !important;\
            border-radius: 0px !important;\
            box-shadow: none !important;\
        }\
        [class^="embed"] > [class*="ideo"][class*="nner"] > [class^="wrapper"] {\
            background: var(--dark) !important;\
            border: none !important;\
            border-radius: 24px !important;\
            box-shadow: none !important;\
            color: var(--light) !important;\
        }\
        [class^="embed"] > [class*="ideo"][class*="nner"] > [class^="wrapper"] a {\
            color: var(--light) !important;\
        }\
        [class^="embed"] > [class*="nner"] > [class*="ontent"] > [class*="nner"] {\
            background: transparent !important;\
            border: none !important;\
            border-radius: none !important;\
            box-shadow: none !important;\
        }\
        [class^="embed"] > [class*="nner"] > [class*="ontent"] a {\
            color: var(--user-color) !important;\
        }\
        [class^="embed"] > [class*="nner"] > [class*="ontent"] > [class*="nner"] > [class*="ield"] > [class*="ield"] > [class*="ame"] {\
            color: #FFFFFF !important;\
            -webkit-text-stroke: .45px var(#FFFFFF) !important;\
            text-shadow: 0px 0px 0px var(#FFFFFF), -.45px -.45px 0px var(#FFFFFF), .45px -.45px 0px var(#FFFFFF), -.45px .45px 0px var(#FFFFFF), .45px .45px 0px var(#FFFFFF);\
        }\
        [class^="embed"] > [class*="nner"] > [class*="ontent"] > [class*="nner"] > [class*="ield"] > [class*="ield"] > [class*="alue"],\
        [class^="embed"] > [class*="nner"] > [class*="ooter"] > span {\
            color: var(--neutral-text) !important;\
        }\
        [class^="embed"] > [class*="nner"] > [class*="image"] > img {\
            border-radius: 4px !important;\
        }\
	/* -Form */\
	[class^="chat"] > [class^="content"] > [class^="flex"] > form > [class^="channel"] > [class^="inner"] {\
		background: transparent !important;\
		box-shadow: 0px 0px 1px 1px var(--neutral), 0px 0px .5px .5px var(--neutral-smooth) !important;;\
	}\
	[class^="chat"] > [class^="content"] > [class^="flex"] > form > [class^="channel"] > [class^="inner"] > textarea,\
	[class^="chat"] > [class^="content"] > [class^="flex"] > form > [class^="channel"] > [class^="inner"] > textarea::-webkit-input-placeholder {\
		color: var(--neutral-text) !important;\
	}\
		/* --Members */\
		[class^="chat"] > [class^="content"] > [class^="member"] > [class^="scroll"] > [class^="scroll"] > [class^="member"] {\
			color: var(--neutral-text) !important;\
		}\
		[class^="chat"] > [class^="content"] > [class^="member"] > [class^="scroll"] > [class^="scroll"] > [class^="member"]:hover > [class^="content"],\
		[class^="chat"] > [class^="content"] > [class^="member"] > [class^="scroll"] > [class^="scroll"] > [class*="pop"] > [class^="content"] {\
			background: var(--neutral) !important;\
		}\
    /* -Search */\
    [class^="search"] > [class^="search"] > [class^="search"] {\
        background: transparent !important;\
    }\
\
/* Mentions */\
	/* -Channel Mentions */\
	[class^="channels"] > [class^="flex"] > [class^="pos"] > [class^="unread"] > [class^="bar"],\
	[class^="channels"] > [class^="flex"] > [class^="unread"] > [class^="bar"] {\
		visibility: hidden !important;\
	}\
	[class^="channels"] > [class^="flex"] > [class^="pos"] > [class^="unread"] > [class^="bar"][class*="mention"],\
	[class^="channels"] > [class^="flex"] > [class^="unread"] > [class^="bar"][class*="mention"] {\
		background: var(--user-color-smooth) !important;\
		border-radius: 4px !important;\
		color: transparent !important;\
		font-size: 0px !important;\
		height: 20px !important;\
		width: 100% !important;\
		visibility: visible !important;\
	}\
	[class^="channels"] > [class^="flex"] > [class^="pos"] > [class^="unread"] > [class^="bar"][class*="mention"]:before,\
	[class^="channels"] > [class^="flex"] > [class^="unread"] > [class^="bar"][class*="mention"]:before {\
		top: 0px !important;\
		left: 0px !important;\
		right: 0px !important;\
		bottom: 0px !important;\
	}\
	[class^="channels"] > [class^="flex"] > [class^="pos"] > [class^="unread"][class*="Top"] > [class^="bar"][class*="mention"] {\
		transform: translateY(-24px) !important;\
	}\
	[class^="channels"] > [class^="flex"] > [class^="unread"][class*="Bottom"] > [class^="bar"][class*="mention"] {\
		transform: translateY(24px) !important;\
	}\
\
/* Context Menus */\
    /* --Right Click */\
    body > [id^="app"] > [class^="context"], \
    body > [id^="app"] > [class^="context"] [class^="context"] {\
        border: none !important;\
        border-radius: 4px !important;\
        box-shadow: none !important;\
        background: var(--neutral-opaque) !important;\
    }\
    body > [id^="app"] > [class^="context"] > div,\
    body > [id^="app"] > [class^="context"] [class^="context"] > div {\
        border: none !important;\
        box-shadow: none !important;\
    }\
    body > [id^="app"] > [class^="context"] > div > div:hover,\
    body > [id^="app"] > [class^="context"] [class^="context"] > div > div > div:hover,\
    body > [id^="app"] > [class^="context"] [class*="edit"] > div div:hover,\
    body > [id^="app"] > [class^="context"] [class*="edit"] > div > div[class^="item"][class*="disabled"]:hover {\
        background: var(--neutral-hsla-trans) !important;\
        border-radius: 4px !important;\
    }\
    .HideUtils {\
        border: none !important;\
    }\
    .HideUtils > div {\
        background: unset !important;\
    }\
    .HideUtils > div:hover {\
        background: var(--neutral-hsla-trans-plugin) !important;\
        border-radius: 4px !important;\
    }\
    body > [id^="app"] > [class^="context"] > div > div[class*="Sub"] {\
        background: url(https://ptb.discordapp.com/assets/e4afe52f6863408a35654a6e5fd69ba9.svg) no-repeat 155px 50% !important;\
    }\
    body > [id^="app"] > [class^="context"] > div > div[class*="Sub"]:hover {\
        background: var(--neutral-hsla-trans) url(https://ptb.discordapp.com/assets/e4afe52f6863408a35654a6e5fd69ba9.svg) no-repeat 155px 50% !important;\
    }\
    body > [id^="app"] > [class^="context"] span,\
    body > [id^="app"] > [class^="context"] div > div {\
        color: var(--neutral-text) !important;\
    }\
    body > [id^="app"] > [class^="context"] div > div[class*="danger"],\
    body > [id^="app"] > [class^="context"] div > div[class*="danger"] span {\
        color: red !important;\
    }\
    /* --Server Menu */\
    body > [id^="app"] > [class*="popout"] > [class^="popout"] {\
        border: none !important;\
        border-radius: 4px !important;\
        box-shadow: none !important;\
    }\
    body > [id^="app"] > [class*="popout"] > [class^="popout"] > [class^="menu"] {\
        border: none !important;\
        border-radius: 4px !important;\
        box-shadow: none !important;\
        background: var(--neutral-opaque) !important;\
    }\
    body > [id^="app"] > [class*="popout"] > [class^="popout"] > [class^="menu"] > div:hover {\
        background: var(--neutral-hsla-trans) !important;\
    }\
    body > [id^="app"] > [class*="popout"] > [class^="popout"] > [class^="menu"] > div {\
        color: var(--neutral-text) !important;\
    }\
    body > [id^="app"] > [class*="popout"] > [class^="popout"] > [class^="menu"] > div[class*="leave"] {\
        color: red !important;\
    }\
/* Search */\
/*\
[style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] {\
    height: fit-content !important;\
    width: fit-content !important;\
    top: 55px !important;\
    left: unset !important;\
    right: 0px !important;\
    bottom: unset !important;\
    transform: none !important;\
    border-radius: 4px !important;\
}\
*/\
[style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] {\
    height: fit-content !important;\
    width: fit-content !important;\
    background: var(--neutral-mini-trans) !important;\
    border-radius: 4px !important;\
    border: none !important;\
    box-shadow: none !important;\
}\
[style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="option"] {\
    background: transparent !important;\
}\
[style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="results"] > [class^="option"] {\
    width: 289px !important;\
}\
[style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="results"] > [class^="option"][class*="select"] {\
    background: var(--neutral-hsla-trans) !important;\
}\
[style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="results"]:before {\
    border: none !important;\
}\
[style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="option"] > [class^="search"],\
[style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="option"] > [class^="search"] > strong,\
[style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="result"] > [class^="header"],\
[style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="result"] > [class^="option"] span,\
[style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="result"] > [class^="option"] strong {\
    color: var(--neutral-text) !important;\
}\
[style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="result"] > [class^="option"]> div svg path {\
    fill: var(--neutral-semi-trans) !important;\
}\
[class^="chat"] > [class^="content"] > [class^="search"],\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="search"] {\
    background: transparent !important;\
    border: none !important;\
    box-shadow: none !important;\
}\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="search"] div {\
    opacity: 1 !important;\
}\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="search"] div,\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="pagination"] {\
    color: var(--neutral-text) !important;\
}\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="separator"] span {\
    background: transparent !important;\
    color: var(--neutral-text) !important;\
}\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="separator"]::before {\
    border: none !important;\
}\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] * {\
    border: none !important;\
    box-shadow: none !important;\
}\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] {\
    padding: 2px 0px 0px 0px !important;\
}\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"][class*="expanded"] {\
    border: none !important;\
}\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="header"] > [class^="header"] > [class^="time"],\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class*="container"] > [class^="markup"],\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class^="isM"] {\
    color: var(--neutral-text) !important;\
}\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class^="isM"],\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class^="isM"]::after {\
    background: var(--user-color-smooth) !important;\
}\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class^="isM"]::after {\
    border-left: 4px solid var(--user-color) !important;\
}\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class*="container"] > [class^="markup"] > [class^="mention"],\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class*="container"] > [class^="markup"] > [class^="mention"]:hover {\
    background: var(--user-color-smooth) !important;\
    border: none !important;\
    border-radius: 4px !important;\
    color: var(--user-color) !important;\
}\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class^="isM"] > [class^="markup"] > [class^="mention"],\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class^="isM"] > [class^="markup"] > [class^="mention"]:hover {\
    background: transparent !important;\
}\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class^="isM"] > [class^="markup"] {\
    color: var(--neutral-text) !important;\
}\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="hit"] > [class^="message"] > [class^="message"] > [class^="content"] > [class^="container"] > [class^="markup"] > a {\
    color: var(--user-color) !important;\
}\
\
/* Things to Nuke */\
body > div:first-of-type > [class*="popout"] > [class^="no"] > [class^="user"] > [class^="foot"],\
[class*="Education"],\
[class*="jumpToPresent"],\
[class*="noticeFacebook"],\
[class*="personalizationNotice"],\
[class^="channels"] > [class^="flex"] > [class^="channel"],\
[class^="channels"] > [class^="flex"] > [class^="pos"] > [class^="unread"] > [class^="bar"] > svg,\
[class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="container"] > [class^="divider"]:last-of-type,\
[class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="divider"],\
[class^="chat"] > [class^="content"] > [class^="flex"] > [class^="message"] > [class^="scroll"] > [class^="message"] > [class^="has"],\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="after"],\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="before"],\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"] > [class*="sibling"],\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"]::after,\
[class^="chat"] > [class^="content"] > [class^="search"] > [class^="scroll"] > [class^="scroll"] > [class^="results"] > [class^="search"] > [class*="search"]::before,\
[class^="divider"],\
[class^="gameLibrary"],\
[class^="guildsWrapper"] > [class^="scroll"] ::-webkit-scrollbar,\
[class^="guildsWrapper"] > [class^="unread"] > [class^="bar"],\
[class^="isLocalBot"],\
[class^="loadingMore"],\
[class^="member"] > [class^="scroll"] [class*="older"],\
[class^="missingAccess"],\
[class^="separator"],\
[class^="type"][class*="title"] > [class^="word"],\
[style*="z-index: 1001"][style*="visibility: visible"][style*="transform: translateX(-50%) translateY(0%) translateZ(0px)"] > [class^="search"] > [class^="option"] > [class^="key"],\
[class^="message"][class*="locked"],\
body > div:first-of-type  > div:nth-of-type(2) > div:first-of-type > div:nth-of-type(2) > div:first-of-type > div:first-of-type > div:nth-of-type(2) > div:first-of-type,\
body > div:first-of-type  > div:nth-of-type(2) > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:nth-of-type(2) > div:first-of-type {\
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
    z-index: -99999 !important;\
}\
\
/* BetterDiscord and Plugins Retheme */\
#bd-pub-li {\
    height: 14px !important;\
    margin: 0px !important;\
    padding: 0px !important;\
    margin-bottom: 0px !important;\
}\
#bd-pub-li [class^="guildInner"] {\
    height: inherit !important;\
    border-radius: 0px !important;\
    width: 200% !important;\
    margin-left: -8px !important;\
}\
#bd-pub-li a {\
    width: 200% !important;\
}\
#bd-pub-button,\
#RANbutton {\
    font-size: var(--read-all-font-size) !important;\
    word-wrap: normal !important;\
    white-space: nowrap !important;\
    color: var(--neutral-text) !important;\
}\
#bd-pub-button {\
    visibility: hidden !important;\
    line-height: 18px !important;\
    float: left !important;\
}\
#bd-pub-button:after {\
    content: "Server Menu" !important;\
    visibility: visible !important;\
    line-height: 18px !important;\
    position: absolute !important;\
    left: 3px !important;\
}\
#RANbutton-frame {\
    height: 0px !important;\
    margin-top: -5px !important;\
    margin-bottom: 18px !important;\
}\
#RANbutton-frame a {\
    height: 13px !important;\
    width: fit-content !important;\
}\
.bda-slist li {\
    background: var(--neutral-hsla-trans);\
    border: none !important;\
    border-radius: 3px !important;\
    box-shadow: 0px 0px 4px 1px var(--neutral) inset !important;\
}\
.bda-header,\
.bda-description-wrap,\
.bda-footer {\
    border: none !important;\
}\
.bda-links a {\
    color: var(--user-color) !important;\
}\
/*.thumbQuicksave {\
    background: var(--neutral-hsla-trans) !important;\
    color: var(--neutral-text) !important;\
    display: block !important;\
    position: absolute !important;\
    top: 4px !important;\
    left: 4px !important;\
    margin: 0px !important;\
    padding: 3px 5px 3px 5px !important;\
    border-radius: 3px !important;\
}*/\
.downloadLink-2oSgiF:hover {\
    text-decoration: none !important;\
}\
.translate-button {\
    width: 22px !important;\
    height: 22px !important;\
}\
.send-button {\
    width: 26px !important;\
    height: 26px !important;\
    position: absolute !important;\
    right: 9px !important;\
    top: 9px !important;\
}\
#files_directDownload {\
    cursor: move !important;\
}\
#files_directDownload span {\
    color: var(--neutral-text) !important;\
    background: var(--neutral-hsla-trans) !important;\
    border: 1px solid var(--neutral) !important;\
    border-radius: 3px !important;\
}\
#files_directDownload svg {\
    fill: var(--neutral) !important;\
}\
#files_directDownload .file .progress-bar {\
    background: var(--user-color) !important;\
}\
#qs_button {\
    display: block !important;\
    margin-top: -30px !important;\
    margin-left: 90px !important;\
}\
body > [id^="app"] > [class^="context"] > div > span {\
    color: var(--neutral-text) !important;\
}\
body > [id^="app"] > [class^="context"] > div[class^="item-"]:hover {\
    background: var(--neutral-hsla-trans) !important;\
}\
.downloadLink-1ywL9o {\
    width: fit-content !important;\
}\
.toasts {\
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
    z-index: 9999 !important;\
}\
.toast {\
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
    padding: 10px !important;\
}\
.notice-2FJMB4 {\
    background: transparent !important;\
    -webkit-app-region: no-drag !important;\
    border-bottom: 1px solid var(--user-color) !important;\
    border-radius: 0px !important;\
    width: fit-content !important;\
    left: calc(50% - 10px) !important;\
    transform: translate(-50%, 0%) !important;\
}\
.dismiss-SCAH9H {\
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
    border-bottom: 1px solid var(--user-color) !important;\
}\
.bd-toasts {\
    display: block !important;\
    position: absolute !important;\
    width: inherit !important;\
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
    z-index: 9999 !important;\
}\
.bd-toast {\
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
}\
}</style>';
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