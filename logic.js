$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
})

var booFacts = ["Boo is a pomeranian, Boo's best friend is another pomeranian named Buddy, Boo the Pomeranian was born on March 16, making him a Pisces, Boo's favourite food is grass, Boo has released two books" ]

$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
	// THE PINK VALUE DIDN'T INCLUDE THE NECESSARY QUOTATIONS
})
$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
	// LINE 13 WAS NOT INDENTED PROPERLY
})
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})
$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})
$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
	// THE CLICK VALUE DIDN'T HAVE THE QUOTATIONS AND THE LINE BREAK FOR THE WIDTH PROPERTY WAS UNNECESSARY
})
// GLOBALLY, THERE WERE MULTIPLE UNNECESSARY LINE BREAKS IN THE DOCUMENT