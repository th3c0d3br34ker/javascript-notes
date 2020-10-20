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
