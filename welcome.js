$(document).ready(function() {
	context = canvas.getContext("2d");
	showOnlyWelcome();
	//createUserP();
});

function showOnlyWelcome() {
	var e1 = document.getElementById("welcome");
	e1.style.display = 'block';
	var e2 = document.getElementById("signup");
	e2.style.display = 'none';
	var e3 = document.getElementById("login");
	e3.style.display = 'none';
	var e5 = document.getElementById("settings");
	e5.style.display = 'none';
	var e6 = document.getElementById("game");
	e6.style.display = 'none';
	myMusic.pause();	
}







