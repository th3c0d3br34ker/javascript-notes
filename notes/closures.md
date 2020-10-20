# Closures

[Home](../README.md) / Closures

---

A `closure` is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

Here is an implementation of a Closure:

```js
function customCounter() {
  let count = 0; // persits in memory after customCounter is popped off the call stack

  function increment() {
    count++;
    return count;
  }

  return increment;
}

// Creates the Closure.
const myCounter = customCounter();

// Operates within its context or lexical environment
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3
```

See the above code [here](../scripts/closures.js).

---

See Also:

> ⚫ Event Loop. 🔁 😵 [ Read ▶ ](./event-loop.md)  
> ⚫ What is the Truth? 🤥 [ Read ▶ ](./what-is-the-truth.md)  
> ⚫ Hoisting 🏴‍☠️ ? ...is this a Ship? 🤨 [ Read ▶ ](./hoisting.md)
