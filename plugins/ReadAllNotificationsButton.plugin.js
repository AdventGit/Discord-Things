//META{"name":"ReadAllNotificationsButton"}*//

class ReadAllNotificationsButton {
	constructor () {
		this.RANbuttonMarkup = 
			`<div class="guild" id="RANbutton-frame" style="height: 14px !important; margin: 0px !important;">
				<div class="guild-inner" style="border-radius: 0px;">
					<a>
						<div id="RANbutton" style="line-height: 18px; position: absolute !important; float: left !important; left: 50%; top: 50%; transform: translate(-50%, -50%) !important;">Read All</div>
					</a>
				</div>
			</div>`;
	}
    
	getName () {return "ReadAllNotificationsButton";}

	getDescription () {return "Adds a button to clear all notifications. Now with new size.";}

	getVersion () {return "1.2.7";}

	getAuthor () {return "DevilBro (Edited by: AdventDiscord";}

	//legacy
	load () {}

	start () {
		if (typeof BDfunctionsDevilBro !== "object" || BDfunctionsDevilBro.isLibraryOutdated()) {
			if (typeof BDfunctionsDevilBro === "object") BDfunctionsDevilBro = "";
			$('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDfunctionsDevilBro.js"]').remove();
			$('head').append('<script src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDfunctionsDevilBro.js"></script>');
		}
		if (typeof BDfunctionsDevilBro === "object") {
			BDfunctionsDevilBro.loadMessage(this);
			
			$(this.RANbuttonMarkup).insertBefore(".dms")
				.on("click", "#RANbutton", () => {
					BDfunctionsDevilBro.clearReadNotifications(BDfunctionsDevilBro.readUnreadServerList());
				});
				
			$(".guilds.scroller").addClass("RAN-added");
		}
		else {
			console.error(this.getName() + ": Fatal Error: Could not load BD functions!");
		}
	}

	stop () {
		if (typeof BDfunctionsDevilBro === "object") {
			$("#RANbutton-frame").remove();
			
			$(".guilds.scroller").removeClass("RAN-added");
			
			BDfunctionsDevilBro.unloadMessage(this);
		}
	}
}
