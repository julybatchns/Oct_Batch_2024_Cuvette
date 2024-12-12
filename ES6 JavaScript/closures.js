// ! In JavaScript, closures are functions that have access to variables from their own scope, the outer function's scope, and the global scope, even after the outer function has returned. Closures allow for encapsulation, data privacy, and the creation of function factories.

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Outer Variable: ${innerVariable}`);
  };
}
const closureFunction = outerFunction("outside");
closureFunction("inside");

// Lexical Scope/Lexical Environment

function createCounter() {
  let count = 1; // private
  return function () {
    count += 1; // count = 0 + 1 = 1
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // count + 1 = 1 + 1 =
console.log(counter());
console.log(counter());
console.log(counter());
