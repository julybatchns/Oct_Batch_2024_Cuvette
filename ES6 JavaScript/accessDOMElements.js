const title = document.getElementById("title");
console.log(title.textContent);
const paragraph = document.getElementsByClassName("content");
console.log(paragraph[0].textContent);
const button = document.querySelector("#btn");
console.log(button);
button.addEventListener("click", function () {
  title.textContent = "Title Changed on Click";
  paragraph[0].textContent = "This Paragraph has been changed..";
});
// function changeContent() {}
