//META{"name":"OSUDirect"}*//

class OSUDirect {
	initConstructor () {}
	getName () {return "OSUDirect";}
	getDescription () {return "Opens OSU! links inside of OSU! Direct instead of your Browser. With the help of square.";}
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
			$(document).on("click." + this.getName(), "a[href*='//osu.ppy.sh/s/'], a[href*='//osu.ppy.sh/b/'], a[href*='//osu.ppy.sh/beatmapsets/']", (e) => {
                var bmid = e.currentTarget.href
                bmid = bmid.split('?')[0].split('/').pop();
				if (require("electron").shell.openExternal("osu://b/" + bmid)) {
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
			$(document).off("click." + this.getName(), "a[href*='//osu.ppy.sh/s/'], a[href*='//osu.ppy.sh/beatmapsets/']");
			BDFDB.unloadMessage(this);
		}
	}
}