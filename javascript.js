var grabBox = document.getElementById("box");
var growParseH = parseInt(grabBox.style.height, 10);
var growParseW = parseInt(grabBox.style.width, 10);

function grow() {
growParseH = parseInt(grabBox.style.height, 10);
growParseW = parseInt(grabBox.style.width, 10);

grabBox.style.height = (growParseH + 100) + "px";
grabBox.style.width = (growParseW + 100) + "px";
}
// I wanted to improvise a little on this function so that it will incrementally grow many times over.

function colorize() {
	grabBox.style.background = "blue";
}
// function changes the box's background color property to blue.

function fade() {
	$("#box").fadeToggle();
}
// I enabled the jQuery script for this function because it was sooooo much easier this way. Please don't expel me.
// The box can be faded in and out consecutively this way. It just feels right.

// The final issue of getting the page to Reset was accomplished with an inline window.reload function. See the HTML for more.