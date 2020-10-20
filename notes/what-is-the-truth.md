# What is the Truth? 🤥

[Home](../README.md) / What is the Truth? 🤥

---

## Truthy and Falsy

In JavaScript when a value is encountered in a Boolean context - such as an `if` statement - it will be coerced into a boolean. If the result is `true` then the value is truthy and vice versa.

Example:

```js
// Truthy
> true; // true
> !! "hello"; // true
> !! -1; // true (All numbers except 0 are true)
> !! []; // true
> !! {}; // true
> !! function demo() {} // true

// Falsy
> false; // false
> !! null; // false
> !! undefined; // false
> !! 0; // false
> !! ""; // false
```

> If you’re unsure about a value, you can convert it using the logical `"!"` NOT operator twice `"!!"`.

---

## Why Truthy & Falsy

Knowing what does a variable return helps the programmer to control the flow of the program.

```js
function unicorns(name) {
  const unicon = name;
  if (unicorn) {
    return "Unicorns Exists!";
  } else {
    return "Unicorns Don't Exists!";
  }
}

console.log(unicorns("🦄")); // Unicorns Exists!
console.log(unicorns()); // Unicorns Don't Exists
```

Above is a simple demostration about how the control can be handled using Truthy and Falsy.

---

See also:

> ⚫ Promises 🤝 and Async/Await 🤯 [ Read ▶ ](./promises.md)  
> ⚫ Hoisting 🏴‍☠️ ? ...is this a Ship? 🤨 [ Read ▶ ](./hoisting.md)  
> ⚫ Event Loop. 🔁 😵 [ Read ▶ ](./event-loop.md)
