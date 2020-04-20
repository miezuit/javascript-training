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
        // apelam constructorul parintelui
        super(name, age, height);
        // adaugam proprietatile in plus
        this.course = course;
    }
    // suprascrierea metodelor:
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I like ${this.course}`);
    }
}

class Teacher extends Person {
    constructor(name, age, height, specialty) {
        super(name, age, height);
        this.specialty = specialty;
    }
    sayHello() {
        super.sayHello();
        console.log(`I'm a teacher and I teach ${this.specialty}`);
    }
}

var radu = new Person("Radu", 33, 170);
var andreea = new Student("Andreea", 26, 168, "Java Script");
var chuckNorris = new Teacher("Chuck Norris", 40, 175, "Vue.JS");

radu.sayHello();
andreea.sayHello();
chuckNorris.sayHello();
