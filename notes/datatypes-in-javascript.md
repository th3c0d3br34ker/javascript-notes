# Datatypes in JavaScript. 😙

[Home](../README.md) / Datatypes in JavaScript. 😙

---

There are primarily two types of datatypes in JavaScript:

➡ [Primitives 💫](#primitives-)  
➡ [Objects ☯](#objects-)

---

## Primitives 💫

The lowest level building blocks in JavaScript are primitives, which include: undefined, null, string, number, bigint, boolean, and symbol. All primitives are immutable.

```js
> typeof  5; // number
> typeof "Mon" // string
> typeof null // null
> typeof true // boolean
```

JavaScript provides seven different primitive data types:

| Data Types  | Examples                                                              |
| ----------- | --------------------------------------------------------------------- |
| `undefined` | A variable that has not been assigned a value is of type `undefined`. |
| `null`      | No value.                                                             |
| `string`    | `'a', 'aa', 'aaa', 'Hello!'`                                          |
| `number`    | `-5, 2, 0.1`                                                          |
| `boolean`   | `true, false`                                                         |
| `object`    | A collection of properties, with key and value pair.                  |
| `symbol`    | Represents a unique identifier.                                       |

---

## Objects ☯

Anything that is not a primitive is an Object, or a descendant of it. Objects are collections of key/value pairs and used as the building block for more complex data structures.

```js
typeof {}; // object
typeof []; // object
typeof function () {}; // function (which inherits from object)
```

---

## The difference between `undefined` and `null`

✅ `undefined`: It is the default value for any variable which is declared but has no value assigned to it, OR a function which doesn't return anything.

```js
let x;

console.log(x); // undefined

// OR

function meh() {}

console.log(meh()); // undefined
```

✅ `null`: It represents "empty" value, which a programmer would assign explicitly.

```js
let x = null;

console.log(x); // null

// OR

function meh() {
  return null;
}

console.log(meh()); // null
```

---

## JavaScripts TWO equality operators

JavaScript porvides two equality operators `==` and `===`. Since this is the case there is a lot of confusion

➡ `==`: It is called the equality operator. It only compares the data.

➡ `===`: It is called the identity operator. It compares both data and the data-type.

Let's understand the the differece between them with an example.

```js
// Exmaple 1
console.log("5" == 5); // true 🤯

//Example 2
console.log("5" === 5); // false 😋
```

This happens because JavaScript will run a converstion before running the comparision. To handle this you should always use the `===` operator instead of the `==` operator.

---

```md
Lets recapitulate 📝:

➡ There are primarily two types of datatypes in JavaScript: Primitives and Objects.

➡ Primitive data-types can not be mutated, where as Objects can be mutated.

➡ Always use the `===` operator instead of the `==` operator for comparison.
```

---

See Also:

> ⚫ What is the Truth? 🤥 [ Read ▶ ](./what-is-the-truth.md)  
> ⚫ Promises 🤝 and Async/Await 🤯 [ Read ▶ ](./promises.md)
