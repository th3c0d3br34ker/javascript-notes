const first = () => console.log("First");
const second = () => setTimeout(() => console.log("Second"), 0);
const third = () => console.log("Third");

first();
second();
third();
