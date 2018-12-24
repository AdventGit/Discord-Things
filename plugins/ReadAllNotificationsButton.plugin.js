//META{"name":"ReadAllNotificationsButton"}*//

class ReadAllNotificationsButton {
	initConstructor () {
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
	};
	getName () {
        return "ReadAllNotificationsButton";
    };
	getDescription () {
        return "Adds a button to clear all notifications.";
    };
	getVersion () {
        return "1.3.6";
    };
	getAuthor () {
        return "DevilBro";
    };
	getSettingsPanel () {
		if (!this.started || typeof BDFDB !== "object") return;
		const settings = BDFDB.getAllData(this, "settings");
		const settingshtml = `<div class="${this.getName()}-settings DevilBro-settings"><div class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.title + BDFDB.disCNS.size18 + BDFDB.disCNS.height24 + BDFDB.disCNS.weightnormal + BDFDB.disCN.marginbottom8}">${this.getName()}</div><div class="DevilBro-settings-inner">`;
		for (let key in settings) {
			settingshtml += `<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom8}" style="flex: 1 1 auto;"><h3 class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.title + BDFDB.disCNS.marginreset + BDFDB.disCNS.weightmedium + BDFDB.disCNS.size16 + BDFDB.disCNS.height24 + BDFDB.disCN.flexchild}" style="flex: 1 1 auto;">${this.defaults.settings[key].description}</h3><div class="${BDFDB.disCNS.flexchild + BDFDB.disCNS.switchenabled + BDFDB.disCNS.switch + BDFDB.disCNS.switchvalue + BDFDB.disCNS.switchsizedefault + BDFDB.disCNS.switchsize + BDFDB.disCN.switchthemedefault}" style="flex: 0 0 auto;"><input type="checkbox" value="${key}" class="${BDFDB.disCNS.switchinnerenabled + BDFDB.disCN.switchinner}"${settings[key] ? " checked" : ""}></div></div>`;
		};
		settingshtml += `</div></div>`;
		const settingspanel = $(settingshtml)[0];
		BDFDB.initElements(settingspanel);
		$(settingspanel).on("click", BDFDB.dotCN.switchinner, () => {
            this.updateSettings(settingspanel);
        });
		return settingspanel;
	};
	load () {};
	start () {
		var libraryScript = null;
		if (typeof BDFDB !== "object" || typeof BDFDB.isLibraryOutdated !== "function" || BDFDB.isLibraryOutdated()) {
			libraryScript = document.querySelector('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js"]');
			if (libraryScript) libraryScript.remove();
			libraryScript = document.createElement("script");
			libraryScript.setAttribute("type", "text/javascript");
			libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js");
			document.head.appendChild(libraryScript);
		};
		this.startTimeout = setTimeout(() => {
            this.initialize()
        },30000);
		if (typeof BDFDB === "object" && typeof BDFDB.isLibraryOutdated === "function") {
            this.initialize();
        } else libraryScript.addEventListener("load", () => {
            this.initialize();
        });
	};
	initialize () {
		if (typeof BDFDB === "object") {
			BDFDB.loadMessage(this);
			var observer = null;
			observer = new MutationObserver((changes, _) => {
				changes.forEach(
					(change, i) => {
						if (change.addedNodes) {
							change.addedNodes.forEach((node) => {
								var mentionspopout = null;
								if (node.tagName && (mentionspopout = node.querySelector(BDFDB.dotCN.recentmentionspopout)) != null && node.querySelector(BDFDB.dotCN.recentmentionsmentionfilter)) {
									$(this.RAMbuttonMarkup).appendTo(BDFDB.dotCN.recentmentionstitle, mentionspopout).on("click", () => {
                                        const loadinterval = setInterval(() => {
                                            if (!mentionspopout || !mentionspopout.parentElement) clearInterval(loadinterval);
                                            const loadbutton = mentionspopout.querySelector(BDFDB.dotCNS.messagespopouthasmore + "button");
                                            const closebuttons = mentionspopout.querySelectorAll(BDFDB.dotCN.messagespopoutclosebutton);
                                            if (!loadbutton) {
                                                closebuttons.forEach((btn) => {btn.click();});
                                                clearInterval(loadinterval);
                                            } else {
                                                closebuttons.forEach((btn,i) => {if (closebuttons.length-1 > i) btn.click();});
                                                loadbutton.click();
                                            };
                                        },2000);
                                    });
                                    mentionspopout.classList.add("RAM-added");
								};
							});
						};
					}
				);
			});
			BDFDB.addObserver(this, BDFDB.dotCN.popouts, {name:"mentionsPopoutObserver",instance:observer}, {childList: true});
			$(this.RANbuttonMarkup).insertBefore($('.dms-rcsEnV')).on("click", ".RANbutton", () => {
                let servers = BDFDB.getData("includeMuted", this, "settings") ? BDFDB.readServerList() : BDFDB.readUnreadServerList();
                BDFDB.clearReadNotifications(servers);
            });
			$(BDFDB.dotCN.guilds).addClass("RAN-added");
		} else {
			console.error(this.getName() + ": Fatal Error: Could not load BD functions!");
		};
	};
	stop () {
		if (typeof BDFDB === "object") {
			$(".RANbutton-frame, .RAMbutton").remove();
			$(".RAN-added").removeClass("RAN-added");
			$(".RAM-added").removeClass("RAM-added");
			BDFDB.unloadMessage(this);
		};
	};
	updateSettings (settingspanel) {
		var settings = {};
		for (var input of settingspanel.querySelectorAll(BDFDB.dotCN.switchinner)) {
			settings[input.value] = input.checked;
		};
		BDFDB.saveAllData(settings, this, "settings");
	};
};