Array.prototype.randomize = function() {
  var i = this.length, j, tmp;
  while(--i) {
    j = Math.floor(Math.random() * (i - 1));
    tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
  }
}
var animals = [
  'turtle',
  'snail',
  'corgi',
  'parrot',
  'rabbit',
  'bear',
  'panda',
  'fish',
  'shark',
  'pig',
  'crab',
  'rhinoceros'
];
var images = [];
var i;
for(i = 0; i < 12; i++) {
  var url = 'https://png.icons8.com/' + animals[i] + '/color/96';
  images.push(url);
  images.push(url);
}
images.randomize();
var html = '<ul>';
for(i = 0; i < 24; i++) {
  html += '<li><img src="' + images[i] + '"/></li>';
}
html += '</ul>';
document.getElementById('board').innerHTML = html;
