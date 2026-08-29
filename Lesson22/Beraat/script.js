/* 
1. Create an object to hold  products data (price, quantity)
2. Select interactive elements
3. Add event listeners to interactive elements (add to cart, remove, clear cart)
4. Connect necessary logical functions to the event listeners.
*/

const clearCart = document.getElementById("clear_cart");
const totalPriceSpan = document.getElementById("total_price");

const products = {
  apples: {
    price: 1,
    quantity: 0,
  },
  bananas: {
    price: 1,
    quantity: 0,
  },
  bread: {
    price: 1,
    quantity: 0,
  },
  eggs: {
    price: 1,
    quantity: 0,
  },
};

Object.keys(products).forEach(cartVisibility);
clearCartBtn();

clearCart.addEventListener("click", () => {
  for (const productKey in products) {
    products[productKey].quantity = 0;
    cartVisibility(productKey);
  }
  updateTotal();
  clearCartBtn();
});
// productName_add

const productNames = Object.keys(products);

for (const name of productNames) {
  const addToCartButtonId = name + "_add";
  const removeFromCartButtonId = name + "_remove";
  const decrementButtonId = name + "_minus";
  const incrementButtonId = name + "_plus";

  document
    .getElementById(addToCartButtonId)
    .addEventListener("click", () => addToCart(name));
  document
    .getElementById(removeFromCartButtonId)
    .addEventListener("click", () => removeFromCart(name));

  document
    .getElementById(decrementButtonId)
    .addEventListener("click", () => decrementItem(name));
  document
    .getElementById(incrementButtonId)
    .addEventListener("click", () => incrementItem(name));
}

function addToCart(productName) {
  products[productName].quantity += 1;
  cartVisibility(productName);

  if (products[productName].quantity >= 0) {
    document.getElementById(productName + "_remove").disabled =
      products[productName].quantity === 0;
  }
  const productQuantitySpan = document.getElementById(
    productName + "_quantity",
  );
  productQuantitySpan.textContent = products[productName].quantity;

  updateTotal();
  clearCartBtn();
}

function removeFromCart(productName) {
  products[productName].quantity = 0;
  cartVisibility(productName);
  updateTotal();
  clearCartBtn();
}
function incrementItem(productName) {
  addToCart(productName);
}
function decrementItem(productName) {
  if (products[productName].quantity > 0) {
    products[productName].quantity--;
    cartVisibility(productName);

    document.getElementById(productName + "_quantity").textContent =
      products[productName].quantity;

    updateTotal();
    clearCartBtn();
  }
}

function cartVisibility(productName) {
  const cartItem = document.getElementById(productName + "_cart");

  cartItem.classList.toggle("hidden", products[productName].quantity === 0);
}

function updateTotal() {
  let totalPrice = 0;
  for (const productKey in products) {
    const product = products[productKey];
    totalPrice += product.price * product.quantity;
  }
  totalPriceSpan.textContent = totalPrice;
}

function clearCartBtn() {
  let totalItems = 0;

  for (const productKey in products) {
    totalItems += products[productKey].quantity;
  }

  clearCart.disabled = totalItems === 0;
}
