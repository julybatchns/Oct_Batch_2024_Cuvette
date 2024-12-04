// ! In JavaScript, an array is a data structure used to store multiple values in a single variable. Arrays can hold elements of any data type, including numbers, strings, objects, other arrays, or a mix of these types.

// Creating an Array

// ? 1. Using the Array Constructor

// let myArray = [12, "asdas", true, [2, 33], { name: "Shubham" }];

let arr = new Array(); // Object - instance of the constructor (Class)
let arr1 = new Array(5); // Object - instance of the constructor (Class)
let arr2 = new Array(1, 2, 3, 4, 5); // Object - instance of the constructor (Class)
// console.log(arr);
// console.log(arr1);
// console.log(arr2);

// 2. Using Array Literals
// let array = [];
// let array2 = [1, 2, 3];
// console.log(array);
// console.log(array2);

let fruits = ["apple", "banana", "cherry"];

// Accessing Array Elements
// console.log(fruits[0]);
// console.log(fruits);

// Modifying Array Elements
fruits[2] = "Mango";
// console.log(fruits);

// Properties of an Array
// console.log(fruits.length);

// Common Array Methods

// 1. push
fruits.push("Orange");
// console.log(fruits);
// 2. pop
fruits.pop();
// console.log(fruits);
// 3. unshift
fruits.unshift("Grapes");
// console.log(fruits);
// 4. shift
fruits.shift();
// console.log(fruits);

// Iterating Over an Array:

// 1. for loop
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// fruits.forEach(function (bhanu) {
//   console.log(bhanu);
// });

let upperCaseFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});

// shubham => SHUBHAM

// console.log(upperCaseFruits);

// function add(x, y) {
//   return x + y;
// }

// add(2, 3);

let result = fruits.find((fruit) => fruit.startsWith("b"));
// console.log(result);

fruits.push("Strawberry");

let filtered = fruits.filter((fruit) => fruit.length > 5);
console.log(filtered);
