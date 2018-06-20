//META{"name":"SteamLinker"}*//

class SteamLinker {
	initConstructor () {}
	getName () {return "SteamLinker";}
	getDescription () {return "Opens Steam links inside of Steam instead of your Browser. With the help of square.";}
	getVersion () {return "1.0";}
	getAuthor () {return "DevilBro, AdventDiscord";}
	load () {}
	start () {
		var libraryScript = null;
		if (typeof BDFDB !== "object" || BDFDB.isLibraryOutdated()) {
			if (typeof BDFDB === "object") BDFDB = "";
			libraryScript = document.querySelector('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js"]');
			if (libraryScript) libraryScript.remove();
			libraryScript = document.createElement("script");
			libraryScript.setAttribute("type", "text/javascript");
			libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js");
			document.head.appendChild(libraryScript);
		}
		this.startTimeout = setTimeout(() => {this.initialize();}, 30000);
		if (typeof BDFDB === "object") this.initialize();
		else libraryScript.addEventListener("load", () => {this.initialize();});
	}
	initialize () {
		if (typeof BDFDB === "object") {
			BDFDB.loadMessage(this);
			$(document).on("click." + this.getName(), "a[href*='//steamcommunity.com/'], a[href*='//store.steampowered.com/']", (e) => {
				if (require("electron").shell.openExternal("steam://openurl/" + e.currentTarget.href)) {
					e.preventDefault();
					e.stopImmediatePropagation();
				}
			});
		}
		else {
			console.error(this.getName() + ": Fatal Error: Could not load BD functions!");
		}
	}
	stop () {
		if (typeof BDFDB === "object") {
			$(document).off("click." + this.getName(), "a[href*='//steamcommunity.com/'], a[href*='//store.steampowered.com/']");
			BDFDB.unloadMessage(this);
		}
	}
}