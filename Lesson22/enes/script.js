/* 
1. Create an object to hold  products data (price, quantity)
2. Select interactive elements
3. Add event listeners to interactive elements (add to cart, remove, clear cart)
4. Connect necessary logical functions to the event listeners.
*/

const clearCart = document.getElementById('clear_cart');
const totalPriceSpan = document.getElementById('total_price');

const products = {
  apples: {
    price: 3,
    quantity: 0,
  },
  bananas: {
    price: 7,
    quantity: 0,
  },
  bread: {
    price: 2,
    quantity: 0,
  },
  eggs: {
    price: 5,
    quantity: 0,
  },
};
clearCart.addEventListener('click', () => clearAllItems());

const productNames = Object.keys(products);

for (const name of productNames) {
  const addToCartButtonId = name + '_add';
  const addToCartQuantityBtn = name + '_add_quantity';
  const removeFromCartButtonId = name + '_remove';
  const removeFromCartQuantityBtn = name + '_remove_quantity';
  document
    .getElementById(addToCartButtonId)
    .addEventListener('click', () => addToCart(name));
  document
    .getElementById(removeFromCartButtonId)
    .addEventListener('click', () => removeFromCart(name));
  document
    .getElementById(addToCartQuantityBtn)
    .addEventListener('click', () => addToCart(name));
  document
    .getElementById(removeFromCartQuantityBtn)
    .addEventListener('click', () => removeFromCart(name));
}

function addToCart(productName) {
  products[productName].quantity += 1;
  if (products[productName].quantity >= 0) {
    document
      .getElementById(productName + '_remove')
      .removeAttribute('disabled');
  }
  const productQuantitySpan = document.getElementById(
    productName + '_quantity',
  );
  productQuantitySpan.textContent = products[productName].quantity;

  updateTotal();
  saveCart();

  // Add if statement to enable the removeFromCart button again
}

function removeFromCart(productName) {
  products[productName].quantity = 0;
  document.getElementById(productName + "_quantity").textContent = 0;
  updateCartUI(productName);
  updateTotal();
  saveCart();
}

function updateTotal() {
  let totalPrice = 0;
  for (const productKey in products) {
    const product = products[productKey];
    totalPrice += product.price * product.quantity;
  }
  totalPriceSpan.textContent = totalPrice;
}

function clearAllItems(){
for (const items in products){
  products[items].quantity = 0;
  const productQuantitySpan = document.getElementById(
      items + '_quantity',
    );
    productQuantitySpan.textContent = products[items].quantity;
  }
  updateTotal();
  saveCart();
}



//
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(products));
}

const savedCart = localStorage.getItem('cart');
if (savedCart) {
  const parsedCart = JSON.parse(savedCart);
  for (const name of Object.keys(products)) {
    if (parsedCart[name]) {
      products[name].quantity = parsedCart[name].quantity;
      document.getElementById(name + '_quantity').textContent = products[name].quantity;
      updateTotal();
    }
  }
}