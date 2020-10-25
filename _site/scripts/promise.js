const getFruit = (name) => {
  const fruits = {
    mango: "🥭",
    apple: "🍎",
    banana: "🍌",
    avocado: "🥑",
  };

  let flag = fruits[name];

  return new Promise((resolve, reject) => {
    if (flag) {
      resolve("Yay there is Fruit! 😄");
    } else {
      reject("Sorry there's no Fruit 😔");
    }
  });
};

getFruit("mango")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
