let showlinks = document.querySelector(".show-links");
let infoblock = document.querySelector(".infoblock");
let linkblock = document.querySelector(".linkblock");
let backbutton = document.querySelector(".backbutton");
let gmail = document.querySelector(".gmail");
let copied = document.querySelector(".copied");

showlinks.onclick = function () {
	infoblock.classList.add("hidden");
	this.classList.add("hidden");
	linkblock.classList.remove("hidden");
	backbutton.classList.remove("hidden");
}

backbutton.onclick = function() {
	infoblock.classList.remove("hidden");
	this.classList.add("hidden");
	linkblock.classList.add("hidden");
	showlinks.classList.remove("hidden");
}

gmail.onclick = function() {
	navigator.clipboard.writeText("GrandTheftChatto@gmail.com");

	copied.classList.add("copied-show");

	setTimeout (() => {
		copied.classList.remove("copied-show");
	}, 1500);
}