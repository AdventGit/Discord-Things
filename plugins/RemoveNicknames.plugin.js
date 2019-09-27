//META{"name":"RemoveNicknames","website":"https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/RemoveNicknames","source":"https://raw.githubusercontent.com/mwittrien/BetterDiscordAddons/master/Plugins/RemoveNicknames/RemoveNicknames.plugin.js"}*//

class RemoveNicknames {
	getName () {return "RemoveNicknames";}

	getVersion () {return "1.2.7";}

	getAuthor () {return "DevilBro";}

	getDescription () {return "Replace all nicknames with the actual accountnames.";}

	constructor () {
		this.changelog = {
			"added":[["Ignore Elements","Added an option list that let's you costumize in which places nicknames are being removed"]]
		};

		this.patchModules = {
			"MemberListItem":"componentDidMount",
			"MessageUsername":"componentDidMount",
			"TypingUsers":"componentDidUpdate",
			"Clickable":"componentDidMount",
			"StandardSidebarView":"componentWillUnmount"
		};
	}

	initConstructor () {
		this.defaults = {
			settings: {
				replaceOwn:				{value:false, 	inner:false,	description:"Replace your own name:"},
				replaceBots:			{value:true, 	inner:false,	description:"Replace the nickname of bots:"},
				addNickname:			{value:false, 	inner:false,	description:"Add nickname as parentheses:"},
				swapPositions:			{value:false, 	inner:false,	description:"Swap the position of username and nickname:"},
				changeInChatWindow:		{value:true, 	inner:true,		description:"Messages"},
				changeInMentions:		{value:true, 	inner:true,		description:"Mentions"},
				changeInVoiceChat:		{value:true, 	inner:true,		description:"Voice Channels"},
				changeInMemberList:		{value:true, 	inner:true,		description:"Member List"},
				changeInTyping:			{value:true, 	inner:true,		description:"Typing List"},
				changeInAutoComplete:	{value:true, 	inner:true,		description:"Autocomplete Menu"}
			}
		};
	}

	getSettingsPanel () {
		if (!global.BDFDB || typeof BDFDB != "object" || !BDFDB.loaded || !this.started) return;
		var settings = BDFDB.getAllData(this, "settings");
		var settingshtml = `<div class="${this.name}-settings BDFDB-settings"><div class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.size18 + BDFDB.disCNS.height24 + BDFDB.disCNS.weightnormal + BDFDB.disCN.marginbottom8}">${this.name}</div><div class="BDFDB-settings-inner">`;
		for (let key in settings) {
			if (!this.defaults.settings[key].inner) settingshtml += `<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.horizontal + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom8}" style="flex: 1 1 auto;"><h3 class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.marginreset + BDFDB.disCNS.weightmedium + BDFDB.disCNS.size16 + BDFDB.disCNS.height24 + BDFDB.disCN.flexchild}" style="flex: 1 1 auto;">${this.defaults.settings[key].description}</h3><div class="${BDFDB.disCNS.flexchild + BDFDB.disCNS.switchenabled + BDFDB.disCNS.switch + BDFDB.disCNS.switchvalue + BDFDB.disCNS.switchsizedefault + BDFDB.disCNS.switchsize + BDFDB.disCN.switchthemedefault}" style="flex: 0 0 auto;"><input type="checkbox" value="settings ${key}" class="${BDFDB.disCNS.switchinnerenabled + BDFDB.disCN.switchinner} settings-switch"${settings[key] ? " checked" : ""}></div></div>`;
		}
		settingshtml += `<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.horizontal + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom8}" style="flex: 1 1 auto;"><h3 class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.marginreset + BDFDB.disCNS.weightmedium + BDFDB.disCNS.size16 + BDFDB.disCNS.height24 + BDFDB.disCN.flexchild}" style="flex: 0 0 auto;">Remove Nicknames in:</h3></div><div class="BDFDB-settings-inner-list">`;
		for (let key in settings) {
			if (this.defaults.settings[key].inner) settingshtml += `<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.horizontal + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom8}" style="flex: 1 1 auto;"><h3 class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.marginreset + BDFDB.disCNS.weightmedium + BDFDB.disCNS.size16 + BDFDB.disCNS.height24 + BDFDB.disCN.flexchild}" style="flex: 1 1 auto;">${this.defaults.settings[key].description}</h3><div class="${BDFDB.disCNS.flexchild + BDFDB.disCNS.switchenabled + BDFDB.disCNS.switch + BDFDB.disCNS.switchvalue + BDFDB.disCNS.switchsizedefault + BDFDB.disCNS.switchsize + BDFDB.disCN.switchthemedefault}" style="flex: 0 0 auto;"><input type="checkbox" value="settings ${key}" class="${BDFDB.disCNS.switchinnerenabled + BDFDB.disCN.switchinner} settings-switch"${settings[key] ? " checked" : ""}></div></div>`;
		}
		settingshtml += `</div>`;
		settingshtml += `</div></div>`;

		let settingspanel = BDFDB.htmlToElement(settingshtml);

		BDFDB.initElements(settingspanel, this);
;
		return settingspanel;
	}

