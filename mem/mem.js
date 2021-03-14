var animals = ["turtle","snail","corgi","parrot","rabbit","bear","panda","fish","crab","pig","shark","rhinoceros"];
var images = [];

// get images, place them in an array & randomize the order
for (i = 0; i < 12; i++) {
  var img = 'img/icons8-' + animals[i] + '.png';
  images.push(img);
  images.push(img);
}
shuffle();

function shuffle(){
  Array.prototype.randomize = function()
  {
    var i = this.length, j, temp;
    while (--i)
    {
      j = Math.floor( Math.random() * (i - 1) );
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
  };

  images.randomize();
}



// output images then hide them
var output = "<ul>";
for (var i = 0; i < 24; i++) {
  output += "<li>";
  output += "<img src = '" + images[i] + "' width='96' height='96''/>";
  output += "</li>";
}
output += "</ul>";
document.getElementById("grid").innerHTML = output;


var first = null;
var second = null;
var selected = 0;
var correct = 0;

items = document.querySelectorAll('li');

items.forEach(item => item.addEventListener('click', function(event) {
  if (selected === 2) return;

    // increment guess count, show image, mark it as face up
    selected++;
    event.target.querySelector('img').style.visibility = 'visible';

    //First turn
    if (selected === 1) {
      first = event.target;
    } else {
      second = event.target;

      if (first.querySelector('img').src === second.querySelector('img').src) {
        correct++;
        selected = 0;
        if (correct === 12) {
          restart();
        }
      } else {
          setTimeout(function () {
            first.querySelector('img').style.visibility = 'hidden';
            second.querySelector('img').style.visibility = 'hidden';
            selected = 0;
          }, 1000);
        }
    }
}));
