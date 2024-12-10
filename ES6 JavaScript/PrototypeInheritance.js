// ? 1. In JavaScript, every object has an internal property called [[Prototype]], which refers to another object. This "prototype" acts as a fallback for properties or methods that an object doesn't directly possess.

// [[Prototype]] == "Object"
// Array.prototype.push
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const shubham = new Person("Shubham");
const bhanu = new Person("Bhanu");
bhanu.greet();

const objectOne = {
  name: "Cuvette",
};

// console.log(objectOne.toString());
// Output: [object Object]
// `toString` is not in `objectOne`, so JavaScript looks in `Object.prototype`
// Object.toString (Backup Plan) => Inbuit Prop & Methods.

// Prototypal Inheritance
const parent = {
  greet: function () {
    console.log("Hello from the Parent!");
  },
};

const child = Object.create(parent);
child.greet();

function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.start = function () {
  console.log(`${this.type} starts!`);
};

const car = new Vehicle("Car");
car.start();
