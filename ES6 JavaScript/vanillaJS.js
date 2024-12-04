// function exampleVar() {
//   console.log(x);
//   var x = 10;
//   var x = 100;
//   console.log(x);
// }

// var x = 200;
// console.log(x);

// if (true) {
//   var y = 20;
// }

// console.log(y);

// exampleVar();

// var = functional scope
// hoisting = yes
// redeclaration is allowed
// reassignment is allowed

// let b = 1299;
// b = 3242345234;
// function exampleLet() {
//   // console.log(a); // ReferenceError
//   let a = 12;
//   console.log(a);
//   // let b = 129;

//   if (true) {
//     // let b = 20;
//     console.log(b);
//   }
//   console.log(b);
// }

// exampleLet();

// let = block scope
// hoisting = yes, declaration is hoisted but not initialized - temporal Dead Zone
// redeclaration is not allowed
// reassignment is allowed
// Best for: Variables that may need reassignment but must remain within a specific block.

function exampleConst() {
  // console.log(PI);
  // const PI

  const PI = 9.8;
  PI = 91.8;
  console.log(PI);
  if (true) {
    const GRAVITY = 9.8;
    console.log(GRAVITY);
  }
  // console.log(GRAVITY);
}

exampleConst();

// const = block scope
// hoisting = yes, declaration is hoisted but not initialized - temporal Dead Zone
// const decalration must be initialised.
// reassignment is allowed
// Best for: Constants or variables that should not change their value.

// Scope = Environment = declaration of variables and function

// 1. Global
// 2. Function
// 3. Block

let globalVariable = 100;

function myFunction() {
  let functionVariable = 1000;

  if (true) {
    let blockVariable = 1000;
  }
}

if (true) {
  let blockVariable = 1000;
}
