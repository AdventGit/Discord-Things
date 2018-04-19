//META{"name":"ReadAllNotificationsButton"}*//

class ReadAllNotificationsButton {
	constructor () {
		this.RANbuttonMarkup = 
			`<div class="guild" id="RANbutton-frame" style="height: 14px !important; margin: 0px !important; padding: 0px !important; margin-top: -1px !important;">
				<div class="guild-inner" style="border-radius: 0px;">
					<a>
						<div id="RANbutton" style="line-height: 18px; position: absolute !important; float: left !important; left: 50%; top: 50%; transform: translate(-50%, -50%) !important;">Read All</div>
					</a>
				</div>
			</div>`;
			
		this.RAMbuttonMarkup = 
			`<button type="button" id="RAMbutton" class="flexChild-1KGW5q button-2t3of8 lookFilled-luDKDo colorBrand-3PmwCE sizeMin-1Wh1KC grow-25YQ8u" style="flex: 0 0 auto; margin-top: -5px; height: 25px;">
				<div class="contents-4L4hQM">Clear all Mentions</div>
			</button>`;
	}

	getName () {return "ReadAllNotificationsButton";}

	getDescription () {return "Adds a button to clear all notifications.";}

	getVersion () {return "1.3.1";}

	getAuthor () {return "DevilBro";}

	//legacy
	load () {}

	start () {
		var libraryScript = null;
		if (typeof BDfunctionsDevilBro !== "object" || BDfunctionsDevilBro.isLibraryOutdated()) {
			if (typeof BDfunctionsDevilBro === "object") BDfunctionsDevilBro = "";
			libraryScript = document.querySelector('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDfunctionsDevilBro.js"]');
			if (libraryScript) libraryScript.remove();
			libraryScript = document.createElement("script");
			libraryScript.setAttribute("type", "text/javascript");
			libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDfunctionsDevilBro.js");
			document.head.appendChild(libraryScript);
		}
		this.startTimeout = setTimeout(() => {this.initialize();}, 30000);
		if (typeof BDfunctionsDevilBro === "object") this.initialize();
		else libraryScript.addEventListener("load", () => {this.initialize();});
	}

	initialize () {
		if (typeof BDfunctionsDevilBro === "object") {
			BDfunctionsDevilBro.loadMessage(this);
			
			var observer = null;
			
			observer = new MutationObserver((changes, _) => {
				changes.forEach(
					(change, i) => {
						if (change.addedNodes) {
							change.addedNodes.forEach((node) => {
								var mentionspopout = null;
								if (node && node.tagName && (mentionspopout = node.querySelector(".recent-mentions-popout, .recentMentionsPopout-3QkZEg")) != null) {
									$(this.RAMbuttonMarkup).insertBefore(".mention-filter, .mentionFilter-wE0FR9", mentionspopout)
										.on("click", () => {
											var loadinterval = setInterval(() => {
												if (!mentionspopout || !mentionspopout.parentElement) clearInterval(loadinterval);
												var loadbutton = mentionspopout.querySelector(".has-more button, .hasMore-17LQIb button");
												var closebuttons = mentionspopout.querySelectorAll(".close-button, .closeButton-2Rx3ov");
												if (!loadbutton) {
													closebuttons.forEach((btn) => {btn.click();});
													clearInterval(loadinterval);
												}
												else {
													closebuttons.forEach((btn,i) => {if (closebuttons.length-1 > i) btn.click();});
													loadbutton.click();
												}
											},2000);
										});
									mentionspopout.classList.add("RAM-added");
								}
							});
						}
					}
				);
			});
			BDfunctionsDevilBro.addObserver(this, ".popouts, .popouts-1TN9u9", {name:"mentionsPopoutObserver",instance:observer}, {childList: true});
			
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
			$("#RANbutton-frame, #RAMbutton").remove();
			
			$(".RAN-added").removeClass("RAN-added");
			
			BDfunctionsDevilBro.unloadMessage(this);
		}
	}
}
