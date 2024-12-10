const addBtn = document.getElementById("addBtn");
console.log(addBtn);
addBtn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  const list = document.getElementById("list");
  list.appendChild(newItem);
});
