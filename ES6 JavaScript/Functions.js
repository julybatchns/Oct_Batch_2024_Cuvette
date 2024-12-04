// In JavaScript, functions are reusable blocks of code designed to perform a specific task. Functions help in organizing and structuring code, reducing redundancy, and improving maintainability.

// ! 1. Function Declaration

// function greet(name) {
//   return `Hello, ${name}!`;
// }
// Calling the function
console.log(greet("October Batch"));
console.log(greet("Shubham"));
console.log(greet("Vivek"));
console.log(greet(null));

// ("Shubham");
// ("Shubham");
// String Interpolation
// Backticks

// ! 2. Function Expression
const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3));

// ! 3. Arrow Function

// function add(a, b) {
//   return a + b;
// }
const addd = (a, b) => a + b;
const addvar = 21231;
const multiplyy = (a, b) => a * b;
console.log(add(33, 33));
console.log(multiplyy(100, 3));

// ! 4. Anonymous Function

const numbers = [1, 2, 3];
const doubled = numbers.map(function (num) {
  return num * 2;
});
// callback, anonymous, arrow, function
console.log(doubled);

// ! 5. Immediately Invoked Function Expressions (IIFE)
(function () {
  console.log("This function runs immediately!");
})();

(function (name) {
  console.log(`Hello, ${name}!`);
})("Bob");

// 6. Default Parameters

function greet(name = "Stranger") {
  return `Hello, ${name}!`;
}

console.log(greet());

// 7. Callback Parameters

function processUserInput(callback) {
  const name = "Charlie";
  callback(name);
}

processUserInput(function (name) {
  console.log(`Hello, ${name}!`);
});
