const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var n = 0;

throw new TypeError('You cannot convert a number to upper case');

console.log('Enter a number between 1 and 99: ');
rl.on('line', function(num) {
    try {
        if (isNaN(num)) throw 'The input must be a number';
        if (num < 1) throw 'The number must be bigger than 0';
        if (num > 99) throw 'The number must be smaller than 99';
    } catch (error) {
        console.log('Error: ' + error + '. Try again.');
        return;
    }
    n = num;
    process.exit(0);
});
