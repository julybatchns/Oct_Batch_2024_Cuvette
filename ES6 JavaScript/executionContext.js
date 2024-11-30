function greetings() {
  console.log("Welcome to the JS world!");
}

greetings();

var number1 = 10;
var number2 = 5;

function add(number1, number2) {
  return number1 + number2;
}

function addExtra(number1, number2) {
  var extra = 15;
  return number1 + number2 + extra;
}

var result1 = add(number1, number2);
var result2 = addExtra(number1, number2);

console.log(result1);
console.log(result2);
