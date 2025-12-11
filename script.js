const coffeeMenu = {
  "Cappuccino": [
    {
      "Name": "Classic Cappuccino",
      "Image": "",
      "Price": "320₽",
      "Description": "Perfect balance of espresso, milk and milk foam."
    },
    {
      "Name": "Coconut Milk Cappuccino",
      "Image": "",
      "Price": "380₽",
      "Description": "Lactose-free option with a light tropical aftertaste."
    },
    {
      "Name": "Vanilla Cappuccino",
      "Image": "",
      "Price": "350₽",
      "Description": "With natural vanilla syrup."
    },
    {
      "Name": "Chocolate Cappuccino (Mochaccino)",
      "Image": "",
      "Price": "370₽",
      "Description": "With dark chocolate or cocoa."
    },
    {
      "Name": "Cinnamon & Cardamom Cappuccino",
      "Image": "",
      "Price": "340₽",
      "Description": "Warming drink with spicy notes."
    },
    {
      "Name": "Cappuccino Freddo (Iced)",
      "Image": "",
      "Price": "360₽",
      "Description": "Cold version with ice and airy foam."
    }
  ],
  "Latte": [
    {
      "Name": "Classic Latte",
      "Image": "",
      "Price": "350₽",
      "Description": "Gentle coffee with lots of frothed milk."
    },
    {
      "Name": "Oat Milk Latte",
      "Image": "",
      "Price": "380₽",
      "Description": "Plant-based alternative with creamy texture."
    },
    {
      "Name": "Caramel Latte",
      "Image": "",
      "Price": "390₽",
      "Description": "Sweet drink with caramel syrup and foam art."
    },
    {
      "Name": "Lavender Latte",
      "Image": "",
      "Price": "370₽",
      "Description": "With floral lavender notes, calming and aromatic."
    },
    {
      "Name": "Matcha Latte",
      "Image": "",
      "Price": "400₽",
      "Description": "Based on green matcha tea, caffeine-free."
    },
    {
      "Name": "Salted Caramel Latte",
      "Image": "",
      "Price": "390₽",
      "Description": "Perfect combination of sweet caramel and sea salt."
    }
  ],
  "Americano": [
    {
      "Name": "Classic Americano",
      "Image": "",
      "Price": "250₽",
      "Description": "Espresso with added hot water, strong and rich."
    },
    {
      "Name": "Lungo",
      "Image": "",
      "Price": "260₽",
      "Description": "Longer espresso extraction than classic."
    },
    {
      "Name": "Americano with Lemon",
      "Image": "",
      "Price": "270₽",
      "Description": "Refreshing option with a slice of lemon."
    },
    {
      "Name": "Iced Americano",
      "Image": "",
      "Price": "280₽",
      "Description": "Cold, invigorating, served with ice."
    },
    {
      "Name": "Americano with Tonic",
      "Image": "",
      "Price": "300₽",
      "Description": "Trendy option with chilled tonic water."
    },
    {
      "Name": "Americano with Syrup (Maple, Hazelnut)",
      "Image": "",
      "Price": "290₽",
      "Description": "With light sweetness and additional flavor."
    }
  ],
  "Espresso": [
    {
      "Name": "Espresso",
      "Image": "",
      "Price": "200₽",
      "Description": "Classic 30ml portion of strong coffee."
    },
    {
      "Name": "Doppio (Double Espresso)",
      "Image": "",
      "Price": "280₽",
      "Description": "Double portion for true connoisseurs."
    },
    {
      "Name": "Ristretto",
      "Image": "",
      "Price": "220₽",
      "Description": "More concentrated and sweeter than espresso."
    },
    {
      "Name": "Espresso Con Panna",
      "Image": "",
      "Price": "260₽",
      "Description": "Espresso topped with whipped cream."
    },
    {
      "Name": "Espresso Romano",
      "Image": "",
      "Price": "230₽",
      "Description": "With a slice or zest of lemon."
    },
    {
      "Name": "Espresso Macchiato",
      "Image": "",
      "Price": "240₽",
      "Description": "Espresso with a small cap of milk foam."
    }
  ],
  "Flat White": [
    {
      "Name": "Classic Flat White",
      "Image": "",
      "Price": "340₽",
      "Description": "Double ristretto with microfoam, creamy and rich."
    },
    {
      "Name": "Almond Milk Flat White",
      "Image": "",
      "Price": "370₽",
      "Description": "With nutty notes and velvety texture."
    },
    {
      "Name": "Ginger-Honey Flat White",
      "Image": "",
      "Price": "380₽",
      "Description": "With ginger syrup and honey."
    },
    {
      "Name": "Salted Caramel Flat White",
      "Image": "",
      "Price": "380₽",
      "Description": "Balance of coffee bitterness, sweetness and saltiness."
    },
    {
      "Name": "Cocoa Flat White",
      "Image": "",
      "Price": "360₽",
      "Description": "With a sprinkle of dark cocoa on delicate foam."
    },
    {
      "Name": "Flat White Freddo (Iced)",
      "Image": "",
      "Price": "360₽",
      "Description": "Cold version, blended with ice until smooth."
    }
  ]
};

let cards =  document.querySelector(".cards");
const showCards = (coffeeType = "Cappuccino") => {
  cards.innerHTML = "";
  coffeeMenu[coffeeType].forEach(item => {
    cards.innerHTML += `
      <div class="card">
        <div class="card-image"><img src="${item.Image}" alt="${item.Name}"></img></div>
        <div class="card-content">
          <h3>${item.Name}</h3>
          <div class="card-footer">
            <span class="price">${item.Price}</span>
            <button class="add-btn">+</button>
          </div>
        </div>
      </div>`
  });
};

const slideButtons = document.querySelectorAll('.slide button');
const upButton = document.querySelector('.up');
const downButton = document.querySelector('.down');
let currentActiveIndex = 0;

const activateButton = (index) => {
  slideButtons.forEach(b => b.classList.remove('active'));
  
  slideButtons[index].classList.add('active');
  
  const coffeeType = slideButtons[index].textContent;
  showCards(coffeeType);
  
  currentActiveIndex = index;
};

slideButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    activateButton(index);
  });
});

upButton.addEventListener('click', () => {
  let newIndex = currentActiveIndex - 1;
  if (newIndex < 0) newIndex = slideButtons.length - 1;
  activateButton(newIndex);
});

downButton.addEventListener('click', () => {
  let newIndex = currentActiveIndex + 1;
  if (newIndex >= slideButtons.length) newIndex = 0; 
  activateButton(newIndex);
});

activateButton(0);