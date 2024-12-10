const button = document.getElementById("myButton");
const message = document.getElementById("message");

function showMessage() {
  message.textContent = "Button clicked!";
}

button.addEventListener("click", showMessage);

setTimeout(() => {
  button.removeEventListener("click", showMessage);
  console.log("Event Listener removed.");
}, 5000);
