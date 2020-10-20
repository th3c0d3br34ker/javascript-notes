# Hoisting 🏴‍☠️ ? ...is this a Ship? 🤨

[Home](../README.md) / Hoisting 🏴‍☠️ ? ...is this a Ship? 🤨

---

`Hoisting` means that your declarations, i.e. functions and variables, will always be placed in memory at the top of the execution context.

Hoisting was thought up as a general way of thinking about how `execution context` (specifically the creation and execution phases) work in JavaScript. However, the concept can be a little confusing at first. When the JavaScript engine gets our script, the first thing it does is setting up memory for the data in our code. No code is executed at this point, it’s just preparing everything for execution.

See an Example in action:

```js
// hoisting 🏴‍☠️ is as if your `function fun() {}` was located here.

fun(); // works.

function fun() {}
```

> Notice how the function below can be called before it’s actually declared. That’s hoisting in action.

#️⃣ Important point to remember

Only declarations are hoisted

JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined. For Example:

```js
console.log(n); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage.
var n; // Declaration
n = 5; // Initialization

console.log(n); //Throws an error, although was hoisted, no initialization has happened at this stage. Same is the case with var.
let n; // Declaration
n = 5; // Initialization
```

```md
Lets recapitulate 📝:

➡ Functions and variables are stored in memory for an execution context before we execute our code. This is called hoisting.

➡ Functions are stored with a reference to the entire functions, variables with the var keyword with the value of undefined, and variables with the let and const keyword are stored uninitialized.
```

I hope that the term `hoisting` is a bit less obscure now. As always, don't worry if it still doesn't make a lot of sense yet. You'll get a lot more comfortable with it the more you work with it. Feel free to ask me for help. I would love to help you! 😃

See the above code [here](../scripts/hoisting.js)

Read more [here](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

---

See Also:

> ⚫ What is the Truth? 🤥 [ Read ▶ ](./what-is-the-truth.md)  
> ⚫ Event Loop. 🔁 😵 [ Read ▶ ](./event-loop.md)  
> ⚫ Promises 🤝 and Async/Await 🤯 [ Read ▶ ](./promises.md)
