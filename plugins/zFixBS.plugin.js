//META{"name":"zFixBS"}*//
class zFixBS {
	getName () {return "zFixBS";}
	getDescription () {return "Fix Import of BDFDB";}
	getVersion () {return "1.0";}
	getAuthor () {return "Advent";}
    
    load () {}

	start () {
		var libraryScript = null;
		if (typeof BDFDB !== "object" || BDFDB.isLibraryOutdated()) {
			if (typeof BDFDB === "object") BDFDB = "";
			libraryScript = document.querySelector('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js"]');
			if (libraryScript) libraryScript.remove();
			libraryScript = document.createElement("script");
			libraryScript.setAttribute("type", "text/javascript");
			libraryScript.setAttribute("src", "https://rawgit.com/AdventGit/BetterDiscordAddons/patch-1/Plugins/BDFDB.js");
			document.head.appendChild(libraryScript);
		}
		this.startTimeout = setTimeout(() => {this.initialize();}, 30000);
		if (typeof BDFDB === "object") this.initialize();
		else libraryScript.addEventListener("load", () => {this.initialize();});
	}
}