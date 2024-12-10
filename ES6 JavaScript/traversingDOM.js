const container = document.getElementById("container");
console.log(container.children);

for (const child of container.children) {
  console.log(`Hello, ${child.textContent}`);
}
console.log(container.firstElementChild.textContent);
console.log(container.lastElementChild.textContent);
