//META{"name":"linkProfilePicture"}*//

class linkProfilePicture {
	getName(){return "Link-Profile-Picture"}
	getDescription(){return "Lets you click users' avatars on their profile page to view a bigger version in your browser."}
	getVersion(){return "1.0.3"}
	getAuthor(){return "square"}
	load(){}
	start(){}
	stop(){}
	observer(mutation){
		var x, i = 0,
			ref = mutation.addedNodes,
			wrapper, a, pic, url;
		while(x = ref[i++]) if("DIV" === x.nodeName && 0 === x.className.indexOf("modal-") && (wrapper = x.querySelector(".profile-ZOdGIb.avatar-3EQepX")) &&
			(pic = wrapper.querySelector(".image-33JSyf")) && (url = pic.style.backgroundImage.match(/https.+(?:webp|png|gif)/))){
				a = document.createElement("a");
				a.href = url[0] + "?size=2048";
				a.target = "_blank"; a.rel = "noreferrer";
				wrapper.insertBefore(a, pic);
				a.appendChild(pic);
			break;
		}
	}
}