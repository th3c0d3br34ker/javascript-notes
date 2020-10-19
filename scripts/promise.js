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

getVeggie("mango")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
