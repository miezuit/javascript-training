
function sum(a, b) {
    return a + b
}

console.log(sum(4, 5))



// functia de comparare
// primeste 2 parametri a si b
// returneaza:
// a > b  : un numar pozitiv
// a < b  : un unumar negativ
// a == b : 0
function compareNumbers(a, b) { 
    return b - a
}

function compareNegativePositive(a, b) {
    // todo
}

function compareFuits(a, b) {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    if (a.length == b.length) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    }
}

var numbers = [1, 2, 55, 23, 0, 11, 123, -33]

var fruits = ['cucumber', 'carrot', 'orange', 'apple']

// high-order function
numbers.sort(compareNumbers)

fruits.sort(compareFuits)

console.log(numbers.toString())
console.log(fruits.toString())

let negativeNumbers = numbers.filter(function(number) {
    return number < 0
})
console.log(negativeNumbers.toString())

