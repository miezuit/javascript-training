import { Superman as AnotherSuperman } from './superman.js';
import { Mage } from './mage.js';

class Superman {

}

var clark = new AnotherSuperman("Clark Kent", 1000, 1000);
var xevras = new Mage("Xevras", 100, 300);

clark.firePrimary(xevras);
xevras.firePrimary(clark);
xevras.fireSecondary(clark);
clark.fireSecondary(xevras);

console.log(clark);
console.log(xevras);

console.log(clark.isAlive());
console.log(xevras.isAlive());