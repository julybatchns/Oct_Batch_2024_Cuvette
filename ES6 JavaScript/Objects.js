// ! Objects in JavaScript are collections of key-value pairs, where keys are strings (or symbols), and values can be of any type, including functions.

// * 1. Creating an Object
// ? A. Object Literal Syntax:-

let ram = "Rohan";
const person = {
  name: "Shubham",
  age: 28,
  greet: () => {
    console.log("Hello, " + this.name);
  },
  hobbies: ["coding", "reading", "singing"],
};

// console.log(person.age);
// console.log(person.name);
// person.greet();

// ? B. Object Constructor Syntax:-
const car = new Object();
// console.log(car);
car.brand = "Toyota";
car.model = "Fortuner";
car.displayInfo = function () {
  console.log(this.brand + " " + this.model);
};
// car.displayInfo();
// console.log(car.displayInfo());

// ! 2.Accessing Object Properties
// 1.Dot Notation
// console.log(car.brand);

// 2.Bracket Notation
// console.log(car["model"]);

// ! 3.Updating Object Properties
car.brand = "Tata";
// console.log(car);

// ! 4.Deleting Object Properties
delete car.model;
// console.log(car);

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

// console.log(calculator.add(10, 20));
// console.log(calculator.subtract(100, 20));

// * Iterating Over Object Properties
const person1 = {
  name: "Shubham",
  age: 28,
  greet: () => console.log("Hello, " + this.name),
  hobbies: ["coding", "reading", "singing"],
};

for (let key in person1) {
  // console.log(key + ": " + person1[key]);
}

const keys = Object.keys(person);
// console.log(keys);
const values = Object.values(person);
// console.log(values);
const entries = Object.entries(person);
// console.log(entries);

// ! this identifier in JS

// ? The this keyword in JavaScript is a powerful feature that refers to the object it belongs to. Its value depends on the context in which it is used.

// 1. Global Context
console.log(this); //global / Window
// 2. Function Context
function showThis() {
  console.log(this);
}
// 3. Object Context
const obj = {
  name: "John",
  greet() {
    console.log(this.name);
  },
};

obj.greet();

// 4. Inside a Constructor Function or Class
// function Person(name) {
//   this.name = name;
// }
// const person2 = new Person("Alice");
// console.log(person2.name); // "Alice"

// // In a class
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// const person3 = new Person("Bob");
// console.log(person3.name); // "Bob"

// 4. this With Arrow Function
const object1 = {
  name: "Rohan",
  greet: function () {
    const innerFunc = () => {
      console.log(this.name);
    };
    innerFunc();
  },
};
object1.greet();

// Lexical Environment/Scope

var name = "Rohan";

var obj2 = {
  name: "Satish",
  greet: () => console.log("Hello", this.name),
};

obj2.greet();
