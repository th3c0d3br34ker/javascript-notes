# **What on 🌐 is JavaSrcipt? 😵**

[Home](../README.md) / What on 🌐 is JavaSrcipt?

---

```text
JavaScript is a synchronous, single-threaded language.
```

➡ [History 🌍](#history-)

➡ [Current Status 💫](#current-status-)

➡ [Defination 🚀](#defination-)

---

## **History 🌍**

To understand JavaScript we have to go waaaay back to its creation!  
JavaScript is a scripting language written by Brendan Eich in 1995 for the Netscape Navigator browser under the working name of **“Mocha”**. After being renamed to **“JavaScript”**, it was standardized by [ECMA International](http://www.ecma-international.org/) as ECMA-262 or [ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm) in 1997. The authoritative group of people/organizations in charge of the standard is known as TC-39.

```text
And then God said, “Let there be JavaScript”
```

Over the next 25 years, it would see a variety of highs and lows. The most notable releases include

➡ ES1 1997.  
➡ ES2 1998.  
➡ ES3 1999. The longest-standing version of early JS.
➡ ES4 Never finalized.  
➡ ES5 2009. Added JSON, strict mode, functional array methods, and more.  
➡ ES6 2015. Added classes, promises, arrow functions, let/const, and much more.  
➡ ES7, ES8, ES9, ESNext. Modern updates are now being released annually.

You can learn more about ECMAScript [here](https://github.com/tc39/ecma262#ecmascript).

> This establishes the fact that it has nothing to do with Java. 🤗

## **Current Status 💫**

JavaScript is continuously being developed with new additions added to it with every iteration. This is what makes it the most hated/loved language in the world!

## **Defination 🚀**

Let's breakdown the various key terms associated to JavaScript:

✅ **High-level**

JavaScript is a `high-level` programming language. It essentially means that when you run a JavaScript code you don't think about allocating memory or getting a thread from the CPU to run your code. In other words, the level of `abstraction` is provided by a programming language. You get features like `garbage-collectors`, `dynamic-typing` which simplify a programmer's job.

✅ **Interpreted**

JavaScript is a JIT or Just-In-Time compiled language.

✅ **Weakly Typed**

Unlike most programming languages, JavaScript is weakly typed. It simply means the datatypes become known at runtime.

Here is a small example

```js
// JavaScript
let message = "Keep smiling! 😄"; // 👈 Notice we don't mention a datatype.
const happiness = 100; // 👈 Notice we don't mention a datatype.

function add(a, b) {
  // 👆 Notice we don't mention the datatypes of the return value.
  return a + b;
}
```

```java
// Java
String message = "Keep smiling! 😄"; // 👈 Notice we mention a datatype, String in this case.
int happiness = 100; // 👈 Notice we mention a datatype, int in this case.

int add(int a, int b) { // 👈 Notice we mention the datatype of the return value, int in this case.
  return(a+b);
}
```

The type is associated at the run time value. This creates a huge ruckus for programmers 🤬! Here is where TypeScript comes to rescue. It is a strongly typed language and transplies the `TypeScript` code to JavaScript code.

Read more about TypeScript [here](https://www.typescriptlang.org/docs).

✅ **Single-Threaded**

JavaScript is a `single-threaded` language. So it can only do only **ONE** computation at a time. When a JavaScript. To combat this, JavaScript implements the concept of `Event Loops`

✅ **Synchronou**s

JavaScript is `Synchronous`, this essentailly means that each code runs line-by-line.

---

```md
Lets recapitulate 📝:

➡ JavaScript is a high-level, weakly typed, interpreted, synchronous, single-threaded and JIT programming language.

➡ To overcome its blocking feature it implements Event Loops.
```

Read more [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript).

---

See also

> ⚫ Event Loop. 🔁 😵 [ Read ▶ ](./event-loop.md)  
> ⚫ Closures [ Read ▶ ](./closures.md)
