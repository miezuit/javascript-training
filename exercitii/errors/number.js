const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin
});

var n = 0;

console.log('Please enter your age: ');

reader.on('line', function(line) {
    try {
        if (isNaN(line)) throw new TypeError('The input must be a number');
        if (line < 1) throw new RangeError('The input must be bigger than 0');
        if (line > 999) throw new RangeError('The number must be smaller than 1000');       
    } catch (error) {
        console.log(error.message + '. Please try again:');
        return;
    }
    n = 1 + parseInt(line);
    console.log('Next year you will be ' + n);
    process.exit(0);
});