// const button = document.getElementById("btn");
// button.addEventListener("click", () => {
//   console.log("Don't Click me!!!");
//   // alert("Don't Click me!!!");
//   button.style.backgroundColor = "red";
// });

// let elements = document.getElementsByClassName("myClass");
// let elements = document.getElementsByTagName("div");

let element = document.querySelector("#btn");
element.addEventListener("click", () => {
  console.log("Don't Click me!!!");
  // alert("Don't Click me!!!");
  element.style.backgroundColor = "red";
  element.innerHTML = "Push me";
});
