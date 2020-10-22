# **Closures**

[Home](../README.md) / Closures

---

A `closure` is the combination of a function bundled together (enclosed) with references to its surrounding state (the `lexical environment`).

In other words, a closure is a function that has `access` to its `outer function scope even after the return of the outer function`. This allows the inner function to access the `variables` and arguments even after the outer function has finished.

Here is an implementation of a Closure:

```js
function outer(n) {
  let x = n; // persits in memory after outer is popped off the call stack

  function inner() {
    return x;
  }

  return inner;
}

// Creates the Closure.
const closure = outer(1);

// Operates within its context or lexical environment
console.log(closure()); // 1
```

This happens because the inner function preserves the scope chain of the enclosing function at the time the enclosing function was executed, and thus can access the enclosing function's variables.

## **Scope chains in JavaScript ⛓️**

JavaScript has three scope chains:

✅ Its own block - local variables and its own arguments.

✅ Its outer functions's block - variables a and arguments of its parent function.

✅ Global block - anything defined in the global block.

Here is an another example:

```js
function counter(x) {
  function increment(y) {
    return x + y;
  }
  return increment;
}

const incrementBy1 = counter(1);
incrementBy1(1); // 2
incrementBy1(10); // 11
```

See the above code [here](../scripts/closures.js).

---

See Also:

> ⚫ Event Loop. 🔁 😵 [ Read ▶ ](./event-loop.md)  
> ⚫ What is the Truth? 🤥 [ Read ▶ ](./what-is-the-truth.md)  
> ⚫ Hoisting 🏴‍☠️ ? ...is this a Ship? 🤨 [ Read ▶ ](./hoisting.md)