	//legacy
	load () {}

	start () {
		if (!global.BDFDB) global.BDFDB = {myPlugins:{}};
		if (global.BDFDB && global.BDFDB.myPlugins && typeof global.BDFDB.myPlugins == "object") global.BDFDB.myPlugins[this.getName()] = this;
		var libraryScript = document.querySelector('head script#BDFDBLibraryScript');
		if (!libraryScript || (performance.now() - libraryScript.getAttribute("date")) > 600000) {
			if (libraryScript) libraryScript.remove();
			libraryScript = document.createElement("script");
			libraryScript.setAttribute("id", "BDFDBLibraryScript");
			libraryScript.setAttribute("type", "text/javascript");
			libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js");
			libraryScript.setAttribute("date", performance.now());
			libraryScript.addEventListener("load", () => {this.initialize();});
			document.head.appendChild(libraryScript);
			this.libLoadTimeout = setTimeout(() => {
				libraryScript.remove();
				BDFDB.LibraryRequires.request("https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js", (error, response, body) => {
					if (body) {
						libraryScript = document.createElement("script");
						libraryScript.setAttribute("id", "BDFDBLibraryScript");
						libraryScript.setAttribute("type", "text/javascript");
						libraryScript.setAttribute("date", performance.now());
						libraryScript.innerText = body;
						document.head.appendChild(libraryScript);
					}
					this.initialize();
				});
			}, 15000);
		}
		else if (global.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) this.initialize();
		this.startTimeout = setTimeout(() => {this.initialize();}, 30000);
	}

	initialize () {
		if (global.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) {
			if (this.started) return;
			BDFDB.loadMessage(this);

			this.reseting = false;
			BDFDB.WebModules.forceAllUpdates(this);
		}
		else {
			console.error(`%c[${this.getName()}]%c`, 'color: #3a71c1; font-weight: 700;', '', 'Fatal Error: Could not load BD functions!');
		}
	}


	stop () {
		if (global.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) {
			this.reseting = true;

			BDFDB.WebModules.forceAllUpdates(this);

			BDFDB.unloadMessage(this);
		}
	}


	// begin of own functions

	processMemberListItem (instance, wrapper, returnvalue) {
		let user = BDFDB.getReactValue(instance, "props.user");
		if (user) {
			let username = wrapper.querySelector(BDFDB.dotCN.memberusername);
			if (username) BDFDB.setInnerText(username, this.getNewName(user, wrapper));
		}
	}

	processMessageUsername (instance, wrapper, returnvalue) {
		let message = BDFDB.getReactValue(instance, "props.message");
		if (message) {
			let username = wrapper.querySelector(BDFDB.dotCN.messageusername);
			if (username) BDFDB.setInnerText(username, this.getNewName(message.author, wrapper));
		}
	}

	processTypingUsers (instance, wrapper, returnvalue) {
		let users = !instance.props.typingUsers ? [] : Object.keys(instance.props.typingUsers).filter(id => id != BDFDB.myData.id).filter(id => !BDFDB.LibraryModules.FriendUtils.isBlocked(id)).map(id => BDFDB.LibraryModules.UserStore.getUser(id)).filter(id => id != null);
		wrapper.querySelectorAll("strong").forEach((username, i) => {
			if (users[i] && username) BDFDB.setInnerText(username, this.getNewName(users[i]));
		});
	}

