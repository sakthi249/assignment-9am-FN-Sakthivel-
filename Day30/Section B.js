/* ============================================================
Section B: Coding Assignments
   ============================================================ */

/*
1) Write a callback function using setTimeout that prints a message after 3 seconds.
*/
setTimeout(() => {
  console.log("Hello! Message after 3 seconds ✅");
}, 3000);


/*
2) Convert a callback-based function into a promise.
*/

// Callback version
function getDataCallback(callback) {
  setTimeout(() => {
    callback("Data received using callback ✅");
  }, 2000);
}

getDataCallback((msg) => console.log(msg));

// Promise version
function getDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received using promise ✅");
    }, 2000);
  });
}

getDataPromise().then((msg) => console.log(msg));


/*
3) Create a promise that resolves after 2 seconds.
*/
const promise2Sec = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds ✅");
  }, 2000);
});

promise2Sec.then((msg) => console.log(msg));


/*
4) Handle a rejected promise using .catch().
*/
const rejectedPromise = new Promise((resolve, reject) => {
  reject("Promise rejected ❌");
});

rejectedPromise
  .then((res) => console.log(res))
  .catch((err) => console.log("Caught Error:", err));


/*
5) Rewrite a promise example using async/await.
*/

// Promise function
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data Loaded ✅"), 1000);
  });
}

// Using async/await
async function runFetch() {
  const res = await fetchData();
  console.log(res);
}
runFetch();


/*
6) Use try...catch with async/await.
*/
function fakeApi() {
  return new Promise((resolve, reject) => {
    reject("API Failed ");
  });
}

async function callApi() {
  try {
    const res = await fakeApi();
    console.log(res);
  } catch (error) {
    console.log("Handled Error:", error);
  }
}
callApi();


/*
7) Create a function that returns a promise with random success or failure.
*/
function randomSuccessFail() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;

    if (success) resolve("Success ✅");
    else reject("Failure ");
  });
}

randomSuccessFail()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


/*
8) Chain two .then() methods in a promise.
*/
Promise.resolve(10)
  .then((num) => {
    console.log("First then:", num);
    return num * 2;
  })
  .then((result) => {
    console.log("Second then:", result);
  });


/*
9) Create an async function that waits for two promises.
*/
function p1() {
  return new Promise((resolve) => setTimeout(() => resolve("P1 done ✅"), 1000));
}

function p2() {
  return new Promise((resolve) => setTimeout(() => resolve("P2 done ✅"), 2000));
}

async function waitTwoPromises() {
  const r1 = await p1();
  const r2 = await p2();

  console.log(r1);
  console.log(r2);
}
waitTwoPromises();


/*
10) Explain the output of an async function in comments.
*/
async function demoOutput() {
  console.log("Start");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("End");
}

demoOutput();

/*
Output:
Start
(wait 2 seconds)
End

Reason:
- await pauses only inside the async function until promise completes.
*/