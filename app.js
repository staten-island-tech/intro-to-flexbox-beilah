let cart = [];

const container = document.querySelector(".container");
const filterButton = document.querySelectorAll(".filterButton");

const products = [
  {
    name: "Syrian Hamster",
    price: 180,
    image: "pictures/syrian.png",
    coat: "long",
  },
  {
    name: "Campbell Dwarf Hamster",
    price: 200,
    image: "pictures/campbelldwarf.png",
    coat: "short",
  },
  {
    name: "Roborovski Dwarf Hamster",
    price: 225,
    image: "pictures/roborovskidwarf.png",
    coat: "satin",
  },
  {
    name: "Romanian Hamster",
    price: 160,
    image: "pictures/romanian.png",
    coat: "curly",
  },
  {
    name: "Russian Dwarf Hamster",
    price: 225,
    image: "pictures/russiandwarf.png",
    coat: "short",
  },
  {
    name: "Chinese Hamster",
    price: 175,
    image: "pictures/chinese.png",
    coat: "satin",
  },
  {
    name: "Chinese Striped Hamster",
    price: 180,
    image: "pictures/chinesestriped.png",
    coat: "curly",
  },
  {
    name: "Ciscaucasian Hamster",
    price: 300,
    image: "pictures/ciscaucasian.png",
    coat: "long",
  },
  {
    name: "Winter White Dwarf Hamster",
    price: 250,
    image: "pictures/winterwhitedwarf.png",
    coat: "short",
  },
];

products.forEach((product) => {
  const html = `
        <div class="card"  data-coat="${product.coat}" data-name="${product.name}" >
          <h2 class="cardHeader">${product.name}</h2>
          <img class="img" src=${product.image} alt="Syrian Hamster" />
          <h3 class="cardPrice">${product.price}</h3>
          <button class="addToCart">Add to cart</button>
        </div>
        `;
  container.innerHTML += html;
});

// make array
// find item in array, .find("name")
// push item to cart array
// show cart
// update total

document.querySelectorAll('.addToCart').forEach((button) => {
  button.addEventListener("click", (event) => {
    const item = event.target.closest(".card");
    console.log(item);
    cart.push(item);
    console.log(cart);
    document.querySelector('cartBtn')
  })
})



let all = document.querySelector("#all");
let shortHaired = document.querySelector("#short");
let longHaired = document.querySelector("#long");
let satinHaired = document.querySelector("#satin");
let curlyHaired = document.querySelector("#curly");

curlyHaired.addEventListener("click", function () {
  container.innerHTML = "";

  products.forEach((product) => {
    if (product.coat === "curly") {
      const html = `
      <div class="card" data-coat="${product.coat}" data-name='${product.name}>
        <h2 class="cardHeader">${product.name}</h2>
          <img class="img" src=${product.image} alt="Syrian Hamster" />
            <h3 class="cardPrice">${product.price}</h3>
          <button class="addToCart">Add to cart</button>
      </div>
      `;
      container.innerHTML += html;
    }
  });
});

satinHaired.addEventListener("click", function () {
  container.innerHTML = "";

  products.forEach((product) => {
    if (product.coat === "satin") {
      const html = `
      <div class="card" data-coat="${product.coat}">
        <h2 class="cardHeader">${product.name}</h2>
          <img class="img" src=${product.image} alt="Syrian Hamster" />
            <h3 class="cardPrice">${product.price}</h3>
          <button class="addToCart">Add to cart</button>
      </div>
      `;
      container.innerHTML += html;
    }
  });
});

longHaired.addEventListener("click", function () {
  container.innerHTML = "";

  products.forEach((product) => {
    if (product.coat === "long") {
      const html = `
      <div class="card" data-coat="${product.coat}">
        <h2 class="cardHeader">${product.name}</h2>
          <img class="img" src=${product.image} alt="Syrian Hamster" />
            <h3 class="cardPrice">${product.price}</h3>
          <button class="addToCart">Add to cart</button>
      </div>
      `;
      container.innerHTML += html;
    }
  });
});

shortHaired.addEventListener("click", function () {
  container.innerHTML = "";

  products.forEach((product) => {
    if (product.coat === "short") {
      const html = `
      <div class="card" data-coat="${product.coat}">
        <h2 class="cardHeader">${product.name}</h2>
          <img class="img" src=${product.image} alt="Syrian Hamster" />
            <h3 class="cardPrice">${product.price}</h3>
          <button class="addToCart">Add to cart</button>
      </div>
      `;
      container.innerHTML += html;
    }
  });
});

all.addEventListener("click", function () {
  container.innerHTML = "";

  products.forEach((product) => {
    const html = `
      <div class="card" data-coat="${product.coat}">
        <h2 class="cardHeader">${product.name}</h2>
          <img class="img" src=${product.image} alt="Syrian Hamster" />
            <h3 class="cardPrice">${product.price}</h3>
          <button class="addToCart">Add to cart</button>
      </div>
      `;
    container.innerHTML += html;
  });
});

/* function filterByCoat(coat) {
  container.innerHTML = "";
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardCategory = card.getAttribute("coat");
    if (cardCategory === coat) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
} */
// filterByCoat("short-haired");

/* filterButton.forEach((card) => {
  card.addEventListener('click' => )
}) */
