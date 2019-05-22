
$("#start").click(start);

function start() {
  $("#start").hide();
  createNewLetter();
}

function createNewLetter() {
  var letter = randomLetter();
  var element = $('<div></div>')
                .text(letter)
                .css({
                  backgroundColor: randomColor(),
                  bottom: randomPosition(),
                  left: randomPosition()
                });
  $('.container').append(element);
}

function randomLetter() {
  var code = 97 + randomNumber(25);
  var letter = String.fromCharCode(code);
  return letter;
}

function randomPosition() {
  return randomNumber(100) + '%';
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
