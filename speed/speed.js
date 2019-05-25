
$("#start").click(start);

var score = 0;

function start() {
  $("#start").hide();
  createNewLetter();
  $(document).keypress(function(event) {
    letter = String.fromCharCode(event.keyCode);
    $('.' + letter).animate({
      'bottom': '0%'
    },
    {
      complete: function() {
        $(this).remove();
        score++;
        $('.score').text(score);
      }
    })
  });
}

function createNewLetter() {
  var letter = randomLetter();
  var element = $('<div></div>')
                .text(letter)
                .addClass(letter)
                .css({
                  backgroundColor: randomColor(),
                  bottom: randomPosition(),
                  left: randomPosition()
                });
  $('.container').append(element);
  setTimeout(createNewLetter,
    Math.max(3000 - score/10 * 500, 500)
  );
}

function randomLetter() {
  var code = 97 + randomNumber(25);
  var letter = String.fromCharCode(code);
  return letter;
}

function randomPosition() {
  return randomNumber(90) + '%';
}

function randomColor() {
  var red = randomNumber(255);
  var green = randomNumber(255);
  var blue = randomNumber(255);
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function randomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}
