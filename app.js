const cart = [];

const container = document.querySelector(".container");
const filterButton = document.querySelectorAll(".filterButton");

const products = [
  {
    name: "Syrian Hamster",
    price: 180,
    image: "pictures/syrian.png",
  },
  {
    name: "Campbell Dwarf Hamster",
    price: 200,
    image: "pictures/campbelldwarf.png",
  },
  {
    name: "Roborovski Dwarf Hamster",
    price: 225,
    image: "pictures/roborovskidwarf.png",
  },
  { name: "Romanian Hamster", price: 160, image: "pictures/romanian.png" },
  {
    name: "Russian Dwarf Hamster",
    price: 225,
    image: "pictures/russiandwarf.png",
  },
  {
    name: "Chinese Hamster",
    price: 175,
    image: "pictures/chinese.png",
  },
  {
    name: "Chinese Striped Hamster",
    price: 180,
    image: "pictures/chinesestriped.png",
  },
  {
    name: "Ciscaucasian Hamster",
    price: 300,
    image: "pictures/ciscaucasian.png",
    coat: "long"
  },
  {
    name: "Winter White Dwarf Hamster",
    price: 250,
    image: "pictures/winterwhitedwarf.png",
    coat: "short"
  },
];

products.forEach((product) => {
  const html = `
        <div class="card">
          <h2 class="cardHeader">${product.name}</h2>
          <img class="img" src=${product.image} alt="Syrian Hamster" />
          <h3 class="cardPrice">${product.price}</h3>
          <button class="button">Add to cart</button>
        </div>
        `;
  container.innerHTML += html;
});

function getCards() {
  const buttons = document.querySelectorAll("button"); // get all buttons
  const btnArr = Array.from(buttons); // convert NodeList to Array
  btnArr.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      // console.log(event.target);
      console.log(event.target.closest(".card"));
      cart.push(event.target.closest(".card"));
      console.log(cart);
    })
  );
}
products[3];
getCards();
// make array
// find item in array, .find("name")
// push item to cart array
// show cart
// update total

let all = document.querySelector("#all");
let cartButton = document.querySelector("#icon-cart");
let shortHaired = document.querySelector("#short");

cartButton.addEventListener("click", function () {
  container.innerHTML = "";
  body.classList.toggle("showCart");
});

shortHaired.addEventListener("click", function () {
  container.innerHTML = "";
  products.forEach((product) => {
    if (coat === coat);
  })
});

all.addEventListener("click", function () {
  products.forEach((product) => {
    const html = `
        <div class="card">
          <h2 class="cardHeader">${product.name}</h2>
          <img class="img" src=${product.image} alt="Syrian Hamster" />
          <h3 class="cardPrice">${product.price}</h3>
          <button class="button">Add to cart</button>
        </div>
        `;
    container.innerHTML += html;
  });
});

function filterByCoat(coat) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardCategory = card.getAttribute("coat");
    if (cardCategory === coat) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
// filterByCoat("short-haired");

/* filterButton.forEach((card) => {
  card.addEventListener('click' => )
}) */
