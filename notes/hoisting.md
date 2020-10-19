# Hoisting? ...is this a Ship? 🤨

[Home](..\README.md) / Hoisting?

---

# Hoisting

Hoisting means that your declarations, i.e. functions and variables, will always be placed in memory at the top of the execution context.

Hoisting was thought up as a general way of thinking about how `execution contexts` (specifically the creation and execution phases) work in JavaScript. However, the concept can be a little confusing at first.

See an Example in action:

```js
// hoisting is as if your `function fun() {}` was located here.

fun(); // works.

function fun() {}
```

> Notice how the function below can be called before it’s actually declared. That’s hoisting in action.

### Important point to remember

Only declarations are hoisted  
JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined. For Example:

```js
console.log(n); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage
let n; // Declaration
n = 5; // Initialization
```

Read more [here](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

---

See Also:

> ⚫ What is the Truth? 🤥 [ Read ▶ ](/what-is-the-truth.md)
