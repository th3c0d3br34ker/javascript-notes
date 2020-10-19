console.log(n); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage
var n; // Declaration
n = 5; // Initialization

fun(); // works.

function fun() {
  console.log("I work! ✨");
}
