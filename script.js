const coffeeMenu = {
  "Cappuccino": [
    {
      "Name": "Classic Cappuccino",
      "Image": "",
      "Price": "$3.56",
      "Description": "Perfect balance of espresso, milk and milk foam."
    },
    {
      "Name": "Coconut Milk Cappuccino",
      "Image": "",
      "Price": "$4.22",
      "Description": "Lactose-free option with a light tropical aftertaste."
    },
    {
      "Name": "Vanilla Cappuccino",
      "Image": "",
      "Price": "$3.89",
      "Description": "With natural vanilla syrup."
    },
    {
      "Name": "Chocolate Cappuccino (Mochaccino)",
      "Image": "",
      "Price": "$4.11",
      "Description": "With dark chocolate or cocoa."
    },
    {
      "Name": "Cinnamon & Cardamom Cappuccino",
      "Image": "",
      "Price": "$3.78",
      "Description": "Warming drink with spicy notes."
    },
    {
      "Name": "Cappuccino Freddo (Iced)",
      "Image": "",
      "Price": "$4.00",
      "Description": "Cold version with ice and airy foam."
    }
  ],
  "Latte": [
    {
      "Name": "Classic Latte",
      "Image": "",
      "Price": "$3.89",
      "Description": "Gentle coffee with lots of frothed milk."
    },
    {
      "Name": "Oat Milk Latte",
      "Image": "",
      "Price": "$4.22",
      "Description": "Plant-based alternative with creamy texture."
    },
    {
      "Name": "Caramel Latte",
      "Image": "",
      "Price": "$4.33",
      "Description": "Sweet drink with caramel syrup and foam art."
    },
    {
      "Name": "Lavender Latte",
      "Image": "",
      "Price": "$4.11",
      "Description": "With floral lavender notes, calming and aromatic."
    },
    {
      "Name": "Matcha Latte",
      "Image": "",
      "Price": "$4.44",
      "Description": "Based on green matcha tea, caffeine-free."
    },
    {
      "Name": "Salted Caramel Latte",
      "Image": "",
      "Price": "$4.33",
      "Description": "Perfect combination of sweet caramel and sea salt."
    }
  ],
  "Americano": [
    {
      "Name": "Classic Americano",
      "Image": "",
      "Price": "$2.78",
      "Description": "Espresso with added hot water, strong and rich."
    },
    {
      "Name": "Lungo",
      "Image": "",
      "Price": "$2.89",
      "Description": "Longer espresso extraction than classic."
    },
    {
      "Name": "Americano with Lemon",
      "Image": "",
      "Price": "$3.00",
      "Description": "Refreshing option with a slice of lemon."
    },
    {
      "Name": "Iced Americano",
      "Image": "",
      "Price": "$3.11",
      "Description": "Cold, invigorating, served with ice."
    },
    {
      "Name": "Americano with Tonic",
      "Image": "",
      "Price": "$3.33",
      "Description": "Trendy option with chilled tonic water."
    },
    {
      "Name": "Americano with Syrup (Maple, Hazelnut)",
      "Image": "",
      "Price": "$3.22",
      "Description": "With light sweetness and additional flavor."
    }
  ],
  "Espresso": [
    {
      "Name": "Espresso",
      "Image": "",
      "Price": "$2.22",
      "Description": "Classic 30ml portion of strong coffee."
    },
    {
      "Name": "Doppio (Double Espresso)",
      "Image": "",
      "Price": "$3.11",
      "Description": "Double portion for true connoisseurs."
    },
    {
      "Name": "Ristretto",
      "Image": "",
      "Price": "$2.44",
      "Description": "More concentrated and sweeter than espresso."
    },
    {
      "Name": "Espresso Con Panna",
      "Image": "",
      "Price": "$2.89",
      "Description": "Espresso topped with whipped cream."
    },
    {
      "Name": "Espresso Romano",
      "Image": "",
      "Price": "$2.56",
      "Description": "With a slice or zest of lemon."
    },
    {
      "Name": "Espresso Macchiato",
      "Image": "",
      "Price": "$2.67",
      "Description": "Espresso with a small cap of milk foam."
    }
  ],
  "Flat White": [
    {
      "Name": "Classic Flat White",
      "Image": "",
      "Price": "$3.78",
      "Description": "Double ristretto with microfoam, creamy and rich."
    },
    {
      "Name": "Almond Milk Flat White",
      "Image": "",
      "Price": "$4.11",
      "Description": "With nutty notes and velvety texture."
    },
    {
      "Name": "Ginger-Honey Flat White",
      "Image": "",
      "Price": "$4.22",
      "Description": "With ginger syrup and honey."
    },
    {
      "Name": "Salted Caramel Flat White",
      "Image": "",
      "Price": "$4.22",
      "Description": "Balance of coffee bitterness, sweetness and saltiness."
    },
    {
      "Name": "Cocoa Flat White",
      "Image": "",
      "Price": "$4.00",
      "Description": "With a sprinkle of dark cocoa on delicate foam."
    },
    {
      "Name": "Flat White Freddo (Iced)",
      "Image": "",
      "Price": "$4.00",
      "Description": "Cold version, blended with ice until smooth."
    }
  ]
};

