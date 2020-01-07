
let game = {
  words: ["carrots", "onions", "broccoli"],
  tries: 0,
  triedLetters: [],
  word: null,
  randomWord: function() {
    return this.words[this.randomNumber(this.words.length)];
  },
  randomNumber: function(max) {
    return Math.floor(Math.random() * max);
  },
  start: function() {
    this.word = this.randomWord();
  },
  try: function(letter) {
    this.triedLetters.push(letter);
    if (!this.word.split('').includes(letter)) {
      this.tries++;
    }
  }
}

window.addEventListener('keydown', onKeyPressed);
function onKeyPressed(event) {
  game.try(event.key);
  renderView();
}

let draw_parts = ["rope", "head", "body", "left_arm", "right_arm", "left_leg", "right_leg"];
function renderView() {
  renderGuessedLetters();
  renderTriedLetters();
  renderParts();
}
function renderGuessedLetters() {
  let guessed = game.word.split('')
    .map(letter => game.triedLetters.includes(letter) ? letter : '_')
    .join(' ');
  document.getElementById('guessed').innerText = guessed;
}
function renderTriedLetters() {
  document.getElementById('letters').innerText = game.triedLetters.join(' ');
}
function renderParts() {
  draw_parts.slice(0, game.tries)
            .forEach(part => document.getElementById(part).style.visibility = "visible");
  draw_parts.slice(game.tries)
            .forEach(part => document.getElementById(part).style.visibility = "hidden");
}

game.start();
renderView();

const animals = [
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
let url = 'https://png.icons8.com/' + animals[i] + '/color/96';