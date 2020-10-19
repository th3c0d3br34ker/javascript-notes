const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

let time = Date.now();
const log = () => console.log(`Elapsed: ${(Date.now() - time) / 1000}s`);

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

const getSalad = async () => {
  const mango = await getVeggie("mango");
  const apple = await getVeggie("apple");
  const avocado = await getVeggie("avocado");
  const banana = await getVeggie("banana");

  return [mango, apple, avocado, banana];
};

// getSalad().then((response) => console.log(response));

const getSaladFaster = async () => {
  const mango = getVeggie("mango");
  const apple = getVeggie("apple");
  const avocado = getVeggie("avocado");
  const banana = getVeggie("banana");

  return Promise.all([mango, apple, avocado, banana]);
};

// getSaladFaster().then((response) => console.log(response));

// Note the time difference in execution between these two functions
// Run them one by one
getSalad().then(log); // ~4sec
getSaladFaster().then(log); // ~1sec
