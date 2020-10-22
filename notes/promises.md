# **Promises 🤝 and Async/Await 🤯**

[Home](../README.md) / Promises 🤝 and Async/Await 🤯

---

JavaScript is a single-threaded programming language yet everything on the web is either blocking 🛑 or time consuming🕓! This means asynchronous processing is an essential skill for any JavaScript developer. Before we understand Async/Await we need to understand Promise.

## **Contents** ✨

➡ [Promise 🤝](#promise-)

➡ [Async/Await](#asyncawait-)

---

## **Promise 🤝**

A Promise represents a value which is unknown now, but may become known at a later time.

A Promise can be in one of `three` states:

➡ **Pending**, when the final value is not available yet. This is the only state that may transition to one of the other two states.

➡ **Fulfilled**, when and if the final value becomes available. A fulfillment value becomes permanently associated with the promise. This may be any value, including undefined.

➡ **Rejected**, if an error prevented the final value from being determined. A rejection reason becomes permanently associated with the promise. This may be any value, including undefined, though it is generally an Error object, like in exception handling.

Promises work in two phases.

➡ Creation of a Promise  
➡ Consumption of a Promise

Promise are create with the `new Promise()` constructor initially in the pending state, and provides references to the resolving functions that can be used to change its state.

Here is how you would create one:

```js
const getVeggie = (name) => {
  const veggies = {
    mango: "🥭",
    apple: "🍎",
    banana: "🍌",
    avocado: "🥑",
  };

  let flag = veggies[name];

  return new Promise((resolve, reject) => {
    if (flag) {
      resolve("Yay there is Veggie! 😄");
    } else {
      reject("Sorry there's no Veggie 😔");
    }
  });
};
```

The next step is to consume the above Promise. Promises are either `resolved` or `rejected`. If a promise is `resolved` it means that it ran successful and has returned a value we can use. If a promise is `rejected` it means that it has failed to run properly.

Here is how you would consume a Promise:

```js
getVeggie("mango")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
```

If the promise is `resolved` then the `then()` is executed. If it fails then `catch()` is executed.

> It is very important to have a catch() for proper error handling.

See the above code [here](../scripts/promise.js).

Read more [here](https://github.com/tc39/proposal-promise-any).

---

## **Async/Await 🤯**

Now that we understand Promises. Async/Await is nothing but “Syntactic Sugar” to make asynchronous code look like synchronous code.

Creating a Promise based function:

```js
const getVeggie = (name) => {
  const veggies = {
    mango: "🥭",
    apple: "🍎",
    banana: "🍌",
    avocado: "🥑",
  };

  console.log("returned", name);
  return veggies[name];
};

const getSalad = async () => {
  const mango = await getVeggie("mango");
  const apple = await getVeggie("apple");
  const avocado = await getVeggie("avocado");
  const banana = await getVeggie("banana");

  return [mango, apple, avocado, banana];
};

// The above code is same as returning a new Promise()
```

> Note:  
> getVeggie() is just a helper function. It represents time consuming function calls like API calls and Database lookups.

The way of consuming the Promise remains the same. Here is how you would consume a Promise:

```js
getSalad()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
```

That's pretty much the introduction to Async/Await.

See the above code [here](../scripts/async-await.js).

---

## **Hold Up! There is MORE 😶**

Let's go a bit Deeper 😏. Understanding how to use Promise isn't enough. Now we try to use it in a better way.

Here is a faster version of the `getSalad()` function:

```js
const getSaladFaster = async () => {
  const mango = getVeggie("mango");
  const apple = getVeggie("apple");
  const avocado = getVeggie("avocado");
  const banana = getVeggie("banana");

  return Promise.all([mango, apple, avocado, banana]);
};
```

> Note:  
> This is only useful when these requests are not depended on each other.

The fundamental difference is that all the function calls to the `getVeggie()` function is done at once! Yep, you read it right 😋. If this was an API call over the internet, it means that you could make requests to all the resources at once, saving a lot of time.

Here is an example if each Veggie took 1s to load:

```js
const getVeggie = async (name) => {
  // Stop the Execution thread for 1s.
  await delay(1000);

  const veggies = {
    mango: "🥭",
    apple: "🍎",
    banana: "🍌",
    avocado: "🥑",
  };

  console.log("returned", name);
  return veggies[name];
};
```

The `delay(time)` funtion blocks the thread for 1000ms or 1s.  
Running the `getSalad()` and `getSaladFaster()` will result in huge time difference.

```js
getSalad().then(log); // ~4sec
getSaladFaster().then(log); // ~1sec
```

See the above code [here](../scripts/asynchronous-pro.js) and try it yourself.

```md
Lets recapitulate 📝:

➡ A Promise represents a value which is unknown now, but may become known at a later time.

➡ It can exist in one of the three states: Pending, Fullfiled or Rejected.

➡ Async/Await is just the “Syntactic Sugar” to make asynchronous code look like synchronous code.

➡ Promise is a Micro-task. Therefore, it has priority over Macro-tasks.
```

---

See Also:

> ⚫ Event Loop. 🔁 😵 [ Read ▶ ](./event-loop.md)  
> ⚫ What is the Truth? 🤥 [ Read ▶ ](./what-is-the-truth.md)  
> ⚫ Hoisting 🏴‍☠️ ? ...is this a Ship? 🤨 [ Read ▶ ](./hoisting.md)
