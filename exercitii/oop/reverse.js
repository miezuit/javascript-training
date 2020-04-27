
class ReversibleString extends String {
    reverse() {
        return this
                 .split('')
                 .reverse()
                 .join('');
    }
}

import * as Magic from 'magic.js';

var myString = Magic.MagicString("Radu");

var myName = new ReversibleString("Radu");

console.log(myName.reverse().toUpperCase());
console.log(myName.toUpperCase());
