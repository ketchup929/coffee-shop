const coffeeMenu = [
  {
    "Category": "Cappuccino",
    "Name": "Classic Cappuccino",
    "Image": "",
    "Price": 320,
    "Description": "Perfect balance of espresso, milk and milk foam."
  },
  {
    "Category": "Cappuccino",
    "Name": "Coconut Milk Cappuccino",
    "Image": "",
    "Price": 380,
    "Description": "Lactose-free option with a light tropical aftertaste."
  },
  {
    "Category": "Cappuccino",
    "Name": "Vanilla Cappuccino",
    "Image": "",
    "Price": 350,
    "Description": "With natural vanilla syrup."
  },
  {
    "Category": "Cappuccino",
    "Name": "Chocolate Cappuccino (Mochaccino)",
    "Image": "",
    "Price": 370,
    "Description": "With dark chocolate or cocoa."
  },
  {
    "Category": "Cappuccino",
    "Name": "Cinnamon & Cardamom Cappuccino",
    "Image": "",
    "Price": 340,
    "Description": "Warming drink with spicy notes."
  },
  {
    "Category": "Cappuccino",
    "Name": "Cappuccino Freddo (Iced)",
    "Image": "",
    "Price": 360,
    "Description": "Cold version with ice and airy foam."
  },
  {
    "Category": "Latte",
    "Name": "Classic Latte",
    "Image": "",
    "Price": 350,
    "Description": "Gentle coffee with lots of frothed milk."
  },
  {
    "Category": "Latte",
    "Name": "Oat Milk Latte",
    "Image": "",
    "Price": 380,
    "Description": "Plant-based alternative with creamy texture."
  },
  {
    "Category": "Latte",
    "Name": "Caramel Latte",
    "Image": "",
    "Price": 390,
    "Description": "Sweet drink with caramel syrup and foam art."
  },
  {
    "Category": "Latte",
    "Name": "Lavender Latte",
    "Image": "",
    "Price": 370,
    "Description": "With floral lavender notes, calming and aromatic."
  },
  {
    "Category": "Latte",
    "Name": "Matcha Latte",
    "Image": "",
    "Price": 400,
    "Description": "Based on green matcha tea, caffeine-free."
  },
  {
    "Category": "Latte",
    "Name": "Salted Caramel Latte",
    "Image": "",
    "Price": 390,
    "Description": "Perfect combination of sweet caramel and sea salt."
  },
  {
    "Category": "Americano",
    "Name": "Classic Americano",
    "Image": "",
    "Price": 250,
    "Description": "Espresso with added hot water, strong and rich."
  },
  {
    "Category": "Americano",
    "Name": "Lungo",
    "Image": "",
    "Price": 260,
    "Description": "Longer espresso extraction than classic."
  },
  {
    "Category": "Americano",
    "Name": "Americano with Lemon",
    "Image": "",
    "Price": 270,
    "Description": "Refreshing option with a slice of lemon."
  },
  {
    "Category": "Americano",
    "Name": "Iced Americano",
    "Image": "",
    "Price": 280,
    "Description": "Cold, invigorating, served with ice."
  },
  {
    "Category": "Americano",
    "Name": "Americano with Tonic",
    "Image": "",
    "Price": 300,
    "Description": "Trendy option with chilled tonic water."
  },
  {
    "Category": "Americano",
    "Name": "Americano with Syrup (Maple, Hazelnut)",
    "Image": "",
    "Price": 290,
    "Description": "With light sweetness and additional flavor."
  },
  {
    "Category": "Espresso",
    "Name": "Espresso",
    "Image": "",
    "Price": 200,
    "Description": "Classic 30ml portion of strong coffee."
  },
  {
    "Category": "Espresso",
    "Name": "Doppio (Double Espresso)",
    "Image": "",
    "Price": 280,
    "Description": "Double portion for true connoisseurs."
  },
  {
    "Category": "Espresso",
    "Name": "Ristretto",
    "Image": "",
    "Price": 220,
    "Description": "More concentrated and sweeter than espresso."
  },
  {
    "Category": "Espresso",
    "Name": "Espresso Con Panna",
    "Image": "",
    "Price": 260,
    "Description": "Espresso topped with whipped cream."
  },
  {
    "Category": "Espresso",
    "Name": "Espresso Romano",
    "Image": "",
    "Price": 230,
    "Description": "With a slice or zest of lemon."
  },
  {
    "Category": "Espresso",
    "Name": "Espresso Macchiato",
    "Image": "",
    "Price": 240,
    "Description": "Espresso with a small cap of milk foam."
  },
  {
    "Category": "Flat White",
    "Name": "Classic Flat White",
    "Image": "",
    "Price": 340,
    "Description": "Double ristretto with microfoam, creamy and rich."
  },
  {
    "Category": "Flat White",
    "Name": "Almond Milk Flat White",
    "Image": "",
    "Price": 370,
    "Description": "With nutty notes and velvety texture."
  },
  {
    "Category": "Flat White",
    "Name": "Ginger-Honey Flat White",
    "Image": "",
    "Price": 380,
    "Description": "With ginger syrup and honey."
  },
  {
    "Category": "Flat White",
    "Name": "Salted Caramel Flat White",
    "Image": "",
    "Price": 380,
    "Description": "Balance of coffee bitterness, sweetness and saltiness."
  },
  {
    "Category": "Flat White",
    "Name": "Cocoa Flat White",
    "Image": "",
    "Price": 360,
    "Description": "With a sprinkle of dark cocoa on delicate foam."
  },
  {
    "Category": "Flat White",
    "Name": "Flat White Freddo (Iced)",
    "Image": "",
    "Price": 360,
    "Description": "Cold version, blended with ice until smooth."
  }
];

let cards =  document.querySelector(".cards");

coffeeMenu.forEach(coffee => {
    let type = coffee.Category;
    let name = coffee.Name;
    let image = coffee.Image;
    let price = coffee.Price;
    let description = coffee.Description;

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