// alert("hey! Oct Batch!");
console.log("Heyyyyy");
console.log(2 * 12);
console.log(23 == 34);
console.log(23 == "23" && "hello" == "hello");

// ! 1. Variables

let name = "Cuvette";
console.log(name);

// let age = 23;
// console.log(age);

// ! 2. DataTypes

let text = "Hello, World!"; // String
let age = 23; // Number
let isLogin = true; // Boolean

console.log(text, age, isLogin);

// Operators

// a. Arithemetic

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // Remainder

// ! Comparison Operators:

// == (equal to)
// === (strict equal to)
// != (not equal to)
// !== (strict not equal to)
// > (greater than)
// < (less than)

let x = 5;
let y = "5";

console.log(x == y);
console.log(x === y);

// ! 4. Control Structures

// a. Conditionals

let personAge = 19;

if (personAge > 18) {
  console.log("you're an adult.");
} else {
  console.log("you're a minor");
}

// 5. Loops - Loops allow us to repeat code until a condition is met.

// 1. for

// for (initialization; condition; increment) {
//   console.log("iteration number " + n);
// }

for (let i = 0; i < 5; i++) {
  console.log("iteration number " + i);
}

// i++ = i + 1

let counter = 0;
while (counter < 5) {
  console.log("Counter: " + counter);
  counter++;
}

// Functions

// function functionName(paramters) {
//   return statement;
// }

// functionName();

function addMachine(a, b) {
  return a + b;
}

console.log(addMachine(23, 45));

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]);
