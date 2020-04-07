
class Car {
    constructor(make, model, year, color, maxSpeed) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.started = false;
        this.mileage = 0;
    }
    drive(distance) {
        this.mileage += distance;
    }
    start() {
        this.started = true;
    }
    stop() {
        this.started = false;
    }
}


var myFord = new Car("Ford", "Mondeo", 2016, "black", 210);
var myNationalCar = new Car("Dacia", "Logan", 2020, "white", 170);

myNationalCar.drive(100);

var myCar = {
    make: "Ford",
    model: "GT",
    year: 2020,
    mileage: 1100.5,
    maxSpeed: 300,
    color: "blue",
    started: false,
    drive: function(distance) {
        this.mileage += distance;
    },
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    }
}

var anotherCar = {
    model: "Bel Air",
    year: 1960,
    maxSpeed: 160,
    color: "red",
    started: true
}