let orders = JSON.parse(localStorage.getItem('coffeeOrders')) || [];

const saveOrdersToStorage = () => {
  localStorage.setItem('coffeeOrders', JSON.stringify(orders));
};

const parsePrice = (priceString) => {
  return parseFloat(priceString.replace('$', '').trim());
};

const formatPrice = (amount) => {
  return `$${amount.toFixed(2)}`;
};

const calculatePrice = (basePrice, size) => {
  const priceMap = {
    'short': 0.9,
    'tall': 1.0,    
    'grande': 1.15, 
    'venti': 1.3    
  };
  
  const numericPrice = parsePrice(basePrice);
  return numericPrice * (priceMap[size] || 1);
};

const calculateTotal = () => {
  let subtotal = 0;
  
  orders.forEach(order => {
    const price = parsePrice(order.price);
    subtotal += price * order.quantity;
  });
  
  const discount = subtotal * 0.1;
  const total = subtotal - discount;
  
  return { 
    subtotal: formatPrice(subtotal), 
    discount: formatPrice(discount), 
    total: formatPrice(total) 
  };
};

let cards =  document.querySelector(".cards");
const orderStatusLink = document.querySelector(".ORDER-STATUS a");
const counterElement = document.querySelector('.counter');
const statusCounterElement = document.querySelector('.statusPage .counter');

const showCards = (coffeeType = "Cappuccino") => {
  cards.innerHTML = "";
  coffeeMenu[coffeeType].forEach(item => {
    cards.innerHTML += `
      <div class="card" data-coffee='${JSON.stringify(item)}'>
        <div class="card-image"><img src="${item.Image || 'img/coffee-placeholder.png'}" alt="${item.Name}"></div>
        <div class="card-content">
          <h3>${item.Name}</h3>
          <div class="card-footer">
            <span class="price">${item.Price}</span>
            <button class="add-btn">+</button>
          </div>
        </div>
      </div>`;
  });

  document.querySelectorAll('.card').forEach(card => {
    const coffeeData = JSON.parse(card.getAttribute('data-coffee'));
    
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('add-btn')) {
        showCoffeeDetail(coffeeData);
      }
    });
    
    const addBtn = card.querySelector('.add-btn');
    addBtn.addEventListener('click', (e) => {
      e.stopPropagation(); 
      addToOrder(coffeeData);
    });
  });
};

const addToOrder = (coffee) => {
  const coffeeName = coffee.Name || coffee.name;
  const coffeePrice = coffee.Price || coffee.price;
  
  const existingOrder = orders.find(order => 
    order.name === coffeeName && order.price === coffeePrice
  );
  
  if (existingOrder) {
    existingOrder.quantity++; 
  } 
  else {
    orders.push({
      name: coffeeName,
      price: coffeePrice,
      quantity: 1,
      image: coffee.Image || coffee.image || 'img/coffee-placeholder.png',
      size: coffee.size || 'tall'
    });
  }
  
  saveOrdersToStorage();
  updateOrderCounter();

  if (!document.querySelector('.statusPage').classList.contains('hidden')) {
    displayOrdersInStatus();
  }
};

