# **Are you looking for `this`? 🙄**

[Home](../README.md) / Are you looking for `this`? 🙄

---

## **What is `this` 😥**

In JavaScript `this` refers to the current object that is executing the current function. It has different values depending on where it is used.

Read more or about objects [here](./objects.md).

## The `this` reference 😳

✅ If the function is inside an Object then `this` refers to the that object.

Example:

```js
const cookie = {
  flavour: "chocolate",
  eat() {
    console.log(`I am a ${this.flavour} 🍪 and I was eaten!`);
  },
};

Cookie.eat();

// This is another way of writing the above code.
const cookie = {
  flavour: "chocolate",
  eat: function () {
    console.log(`I am a ${this.flavour} 🍪 and I was eaten!`);
  },
};

// Both the codes are same.
```

This will not work if we use it inside an [Arrow Function](./arrow-functions.md) or inside a nested function.

Example

```js
// this will not work
const cookie = {
  flavour: "chocolate",
  eat: () => {
    console.log(`I am a ${this.flavour} 🍪 and I was eaten!`);
  },
};

// OR

const cookie = {
  flavours: ["chocolate", "stawberry", "vanilla"],
  eatAllCookies() {
    this.flavours.forEach(function (flavour) {
      // 👈 Anonymous nest function
      console.log(`I am ${flavour} 🍪 and I was eaten!`); // 👈 Will output "I am 'undefined' and I was eaten!"
    });
  },
};
```

To bind the object we need to pass the `this` object as an argument to the `forEach()` function.

```js
const cookie = {
  flavours: ["chocolate", "stawberry", "vanilla"],
  eatAllCookies() {
    this.flavours.forEach(function (flavour) {
      console.log(`I am ${flavour} 🍪 and I was eaten!`);
    }, this); // 👈 here this refers to the current "flavours" array, which in turn is an object.
  },
};

// Works like a charm 😋
cookie.eatAllCookies();
```

---

✅ If the function is a regular function then `this` refers to the `window` object in browser and the `global` object in node.

Example:

```js
function eatCookie() {
  console.log(this);
  console.log("this doesn't have a 🍪 object");
}

// It will print the window object if run in browser and global if run in node.
```

**We can prevent `this` from binding to the global if we use `strict` mode.**

> `this` is `undefined` in a normal function when using the `strict` mode.

```js
"use strict";

function eatCookie() {
  console.log(this);
  console.log("this doesn't have anything!");
}

// the above code will not log the global or window object, instead it will print 'undefined'.
```

`this` again behaves different if we invoke a function using the `new` operator.

```js
function Cookie() {
  this.flavour = "I am a chocolate 🍪";
  console.log(this.flavour, "and I was eaten!");
}

const cookie = new Cookie();
```

When we use the `new` operator, it creates a new empty object `{ }`. Then names that object `Cookie` and adds `flavour` property to it.

---

See also

> ⚫ Event Loop. 🔁 😵 [ Read ▶ ](./event-loop.md)  
> ⚫ Closures [ Read ▶ ](./closures.md)
