var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function background() {
	var styler = setGradient();
	body.style.background = styler;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	 + color1.value 
	 + ", " 
	 + color2.value 
	 + ")";

	 css.textContent = body.style.background + ";";
}

function getrandomColor() {
	var length = 6;
	var chars = '0123456789ABCDEF'
	var hex = '#';
	while(length--) hex += chars[(Math.random() * 16) | 0];

	return hex;
}

function getrandomColor2() {
	var length = 6;
	var chars = '0123456789ABCDEF'
	var hex = '#';
	while(length--) hex += chars[(Math.random() * 16) | 0];

	return hex;
}

function colorChanger() {
	var rnd = getrandomColor();
	color1.value = rnd;

	background();
}

function colorChanger2() {
	var rnd2 = getrandomColor2();
	color2.value = rnd2;

	background();
}


document.onload = setGradient();

random.addEventListener("click", colorChanger);
random.addEventListener("click", colorChanger2);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);





