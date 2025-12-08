const coffeeMenu = {
  "Cappuccino": [
    {
      "Name": "Classic Cappuccino",
      "Image": "",
      "Price": "320 ₽",
      "Description": "Perfect balance of espresso, milk and milk foam."
    },
    {
      "Name": "Coconut Milk Cappuccino",
      "Image": "",
      "Price": "380 ₽",
      "Description": "Lactose-free option with a light tropical aftertaste."
    },
    {
      "Name": "Vanilla Cappuccino",
      "Image": "",
      "Price": "350 ₽",
      "Description": "With natural vanilla syrup."
    },
    {
      "Name": "Chocolate Cappuccino (Mochaccino)",
      "Image": "",
      "Price": "370 ₽",
      "Description": "With dark chocolate or cocoa."
    },
    {
      "Name": "Cinnamon & Cardamom Cappuccino",
      "Image": "",
      "Price": "340 ₽",
      "Description": "Warming drink with spicy notes."
    },
    {
      "Name": "Cappuccino Freddo (Iced)",
      "Image": "",
      "Price": "360 ₽",
      "Description": "Cold version with ice and airy foam."
    }
  ],
  "Latte": [
    {
      "Name": "Classic Latte",
      "Image": "",
      "Price": "350 ₽",
      "Description": "Gentle coffee with lots of frothed milk."
    },
    {
      "Name": "Oat Milk Latte",
      "Image": "",
      "Price": "380 ₽",
      "Description": "Plant-based alternative with creamy texture."
    },
    {
      "Name": "Caramel Latte",
      "Image": "",
      "Price": "390 ₽",
      "Description": "Sweet drink with caramel syrup and foam art."
    },
    {
      "Name": "Lavender Latte",
      "Image": "",
      "Price": "370 ₽",
      "Description": "With floral lavender notes, calming and aromatic."
    },
    {
      "Name": "Matcha Latte",
      "Image": "",
      "Price": "400 ₽",
      "Description": "Based on green matcha tea, caffeine-free."
    },
    {
      "Name": "Salted Caramel Latte",
      "Image": "",
      "Price": "390 ₽",
      "Description": "Perfect combination of sweet caramel and sea salt."
    }
  ],
  "Americano": [
    {
      "Name": "Classic Americano",
      "Image": "",
      "Price": "250 ₽",
      "Description": "Espresso with added hot water, strong and rich."
    },
    {
      "Name": "Lungo",
      "Image": "",
      "Price": "260 ₽",
      "Description": "Longer espresso extraction than classic."
    },
    {
      "Name": "Americano with Lemon",
      "Image": "",
      "Price": "270 ₽",
      "Description": "Refreshing option with a slice of lemon."
    },
    {
      "Name": "Iced Americano",
      "Image": "",
      "Price": "280 ₽",
      "Description": "Cold, invigorating, served with ice."
    },
    {
      "Name": "Americano with Tonic",
      "Image": "",
      "Price": "300 ₽",
      "Description": "Trendy option with chilled tonic water."
    },
    {
      "Name": "Americano with Syrup (Maple, Hazelnut)",
      "Image": "",
      "Price": "290 ₽",
      "Description": "With light sweetness and additional flavor."
    }
  ],
  "Espresso": [
    {
      "Name": "Espresso",
      "Image": "",
      "Price": "200 ₽",
      "Description": "Classic 30ml portion of strong coffee."
    },
    {
      "Name": "Doppio (Double Espresso)",
      "Image": "",
      "Price": "280 ₽",
      "Description": "Double portion for true connoisseurs."
    },
    {
      "Name": "Ristretto",
      "Image": "",
      "Price": "220 ₽",
      "Description": "More concentrated and sweeter than espresso."
    },
    {
      "Name": "Espresso Con Panna",
      "Image": "",
      "Price": "260 ₽",
      "Description": "Espresso topped with whipped cream."
    },
    {
      "Name": "Espresso Romano",
      "Image": "",
      "Price": "230 ₽",
      "Description": "With a slice or zest of lemon."
    },
    {
      "Name": "Espresso Macchiato",
      "Image": "",
      "Price": "240 ₽",
      "Description": "Espresso with a small cap of milk foam."
    }
  ],
  "Flat White": [
    {
      "Name": "Classic Flat White",
      "Image": "",
      "Price": "340 ₽",
      "Description": "Double ristretto with microfoam, creamy and rich."
    },
    {
      "Name": "Almond Milk Flat White",
      "Image": "",
      "Price": "370 ₽",
      "Description": "With nutty notes and velvety texture."
    },
    {
      "Name": "Ginger-Honey Flat White",
      "Image": "",
      "Price": "380 ₽",
      "Description": "With ginger syrup and honey."
    },
    {
      "Name": "Salted Caramel Flat White",
      "Image": "",
      "Price": "380 ₽",
      "Description": "Balance of coffee bitterness, sweetness and saltiness."
    },
    {
      "Name": "Cocoa Flat White",
      "Image": "",
      "Price": "360 ₽",
      "Description": "With a sprinkle of dark cocoa on delicate foam."
    },
    {
      "Name": "Flat White Freddo (Iced)",
      "Image": "",
      "Price": "360 ₽",
      "Description": "Cold version, blended with ice until smooth."
    }
  ]
};

let cards =  document.querySelector(".cards");

coffeeMenu.forEach(coffee => {
    let type = coffee;
    let name = coffee[0];
    let image = coffee[1];
    let price = coffee[2];
    let description = coffee[3];

    cards.innerHTML += `
        <div class = "card">
            <img src="${image}" alt="${name}">
            <span>${name}</span>
            <div>
                <span>${price}</span>
                <div>
                    <span>+</span>
                </div>
            </div>
        </div>`
});

const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const upButton = document.querySelector('.up');
const downButton = document.querySelector('.down');
let currentIndex = 0;

const goToSlide = (index) => {
    if (index < 0) {
      index = slideCount - 1;
    }
    else if (index >= slideCount) {
      index = 0;
    }
    currentIndex = index;
    slides.style.transform = `translateX(${-index * 100}%)`
}

downButton.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

upButton.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

goToSlide(0);