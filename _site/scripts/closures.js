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

// Here is an another example.

function counter(x) {
  function increment(y) {
    return x + y;
  }

  return increment;
}

const incrementBy1 = counter(1);
incrementBy1(1); // 2
incrementBy1(10); // 11