const displayOrdersInStatus = () => {
  const statusContainer = document.querySelector('.imgAndInfoStatus');
  
  if (orders.length === 0) {
    statusContainer.innerHTML = '<p>No items in order yet.</p>';
    return;
  }
  
  const { subtotal, discount, total } = calculateTotal();
  
  let html = '<h3>Your Order:</h3>';
  orders.forEach(order => {
    html += `
      <div class="order-item">
        <p>${order.name} x${order.quantity} - ${order.price}</p>
      </div>
    `;
  });
  
  html += `
    <div class="order-summary">
      <div class="price-row">
        <span>Subtotal:</span>
        <span class="price-value">${subtotal}</span>
      </div>
      <div class="price-row discount">
        <span>First Order Discount (10%):</span>
        <span class="price-value">-${discount}</span>
      </div>
      <div class="price-row total">
        <span>Total:</span>
        <span class="price-value">${total}</span>
      </div>
      <button class="submit-order-btn" id="submitOrderBtn">SUBMIT ORDER</button>
    </div>
  `;
  
  statusContainer.innerHTML = html;
  
  document.getElementById('submitOrderBtn')?.addEventListener('click', () => {
    submitOrder();
  });
};

const submitOrder = () => {
  if (orders.length === 0) {
    return;
  }
  
  orders = [];
  saveOrdersToStorage();
  updateOrderCounter();
  displayOrdersInStatus();
  
  document.querySelector('.overlay').classList.add('hidden');
  document.querySelector('.statusPage').classList.add('hidden');
};

const updateOrderCounter = () => {
  let totalItems = 0;
  for (const order of orders) {
    totalItems += order.quantity;
  }
  
  if (counterElement) {
    counterElement.innerHTML = totalItems > 0 ? 
      `<span class="order-count">${totalItems}</span>` : 
      '';
  }
  
  const ringRing = document.querySelector('.ring-ring');
  if (ringRing) {
    if (totalItems > 0) {
      ringRing.style.fill = '#CD4126';
    } else {
      ringRing.style.fill = '#483431';
    }
  }
  
  const statusCounter = document.querySelector('.statusPage .counter');
  if (statusCounter) {
    statusCounter.textContent = totalItems > 0 ? 
      `You have ${totalItems} item(s) in order` : 
      "No active order yet.";
  }
};

updateOrderCounter();

