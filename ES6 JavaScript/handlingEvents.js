const button = document.getElementById("myButton");
const message = document.getElementById("message");

button.addEventListener("mouseover", () => {
  message.textContent = "You hovered over the button!";
});
button.addEventListener("mouseout", () => {
  message.textContent = "";
});
