
function Car(model, year, mileage, consumption) {
    this.model = model;
    if (year < 1808) {
      throw 'Invalid year (please read automobile history)';
    }
    this.year = year;
    if (mileage < 0) {
      throw 'Mileage must be a positive number';
    }
    this.mileage = mileage;
    if (consumption < 3) {
      throw 'Consumption must be higher or equal to 3';
    }
    this.consumption = consumption;
    this.drive = function(distance) {
      this.mileage += distance;
    }
}

var fiat = new Car('Fiat', 1957, 100000, 10);
fiat.drive(100);
fiat.drive(50);

console.log(fiat);

Car.prototype.fuel = function(quantity) {
  this.fuelVolume += quantity;
}
Car.prototype.fuelVolume = 0;

fiat.fuel(40);

console.log(fiat);
