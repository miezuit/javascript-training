function Car(make, tankMax, cons) {
  this.make = make;
  this.tankMax = tankMax;
  this.tank = 0;
  this.cons = cons;
  this.fillTank = function(quantity) {
    if(this.tank + quantity > this.tankMax) {
      return;
    }
    this.tank += quantity;
  };
  this.run = function(distance) {
    if (this.tank < distance * this.cons / 100) {
      return;
    }
    this.tank -= distance * this.cons / 100;
  };
}

Car.prototype.milesToRun = function() {
    return this.tank / this.cons * 100;
  };

var chevy = new Car("Chevy", 150, 25);
var honda = new Car("Honda", 60, 4.2);
var mustang = new Car("Mustang", 120, 35);

var mustang2 = Object.assign({}, mustang);
console.log(mustang2);

chevy.color = new String("blue");
console.log(chevy.color);
chevy.fillTank(60);
console.log(chevy.tank);
chevy.run(200);
console.log(chevy.milesToRun());
console.log(chevy.tank);

var a = [1,2,3,4,5,6,7,8,9];
var b = [20, 30, 40];

Array.prototype.sum = function() {
  var sum = 0;
  for(var i=0; i<this.length; i++) {
    sum += this[i];
  }
  return sum;
};

console.log(a.sum());
console.log(b.sum());
