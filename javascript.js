var growButton = document.getElementById("box");
var growParseH = parseInt(growButton.style.height, 10);
var growParseW = parseInt(growButton.style.width, 10);

function grow() {
growParseH = parseInt(growButton.style.height, 10);
growParseW = parseInt(growButton.style.width, 10);

growButton.style.height = (growParseH + 100) + "px";
growButton.style.width = (growParseW + 100) + "px";
}
// function increases CSS height and width of the box when "grow" button is clicked.