	processClickable (instance, wrapper, returnvalue) {
		if (!wrapper || !instance.props || !instance.props.className) return;
		if (instance.props.tag == "a" && instance.props.className.indexOf(BDFDB.disCN.anchorunderlineonhover) > -1) {
			if (BDFDB.containsClass(wrapper.parentElement, BDFDB.disCN.messagesystemcontent) && wrapper.parentElement.querySelector("a") == wrapper) {
				let message = BDFDB.getKeyInformation({node:wrapper.parentElement, key:"message", up:true});
				if (message) {
					BDFDB.setInnerText(wrapper, this.getNewName(message.author, wrapper));
					if (message.mentions.length == 1) {
						let seconduser = BDFDB.LibraryModules.UserStore.getUser(message.mentions[0]);
						let secondwrapper = wrapper.parentElement.querySelectorAll("a")[1];
						if (seconduser && secondwrapper) BDFDB.setInnerText(secondwrapper, this.getNewName(seconduser, wrapper));
					}
				}
			}
		}
		else if (instance.props.tag == "span" && instance.props.className.indexOf(BDFDB.disCN.mention) > -1) {
			let render = BDFDB.getReactValue(instance, "_reactInternalFiber.return.return.stateNode.props.render");
			if (typeof render == "function") {
				var props = render().props;
				if (props && props.user) BDFDB.setInnerText(wrapper, "@" + this.getNewName(props.user, wrapper));
				else if (props && props.userId) BDFDB.setInnerText(wrapper, "@" + this.getNewName(BDFDB.LibraryModules.UserStore.getUser(props.userId), wrapper));
			}
		}
		else if (instance.props.tag == "div" && instance.props.className.indexOf(BDFDB.disCN.voiceuser) > -1) {
			let user = BDFDB.getReactValue(instance, "_reactInternalFiber.return.memoizedProps.user");
			if (user) {
				let username = wrapper.querySelector(BDFDB.dotCN.voicename);
				if (username) BDFDB.setInnerText(username, this.getNewName(user, username));
			}
		}
		else if (instance.props.tag == "div" && instance.props.className.indexOf(BDFDB.disCN.autocompleterow) > -1) {
			let user = BDFDB.getReactValue(instance, "_reactInternalFiber.return.memoizedProps.user");
			if (user) {
				let username = wrapper.querySelector(BDFDB.dotCN.marginleft8);
				if (username) BDFDB.setInnerText(username, this.getNewName(user, username));
			}
		}
	}

	processStandardSidebarView (instance, wrapper, returnvalue) {
		if (this.SettingsUpdated) {
			delete this.SettingsUpdated;
			BDFDB.WebModules.forceAllUpdates(this);
		}
	}

	getNewName (info, wrapper) {
		if (!info) return null;
		let settings = BDFDB.getAllData(this, "settings");
		let member = BDFDB.LibraryModules.MemberStore.getMember(BDFDB.LibraryModules.LastGuildStore.getGuildId(), info.id) || {};
		let EditUsersData = (BDFDB.isPluginEnabled("EditUsers") ? BDFDB.loadData(info.id, "EditUsers", "users") : null) || {};
		if (this.reseting || !member.nick || info.id == BDFDB.myData.id && !settings.replaceOwn || info.bot && !settings.replaceBots || this.ignoreElement(wrapper)) return EditUsersData.name || member.nick || info.username;
		var username = EditUsersData.name || info.username;
		return settings.addNickname ? (settings.swapPositions ? (member.nick + " (" + username + ")") : (username + " (" + member.nick + ")")) : username;
	}

	ignoreElement (id, wrapper) {
		let allenabled = true, settings = BDFDB.filterObject(BDFDB.getAllData(this, "settings"), key => {return this.defaults.settings[key].inner;}, true);
		for (let i in settings) if (!settings[i]) {
			allenabled = false;
			break;
		}
		if (allenabled) return false;

		let key = null;
		if (!BDFDB.containsClass(wrapper, BDFDB.disCN.mention) && BDFDB.getParentEle(BDFDB.dotCN.messagegroup, wrapper)) key = "changeInChatWindow";
		else if (BDFDB.containsClass(wrapper, BDFDB.disCN.mention)) key = "changeInMentions";
		else if (BDFDB.getParentEle(BDFDB.dotCN.voiceuser, wrapper)) key = "changeInVoiceChat";
		else if (BDFDB.getParentEle(BDFDB.dotCN.members, wrapper)) key = "changeInMemberList";
		else if (BDFDB.getParentEle(BDFDB.dotCN.typing, wrapper)) key = "changeInTyping";
		else if (BDFDB.getParentEle(BDFDB.dotCN.autocomplete, wrapper)) key = "changeInAutoComplete";

		if (!key || settings[key]) return true;
		return false;
	}
}
