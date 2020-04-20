
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
myFord.drive(120);
myFord.drive(100);

console.log(myFord.mileage);

var fordCopy = Object.assign({}, myFord);

console.log(fordCopy);