//META{"name":"ReadAllNotificationsButton"}*//

class ReadAllNotificationsButton {
    getName () {return "ReadAllNotificationsButton";}
    getDescription () {return "Adds a button to clear all notifications.";}
    getVersion () {return "9.9.9";}
    getAuthor () {return "DevilBro";}
    initConstructor () {
        this.patchModules = {
			"Guilds":"componentDidMount",
			"RecentMentions":"componentDidMount"
		};
        this.RANbuttonMarkup = 
            `<div class="${BDFDB.disCN.guild} RANbutton-frame" id="bd-pub-li">
                <div class="${BDFDB.disCN.guildinner}" style="border-radius: 0px;">
                    <a>
                        <div class="RANbutton" id="bd-pub-button" style="line-height: 18px; position: absolute !important; float: left !important; left: 50%; top: 50%; transform: translate(-50%, -50%) !important;">Read All</div>
                    </a>
                </div>
            </div>`;
        this.RAMbuttonMarkup = 
            `<button type="button" id="RAMbutton" class="${BDFDB.disCNS.flexchild + BDFDB.disCNS.button + BDFDB.disCNS.buttonlookfilled + BDFDB.disCNS.buttoncolorbrand + BDFDB.disCNS.buttonsizemin + BDFDB.disCN.buttongrow}" style="flex: 0 0 auto; margin-top: -5px; height: 25px;">
                <div class="${BDFDB.disCN.buttoncontents}">Clear all Mentions</div>
            </button>`;
        this.defaults = {
            settings: {
                includeMuted:	{value:false, 	description:"Include muted Servers (means more API-Requests):"}
            }
        };
    }
	getSettingsPanel () {
		if (!this.started || typeof BDFDB !== "object") return;
		var settings = BDFDB.getAllData(this, "settings"); 
		var settingshtml = `<div class="${this.getName()}-settings DevilBro-settings"><div class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.title + BDFDB.disCNS.size18 + BDFDB.disCNS.height24 + BDFDB.disCNS.weightnormal + BDFDB.disCN.marginbottom8}">${this.getName()}</div><div class="DevilBro-settings-inner">`;
		for (let key in settings) {
			settingshtml += `<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom8}" style="flex: 1 1 auto;"><h3 class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.title + BDFDB.disCNS.marginreset + BDFDB.disCNS.weightmedium + BDFDB.disCNS.size16 + BDFDB.disCNS.height24 + BDFDB.disCN.flexchild}" style="flex: 1 1 auto;">${this.defaults.settings[key].description}</h3><div class="${BDFDB.disCNS.flexchild + BDFDB.disCNS.switchenabled + BDFDB.disCNS.switch + BDFDB.disCNS.switchvalue + BDFDB.disCNS.switchsizedefault + BDFDB.disCNS.switchsize + BDFDB.disCN.switchthemedefault}" style="flex: 0 0 auto;"><input type="checkbox" value="settings ${key}" class="${BDFDB.disCNS.switchinnerenabled + BDFDB.disCN.switchinner} settings-switch"${settings[key] ? " checked" : ""}></div></div>`;
		}
		settingshtml += `</div></div>`;
		let settingspanel = BDFDB.htmlToElement(settingshtml);
		BDFDB.initElements(settingspanel, this);
		return settingspanel;
	}
	load () {}
	start () {
        var libraryScript = document.querySelector('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js"]');
        if (!libraryScript || performance.now() - libraryScript.getAttribute("date") > 600000) {
			if (libraryScript) libraryScript.remove();
			libraryScript = document.createElement("script");
			libraryScript.setAttribute("type", "text/javascript");
			libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js");
            libraryScript.setAttribute("date", performance.now());
            libraryScript.addEventListener("load", () => {
                BDFDB.loaded = true;
                this.initialize();
            });
            document.head.appendChild(libraryScript);
		} else if (global.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) {
            this.initialize();
        } else {
            this.startTimeout = setTimeout(() => {this.initialize();}, 4500);
        }
        
	}
	initialize () {
		if (global.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) {
			BDFDB.loadMessage(this);
			BDFDB.WebModules.forceAllUpdates(this);
		}
		else {
			console.error(this.getName() + ": Fatal Error: Could not load BD functions!");
		}
	}
	stop () {
		if (global.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) {
			BDFDB.removeEles(".RANbutton-frame", ".RAMbutton");
			BDFDB.removeClasses("RAN-added", "RAM-added");
			BDFDB.unloadMessage(this);
		}
	}
    processGuilds (instance, wrapper) {
        $(this.RANbuttonMarkup).insertBefore($('.dms-rcsEnV')).on("click", ".RANbutton", () => {
            BDFDB.clearReadNotifications(BDFDB.getData("includeMuted", this, "settings") ? BDFDB.readServerList() : BDFDB.readUnreadServerList());
        });
        BDFDB.addClass(wrapper, "RAN-added");
    }
    processRecentMentions (instance, wrapper) {
        BDFDB.removeEles(".RAMbutton");
        if (instance.props && instance.props.popoutName == "RECENT_MENTIONS_POPOUT") {
            let recentmentionstitle = wrapper.querySelector(BDFDB.dotCN.recentmentionstitle);
            if (recentmentionstitle) {
                let ranbutton = BDFDB.htmlToElement(this.RANbuttonMarkup);
                recentmentionstitle.appendChild(ranbutton);
                ranbutton.addEventListener("click", () => {this.clearMentions(instance, wrapper);});
                BDFDB.addClass(wrapper, "RAM-added");
            }
        }
    }
	clearMentions (instance, wrapper) {
		let closebuttons = wrapper.querySelectorAll(BDFDB.dotCN.messagespopoutclosebutton);
		for (let btn of wrapper.querySelectorAll(BDFDB.dotCN.messagespopoutclosebutton)) btn.click();
		if (closebuttons.length) {
			instance.loadMore();
			setTimeout(() => {this.clearMentions(instance, wrapper);},3000);
		}
	}
}