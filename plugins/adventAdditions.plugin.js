//META{"name":"AdventAdditions"}*//

class AdventAdditions {
	constructor () {
		this.AdventHTMLClose =
			`<div class="AdventButtonClose" id="AdventButtonClose-frame" style="display:block;position:absolute;left:0px;bottom:calc(50% + 18px);z-index:9996">
				<div class="AdventButtonClose-inner">
					<a>
						<div id="AdventButtonClose" style="vertical-align:middle;text-align:center;color:white;"><</div>
					</a>
				</div>
			</div>`;
        this.AdventHTMLClose2 =
			`<div class="AdventButtonClose2" id="AdventButtonClose2-frame" style="display:none;position:absolute;left:0px;bottom:calc(50% + 24px);z-index:9997">
				<div class="AdventButtonClose2-inner">
					<a>
						<div id="AdventButtonClose2" style="vertical-align:middle;text-align:center;color:white;"><</div>
					</a>
				</div>
			</div>`;
		this.AdventHTMLOpen =
			`<div class="AdventButtonOpen" id="AdventButtonOpen-frame" style="display:none;position:absolute;left:0px;bottom:calc(50% + 12px);z-index:9998">
				<div class="AdventButtonOpen-inner">
					<a>
						<div id="AdventButtonOpen" style="vertical-align:middle;text-align:center;color:white;">></div>
					</a>
				</div>
			</div>`;
        this.AdventHTMLOpen2 =
			`<div class="AdventButtonOpen2" id="AdventButtonOpen2-frame" style="display:none;position:absolute;left:0px;bottom:calc(50% + 18px);z-index:9999">
				<div class="AdventButtonOpen2-inner">
					<a>
						<div id="AdventButtonOpen2" style="vertical-align:middle;text-align:center;color:white;">></div>
					</a>
				</div>
			</div>`;
        this.AdventHTMLCloseUsers =
			`<div class="AdventButtonCloseUsers" id="AdventButtonCloseUsers-frame" style="display:block;position:absolute;right:230px;bottom:calc(50% + 18px);z-index:9999999998">
				<div class="AdventButtonCloseUsers-inner">
					<a>
						<div id="AdventButtonCloseUsers" style="vertical-align:middle;text-align:center;color:white;">></div>
					</a>
				</div>
			</div>`;
        this.AdventHTMLOpenUsers =
			`<div class="AdventButtonOpenUsers" id="AdventButtonOpenUsers-frame" style="display:none;position:absolute;right:2px;bottom:calc(50% + 18px);z-index:9999999999">
				<div class="AdventButtonOpenUsers-inner">
					<a>
						<div id="AdventButtonOpenUsers" style="vertical-align:middle;text-align:center;color:white;"><</div>
					</a>
				</div>
			</div>`; 
	}
    
	getName () {return "AdventAdditions";}
	getDescription () {return "Adds additional functions to BD using DevilBro's functions";}
	getVersion () {return "1.0";}
	getAuthor () {return "AdventDiscord";}

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
            try {
                $(this.AdventHTMLClose).insertAfter(".content.flex-spacer.flex-horizontal")
                    .on("click", "#AdventButtonClose", () => {
                        $(".AdventButtonClose")[0].style.display = "none";
                        $(".AdventButtonOpen")[0].style.display = "block";
                        $(".AdventButtonClose2")[0].style.display = "block";
                        $(".channels-3g2vYe")[0].style.display = "none";
                    });
                $(this.AdventHTMLOpen).insertAfter(".AdventButtonClose")
                    .on("click", "#AdventButtonOpen", () => {
                        $(".AdventButtonOpen")[0].style.display = "none";
                        $(".AdventButtonClose2")[0].style.display = "none";
                        $(".AdventButtonClose")[0].style.display = "block";
                        $(".channels-3g2vYe")[0].style.display = "flex";
                    });
                $(this.AdventHTMLClose2).insertAfter(".AdventButtonOpen")
                    .on("click", "#AdventButtonClose2", () => {
                        $(".AdventButtonClose2")[0].style.display = "none";
                        $(".AdventButtonOpen")[0].style.display = "none";
                        $(".AdventButtonOpen2")[0].style.display = "block";
                        $(".guilds")[0].style.display = "none";
                    });
                $(this.AdventHTMLOpen2).insertAfter(".AdventButtonClose2")
                    .on("click", "#AdventButtonOpen2", () => {
                        $(".AdventButtonOpen2")[0].style.display = "none";
                        $(".AdventButtonOpen")[0].style.display = "block";
                        $(".AdventButtonClose2")[0].style.display = "block";
                        $(".guilds")[0].style.display = "block";
                    });
                $(this.AdventHTMLCloseUsers).insertBefore(".content.flex-spacer.flex-horizontal")
                    .on("click", "#AdventButtonCloseUsers", () => {
                        $(".AdventButtonCloseUsers")[0].style.display = "none";
                        $(".AdventButtonOpenUsers")[0].style.display = "block";
                        $(".channel-members-wrap")[0].style.display = "none";
                        $(".content .messages-wrapper")[0].style.width = "calc(100% - 14px)";
                        $(".content form")[0].style.width = "calc(100% - 34px)";
                    });
                $(this.AdventHTMLOpenUsers).insertAfter(".AdventButtonCloseUsers")
                    .on("click", "#AdventButtonOpenUsers", () => {
                        $(".AdventButtonOpenUsers")[0].style.display = "none";
                        $(".AdventButtonCloseUsers")[0].style.display = "block";
                        $(".channel-members-wrap")[0].style.display = "flex";
                        $(".content .messages-wrapper")[0].style.width = "calc(100% - 240px)";
                        $(".content form")[0].style.width = "calc(100% - 260px)";
                    });
                $(".chat").addClass("Additions-added");
            }
            catch(err) {
                $("#AdventButtonClose-frame").remove();
                $("#AdventButtonOpen-frame").remove();
                $("#AdventButtonClose2-frame").remove();
                $("#AdventButtonOpen2-frame").remove();
                $("#AdventButtonCloseUsers-frame").remove();
                $("#AdventButtonOpenUsers-frame").remove();
                $(".chat").removeClass("Additions-added");
                $(".chat.flex-vertical.flex-spacer.private").addClass("Additions-error");
            }
		}
		else {
			console.error(this.getName() + ": Fatal Error: Could not load BD functions!");
		}
	}

	stop () {
		if (typeof BDfunctionsDevilBro === "object") {
			$("#AdventButtonClose-frame").remove();
			$("#AdventButtonOpen-frame").remove();
            $("#AdventButtonClose2-frame").remove();
			$("#AdventButtonOpen2-frame").remove();
            $("#AdventButtonCloseUsers-frame").remove();
            $("#AdventButtonOpenUsers-frame").remove();
			$(".chat").removeClass("Additions-added");
            $(".chat.flex-vertical.flex-spacer.private").removeClass("Additions-error");
			BDfunctionsDevilBro.unloadMessage(this);
		}
	}
}
