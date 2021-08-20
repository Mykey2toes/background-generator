var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var colorize = document.getElementById("colorize");

function setGradient() {
	body.style.background =
	"linear-gradient(to right,  "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor() {
	var letters = "0123456789ABCDEF";
	var color = '#';
	for (var i = 0; i < 6; i++){
		color += letters[(Math.floor(Math.random() * 16))];
	}
	return color
}

function transferColorValues () {
	var rndColor1 = randomColor();
	var rndColor2 = randomColor();
	color1.value = rndColor1;
	color2.value = rndColor2;
}

function setGradientRandom() {
	transferColorValues();
	setGradient();
}

colorize.addEventListener("click", setGradientRandom);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
setGradient();