const showCoffeeDetail = (coffee) => {
  document.querySelector('.menuPage').classList.add('hidden');
  document.querySelector('.coffeeInfoPage').classList.remove('hidden');
  
  const basePrice = parsePrice(coffee.Price);
  
  const imgAndInfo = document.querySelector('.imgAndInfo');
  imgAndInfo.innerHTML = `
    <img src="${coffee.Image || 'img/coffee-placeholder.png'}" alt="${coffee.Name}">
    <div class="infoAboutCoffee">
      <p class="nameOfCoffee">${coffee.Name}</p>
      <p class="descriptionOfCoffee">${coffee.Description}</p>

      <span>SIZE</span>
      <div class="size">
        <button class="size-btn" data-size="short" data-price="${(basePrice * 0.9).toFixed(2)}">Short</button>
        <button class="size-btn" data-size="tall" data-price="${basePrice.toFixed(2)}">Tall</button>
        <button class="size-btn" data-size="grande" data-price="${(basePrice * 1.15).toFixed(2)}">Grande</button>
        <button class="size-btn" data-size="venti" data-price="${(basePrice * 1.3).toFixed(2)}">Venti</button>
      </div>

      <span>EXTRA</span>
      <div class="extra">
        <button class="extra-btn" data-extra="sugar" data-price="0.33">SUGAR (+$0.33)</button>
        <button class="extra-btn" data-extra="milk" data-price="0.44">MILK (+$0.44)</button>
      </div>

      <span>MILK TYPE</span>
      <div class="milk">
        <button class="milk-btn" data-milk="oat" data-price="0.56">OAT MILK (+$0.56)</button>
        <button class="milk-btn" data-milk="soy" data-price="0.44">SOY MILK (+$0.44)</button>
        <button class="milk-btn" data-milk="almond" data-price="0.67">ALMOND MILK (+$0.67)</button>
      </div>

      <div class="price-display">
        <p>Price: <span id="currentPrice">${basePrice.toFixed(2)}</span>$</p>
      </div>

      <button class="placeOrderBtn" id="placeOrderBtn">PLACE ORDER</button>
      <div class="view-order-status-link">
        <a href="#" id="viewOrderStatusLink">VIEW ORDER STATUS →</a>
      </div>
    </div>
  `;

  const tallBtn = imgAndInfo.querySelector('.size-btn[data-size="tall"]');
  if (tallBtn) {
    tallBtn.classList.add('active');
  }

  const updatePrice = () => {
    let price = basePrice;
    
    const selectedSize = document.querySelector('.size-btn.active');
    if (selectedSize) {
      price = parseFloat(selectedSize.getAttribute('data-price'));
    }
    
    document.querySelectorAll('.extra-btn.active').forEach(extra => {
      price += parseFloat(extra.getAttribute('data-price'));
    });
    
    const selectedMilk = document.querySelector('.milk-btn.active');
    if (selectedMilk) {
      price += parseFloat(selectedMilk.getAttribute('data-price'));
    }
    
    document.getElementById('currentPrice').textContent = price.toFixed(2);
    document.getElementById('placeOrderBtn').setAttribute('data-final-price', price.toFixed(2));
  };

  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      updatePrice();
    });
  });

  document.querySelectorAll('.extra-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
      updatePrice();
    });
  });

  document.querySelectorAll('.milk-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.milk-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      updatePrice();
    });
  });

  document.getElementById('viewOrderStatusLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    showOrderStatus();
  });

  document.getElementById('placeOrderBtn')?.addEventListener('click', () => {
    const finalPrice = parseFloat(document.getElementById('placeOrderBtn').getAttribute('data-final-price')) || basePrice;
    const selectedSize = document.querySelector('.size-btn.active')?.getAttribute('data-size') || 'tall';
    
    const orderItem = {
      name: coffee.Name,
      price: formatPrice(finalPrice),
      quantity: 1,
      image: coffee.Image || 'img/coffee-placeholder.png',
      size: selectedSize
    };
    
    addToOrder(orderItem);
    showOrderStatus();
  });

  updatePrice();
};

function showOrderStatus() {
  document.querySelector('.overlay').classList.remove('hidden');
  document.querySelector('.statusPage').classList.remove('hidden');
  
  let totalItems = 0;
  for (const order of orders) {
    totalItems += order.quantity;
  }
  const statusInfo = document.querySelector('.statusPage .counter');
  
  if (totalItems > 0) {
    statusInfo.textContent = `You have ${totalItems} item(s) in order`;
  } else {
    statusInfo.textContent = "No active order yet.";
  }

  displayOrdersInStatus();
}

document.getElementById('backToMenuFromCoffee')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.coffeeInfoPage').classList.add('hidden');
  document.querySelector('.menuPage').classList.remove('hidden');
});

document.getElementById('backToMenuFromStatus')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.overlay').classList.add('hidden');
  document.querySelector('.statusPage').classList.add('hidden');
});

document.querySelector('.overlay').addEventListener('click', () => {
  document.querySelector('.overlay').classList.add('hidden');
  document.querySelector('.statusPage').classList.add('hidden');
});

orderStatusLink?.addEventListener('click', (e) => {
  e.preventDefault();
  showOrderStatus();
});

document.querySelector('.picture')?.addEventListener('click', () => {
  showOrderStatus();
});

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

document.getElementById('hideStatusBtn')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.overlay').classList.add('hidden');
  document.querySelector('.statusPage').classList.add('hidden');
});

activateButton(0);