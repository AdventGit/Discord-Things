//META{"name":"hideUsers"}*//

/*@cc_on
@if (@_jscript)
	
	// Offer to self-install for clueless users that try to run this directly.
	var shell = WScript.CreateObject("WScript.Shell");
	var fs = new ActiveXObject("Scripting.FileSystemObject");
	var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
	var pathSelf = WScript.ScriptFullName;
	// Put the user at ease by addressing them in the first person
	shell.Popup("It looks like you mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
	if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
		shell.Popup("I'm in the correct folder already.\nJust reload Discord with Ctrl+R.", 0, "I'm already installed", 0x40);
	} else if (!fs.FolderExists(pathPlugins)) {
		shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
	} else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
		fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
		// Show the user where to put plugins in the future
		shell.Exec("explorer " + pathPlugins);
		shell.Popup("I'm installed!\nJust reload Discord with Ctrl+R.", 0, "Successfully installed", 0x40);
	}
	WScript.Quit();
@else@*/

class hideUsers {
	constructor() {
		this.hideUser = () => {
			if(!this.hidUsers.users[0]) return console.warn('%c[hideUsers]%c\tNo users found.', 'color: #9653AD', '');
			for(let user of this.hidUsers.users) {
				$(`[style*='${user}']`).parent().hide();
				$(`.avatarContainer-303pFz [style*='${user}']`).parent().parent().parent().hide();
 			}
		};

		this.hidUsers = {
			users: []
		};
		
		this.blockCSS = `
			<style id="hideUsersCSS">
			.message-group-blocked {display: none !important; visibility: hidden !important; opacity: 0 !important;} .quick-message.isBlocked::-webkit-input-placeholder {color: transparent !important;} .quick-message.isBlocked {display: none !important; background: none !important; visibility: hidden !important; opacity: 0 !important;} .results-blocked {display: none !important; visibility: hidden !important; opacity: 0 !important;}
			</style>
		`;
	};

	userPush() {
		let nUser = $('#hUTEXT').val();
		if(isNaN(nUser)) return $('#hUTEXT').val('Invalid entry. (NaN)');
		if(nUser.length === 0 || nUser === undefined) return $('#hUTEXT').val('Invalid entry. (No-entry)');
		if(!nUser.match(/^\d{17,18}$/) || nUser.match(/^\d{17,18}$/) === null) return $('#hUTEXT').val('Invalid entry. (ID-length)');
		this.hidUsers.users.push(nUser);
		console.log(`%c[${this.getName()}]%c\t${this.hidUsers.users.join(', ')}`, 'color: #9653AD', '');
		this.hideUser();
	};
	
	userClear() {
		let oUser = $('#hUTEXT').val();
		if(oUser.match(/^\d{17,18}$/)) {
			this.hidUsers.users.splice(this.hidUsers.users.indexOf(oUser), 1);
			console.info(`%c[${this.getName()}]%c\t${this.hidUsers.users.join(', ')}`, 'color: #9653AD', '');
			alert('Successfully removed!');
			this.hideUser();
		}
		else {
			this.hidUsers.users.pop();
			console.info(`%c[${this.getName()}]%c\t${this.hidUsers.users.join(', ')}`, 'color: #9653AD', '');
			alert('Successfully removed!');
			this.hideUser();
		}
		if(this.hidUsers.users.length < 1)
			return console.info(`%c[${this.getName()}]%c\t No users to remove.`, 'color: #9653AD', '');
	};

	saveSettings() {
		bdPluginStorage.set('hideUsers', 'users', JSON.stringify(this.hidUsers.users));
		console.log('%c[hideUsers]%c\tSaved settings.', 'color: #9653AD', '');
	};

	loadSettings() {
		this.hidUsers.users = JSON.parse(bdPluginStorage.get('hideUsers', 'users'));
		console.log('%c[hideUsers]%c\tLoaded settings.', 'color: #9653AD', '');
	};

	start() { 
		console.info('%c[hideUsers]%c\tWorking...', 'color: #9653AD', '');
		var settings = bdPluginStorage.get('hideUsers', 'users');
		if(settings === null) {
			console.info('%c[hideUsers]%c\tNo settings found.', 'color: #9653AD', '');
		}
		else {
			this.hidUsers.users = JSON.parse(settings);
			console.info('%c[hideUsers]%c\t' + this.hidUsers.users.join(', '), 'color: #9653AD', '');
		}
	 	this.hideUser();
		$('head').append(this.blockCSS);
	};
	stop() { console.info('%c[hideUsers]%c\tStopped.', 'color: #9653AD', ''); };
	load() { console.info('%c[hideUsers]%c\tBooting-Up.', 'color: #9653AD', ''); };
	unload() {};
	observer(ex) { 
		if(ex.addedNodes.length && ex.addedNodes[0].classList && ex.addedNodes[0].classList.contains('message-group'))
			this.hideUser();
		if(ex.addedNodes.length && ex.addedNodes[0].classList && ex.addedNodes[0].classList.contains('markup'))
			this.hideUser();
		if(ex.addedNodes.length && ex.addedNodes[0].classList && ex.addedNodes[0].classList.contains('channel-members-wrap'))
			this.hideUser();
		else 
			return; 
	};
	onMessage() {};
	onSwitch() { this.hideUser(); };

	getAuthor() { return 'Arashiryuu'; };
	getName() { return 'hideUsers'; };
	getVersion() { return '1.2.3'; };
	getDescription() { return 'Hides any users listed in the array.'; };
	getSettingsPanel() { 
		let html = `
			<h3>hideUsers Plugin</h3><br/>

			<input id="hUTEXT" type="text" placeholder="ID" style="resize: none; width: 80%;" /><br/><br/>
			<br/><button class="hUBTNw" onclick=BdApi.getPlugin("${this.getName()}").userPush()>apply</button>
			<button class="hUBTNx" onclick=BdApi.getPlugin("${this.getName()}").userClear()>remove</button>
			<button class="hUBTNy" onclick=BdApi.getPlugin("${this.getName()}").saveSettings()>save</button>
			<button class="hUBTNz" onclick=BdApi.getPlugin("${this.getName()}").loadSettings()>load</button><br/>
			
			<br/>How to use:<br/>
			0) Go to user settings -> Appearance, and enable Developer Mode, then right-click a user and "Copy ID"<br/>
			1) Insert a user\'s ID.<br/>
			2) Click "apply."<br/>
			3) To remove the last-added user, click the "remove" button.<br/>`;
		return html;
	};
};
/*@end*/
