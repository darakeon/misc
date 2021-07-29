function makeMisc(id, dna) {
	var r = dna.substr(0, 1);
	var g = dna.substr(3, 1);
	var b = dna.substr(6, 1);
	var color = r + g + b;

	var main = document.getElementById(id);

	setClass(main, color, "ant", dna.substr(1, 2));
	setClass(main, color, "eye", dna.substr(4, 2));
	setClass(main, color, "arm", dna.substr(7, 1));
	setClass(main, color, "leg", dna.substr(8, 1));
	setClass(main, color, "body", "");
}

function setClass(main, color, name, code) {
	if (code != "")
		code = "-" + code;

	main.getElementsByClassName(name)[0].style =
		"background-image: url('assets/" + color + "-" + name + code + ".png')";
}

function getRandomDna() {
	var size = 9;
	var base = 2;
	var combs = Math.pow(base, size);
	var rand = Math.random();
	var decimal = Math.floor(rand * combs) % combs;
	return decimal.toString(base).padStart(size, "0");
}
