// JavaScript Document
var letters = $('.title span');

function randomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

$('.enter').mouseenter(animateLetters);

function animateLetters() {
	for(var i = 0; i < 6; i++) {
		var letter = letters[randomNumber(letters.length - 1)];
		$(letter).addClass('bounce');
	}
	
	setTimeout(function() {
		letters.removeClass('bounce');
	}, 800)
}