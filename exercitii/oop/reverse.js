
class ReversibleString extends String {
    reverse() {
        return this
                 .split('')
                 .reverse()
                 .join('');
    }
}

var myName = new ReversibleString("Radu");

console.log(myName.reverse().toUpperCase());
console.log(myName.toUpperCase());
