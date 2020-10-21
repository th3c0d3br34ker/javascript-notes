const getVeggie = (name) => {
  const veggies = {
    mango: "🥭",
    apple: "🍎",
    banana: "🍌",
    avocado: "🥑",
  };

  console.log("returned", veggies[name]);
  return veggies[name];
};

const getSalad = async () => {
  const mango = await getVeggie("mango");
  const apple = await getVeggie("apple");
  const avocado = await getVeggie("avocado");
  const banana = await getVeggie("banana");

  return [mango, apple, avocado, banana];
};

getSalad()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
