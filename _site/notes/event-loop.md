# **Event Loop. 🔁 😵**

[Home](../README.md) / Event Loop? 🔁 😵

---

## Some Concepts or go directly to [Event Loops](#event-loops-)

JavaScript has a concurrency model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

```md
Single-Threaded means that JS can only run one instruction at a time, even if your CPU has multiple cores and available threads.
```

Some Runtime Concepts:

➡ [Stack 🍔](#stack-)  
➡ [Heap ☁️](#heap-)  
➡ [Queue 🍞](#queue-)

### **Stack 🍔**

### **Heap ☁️**

### **Queue 🍞**

---

## **Event Loops 😵**

Event Loop is essentially an infinite loop which keeps on checking if something exists in the queue. Its most basic implementation can be imagined as:

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

Here is an example to understand better:

```js
const first = () => console.log("First");
const second = () => setTimeout(() => console.log("Second"), 1000);
const third = () => console.log("Third");

first();
second();
third();

// Output
// JavaScript will first run the synchronous code then it will look for messages in the queue.

First;
Third;
Second;
```

See the above code [here](../scripts/event-loops.js)

### **Zero delays**

Now, if we set the setTimeout with a delay of `0` (zero) milliseconds doesn't execute the callback function after the given interval.

```js
const second = () => setTimeout(() => console.log("Second"), 0);
```

The output will remain the same! 🤯

### **Non-blocking**

A property of the event loop model is that JavaScript, unlike a lot of other languages, never blocks. Handling I/O is typically performed via events and callbacks, so when the application is waiting for a database query to return or an XHR/API request to return, it can still process other things like user input.

```md
Lets recapitulate 📝:

For each round of Event Loop JavaScript will:

➡ Run synchronous code.  
➡ Run [Promise](/promises.md) or microtask callbacks.  
➡ Run asynchronous code.
```

---

See Also:

> ⚫ Promises 🤝 and Async/Await 🤯 [ Read ▶ ](./promises.md)  
> ⚫ Datatypes in JavaScript. 😙 [ Read ▶ ](./datatypes-in-javascript.md)
