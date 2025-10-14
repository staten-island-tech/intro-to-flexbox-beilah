let cart = [];

const container = document.querySelector('.container');
const filterButton = document.querySelectorAll('.filterButton');

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
  { name: "Romanian Hamster", 
    price: 160, 
    image: "pictures/romanian.png" },
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
  },

  {
    name: "Winter White Dwarf Hamster",
    price: 250,
    image: "pictures/winterwhitedwarf.png",
  }, 
];

products.forEach(product => {
    const html = `
        <div class="card">
          <h2 class="cardHeader">${product.name}</h2>
          <img class="img" src=${product.image} alt="Syrian Hamster" />
          <h3 class="cardPrice">${product.price}</h3>
          <button class="button">Add to cart</button>
        </div>
        `;
    container.innerHTML += html;
})

function getCards() {
  const buttons = document.querySelectorAll("button");
    const btnArr = Array.from(buttons);
    btnArr.addEventListener("click", function (event) {

      console.log(
        event.target.closest(",display.card").getAttribute("data-id"),
        event.target.textContent
      );
    } )
}
getCards();