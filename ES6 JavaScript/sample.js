// var name = "Rohan";
global.name = "Rohan";
// global => object in node js
// window => object in browser
var obj2 = {
  name: "Satish",
  greet: () => console.log("Hello", globalThis.name),
};

obj2.greet();
