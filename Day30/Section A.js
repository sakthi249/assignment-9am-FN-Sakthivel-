/* ============================================================
   📌 Section A: Conceptual Questions (Comment-wise Answers)
   ============================================================ */

/*
1) What is asynchronous JavaScript? Why is it needed?
- Asynchronous JavaScript means JS can run tasks without waiting for them to finish.
- It is needed because tasks like API calls, timers, file loading take time.
- If JS waits, the webpage may freeze or become slow.
*/

/*
2) Explain callback functions with a real-life example.
- A callback is a function passed into another function to run later.
- Real-life example: Ordering food -> after delivery, you get a message.
  That message is like a callback (it happens after delivery).
*/

/*
3) What is callback hell? Why is it a problem?
- Callback hell means too many nested callbacks.
- Problem: hard to read, hard to debug, hard to maintain.
*/

/*
4) Define a Promise and explain its states.
- A Promise represents a future result (success or failure).
- States:
  1. Pending   -> waiting
  2. Fulfilled -> success (resolve)
  3. Rejected  -> failure (reject)
*/

/*
5) Difference between callbacks and promises.
- Callbacks:
  - Function inside another function
  - Can become nested (callback hell)
  - Error handling becomes messy
- Promises:
  - Better readable
  - Uses .then() and .catch()
  - Better error handling
*/

/*
6) Why is async/await preferred over .then()?
- async/await looks like normal synchronous code.
- It is easier to read, write, and debug.
*/

/*
7) Can await be used without async? Why?
- No, await works only inside an async function.
- async tells JS that the function will return a promise.
*/

/*
8) What happens if a promise is rejected?
- If rejected:
  - It goes to .catch()
  - OR throws error inside async/await and needs try/catch
*/

/*
9) Explain error handling in async/await.
- Use try...catch to handle errors:
  try { await something }
  catch(err) { handle error }
*/

/*
10) Write one real-world use case for asynchronous JavaScript.
- Fetching data from API:
  Example: login, weather app, social media posts loading, payments.
*/