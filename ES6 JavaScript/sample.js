global.name = "Rohan";

var obj2 = {
  name: "Satish",
  greet: () => console.log("Hello", globalThis.name),
};

obj2.greet();
