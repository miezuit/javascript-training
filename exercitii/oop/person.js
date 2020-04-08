
class Person {

    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, height, course) {
        super(name, age, height);
        this.course = course;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I learn ${this.course}`);
    }
}

var radu = new Person("Radu", 33, 170);
var alex = new Student("Alex", 20, 180, "Java Script");

radu.sayHello();
alex.sayHello();

class formatDate extends Date {

    getFormattedDate() {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
  
  }
  
  console.log(new formatDate('August 19, 1975 23:15:30').getFormattedDate());
  // expected output: "19-Aug-1975"

  class ReversibleString extends String {
      
    reverse() {
        return this.split('').reverse().join('');
    }

  }

  hello = new ReversibleString("hello");
  console.log(hello.reverse());