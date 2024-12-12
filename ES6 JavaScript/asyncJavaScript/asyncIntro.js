// *  Asynchronous JavaScript allows you to perform tasks in a non-blocking way, meaning the program doesn't have to wait for one operation to finish before starting another. This is especially useful for tasks like fetching data from a server, reading files, or executing time-based operations.

// SetTimeout
// Callback
// Promises
// Async Await

// function fetchData(callback) {
//   console.log("Fetching Data....");
//   setTimeout(() => {
//     const data = { id: 1, name: "Cuvette" };
//     callback(data);
//   }, 3000);
// }

// fetchData((data) => {
//   console.log("Data recieved:", data);
// });

// console.log("End the Process....");

// Callback Hell

// console.log("Starting the Process.....");
// setTimeout(() => {
//   console.log("Task 1 completed");
//   setTimeout(() => {
//     console.log("Task 2 completed");
//     setTimeout(() => {
//       console.log("Task 3 completed");
//     }, 2000);
//   }, 2000);
// }, 2000);

// pyramrid of DOOM

// Promises
// ! Promises are used to handle asynchronous operations more cleanly. A Promise represents a value that will eventually be resolved or rejected.

// 1. Creating a Promise

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     console.log("Fetching Data....");
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve({ id: 1, name: "Cuvette" });
//       } else {
//         reject("Failed to fetch the data from backend sever");
//       }
//     }, 3000);
//   });
// }

// 2. Consuming a Promise
// fetchData()
//   .then((data) => {
//     console.log("Data recieved:", data);
//   })
//   .catch((error) => {
//     console.error("Error", error);
//   });

// function main() {
//   try {
//     const data = fetchData();
//     console.log("Data received:", data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// main();

// try and catch block - error handling

// Async Await
// ? async and await are modern JavaScript features introduced in ES2015(ES6) to simplify working with asynchronous code. They build on Promises and make the code look and behave like synchronous code, improving readability and maintainability.

// ! 1. async function
// * Declaring a function as async ensures it always returns a Promise.
// ? Inside an async function, you can use the await keyword to pause the execution until a Promise is resolved or rejected.

// 2. await function
// * The await keyword can only be used inside an async function.
// ? It pauses the execution of the function until the Promise is resolved.
// ! When the Promise resolves, await returns the resolved value. If the Promise is rejected, it throws an error.

// Syntax

// async function exampleFunction() {
//   const result = await someAsyncOperation();
//   console.log(result);
//   return result;
// }

function fetchData() {
  return new Promise((resolve, reject) => {
    // console.log("Fetching Data....");
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ id: 1, name: "Cuvette" });
      } else {
        reject("Failed to fetch the data from backend sever");
      }
    }, 3000);
  });
}

async function main() {
  console.log("Fetching Data...");
  const data1 = await fetchData();
  console.log("Data recieved", data1);
  const data2 = await fetchData();
  console.log("Data recieved", data2);
}

main();

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .catch((error) => console.error(error));
