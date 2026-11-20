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
//Local Storage
const savedProducts = JSON.parse(localStorage.getItem("products")) || products;
for (const productName in products) {
  const savedQuantity = savedProducts[productName]?.quantity;
  if (Number.isSafeInteger(savedQuantity) && savedQuantity >= 0) {
    products[productName].quantity = savedQuantity;
    const updateQuantity = document.getElementById(productName + "_quantity");
    updateQuantity.textContent = savedQuantity;
  }
}
updateTotal();
const productNames = Object.keys(products);

for (const productName in products) {
  document.getElementById(productName + "_remove").disabled =
    products[productName].quantity === 0;
}

clearCart.addEventListener("click", clearToCart);

// productName_add

function clearToCart() {
  for (const name of productNames) {
    products[name].quantity = 0;
    const clearCartQuantityId = name + "_quantity";
    document.getElementById(clearCartQuantityId).textContent = 0;
    document.getElementById(name + "_remove").disabled = true;
  }
  localStorage.setItem("products", JSON.stringify(products));
  updateTotal();
}

for (const name of productNames) {
  const addToCartButtonId = name + "_add";
  const removeFromCartButtonId = name + "_remove";

  document
    .getElementById(addToCartButtonId)
    .addEventListener("click", () => addToCart(name));
  document
    .getElementById(removeFromCartButtonId)
    .addEventListener("click", () => removeFromCart(name));
}

function addToCart(productName) {
  products[productName].quantity += 1;
  localStorage.setItem("products", JSON.stringify(products));

  if (products[productName].quantity > 0) {
    document
      .getElementById(productName + "_remove")
      .removeAttribute("disabled");
  }
  const productQuantitySpan = document.getElementById(
    productName + "_quantity",
  );
  productQuantitySpan.textContent = products[productName].quantity;
  updateTotal();

  // Add if statement to enable the removeFromCart button again
}

function removeFromCart(productName) {
  if (products[productName].quantity >= 1) {
    products[productName].quantity -= 1;
    localStorage.setItem("products", JSON.stringify(products));
    const productQuantitySpan = document.getElementById(
      productName + "_quantity",
    );
    productQuantitySpan.textContent = products[productName].quantity;
    updateTotal();
  }
  if (products[productName].quantity === 0) {
    document
      .getElementById(productName + "_remove")
      .setAttribute("disabled", true);
  }
}

function updateTotal() {
  let totalPrice = 0;
  for (const productKey in products) {
    const product = products[productKey];
    totalPrice += product.price * product.quantity;
  }
  totalPriceSpan.textContent = totalPrice;
}
