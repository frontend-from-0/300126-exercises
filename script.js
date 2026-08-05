const products = {
  apples: {
    price: 1.49,
    quantity: 0,
  },
  bananas: {
    price: 1.09,
    quantity: 0,
  },
  breads: {
    price: 0.75,
    quantity: 0,
  },
  eggs: {
    price: 1.19,
    quantity: 0,
  },
};

const clearCart = document.getElementById("clear_cart");
const totalPriceSpan = document.getElementById("total_price");
const productNames = Object.keys(products);



function saveTotalStorage(){
  localStorage.setItem("freshMartCart", JSON.stringify(products))
}

function loadFromLocalStorage(){
  const savedCart = localStorage.getItem("freshMartCart")

  if(savedCart){
    const parsedCart = JSON.parse(savedCart);

    for (const name of productNames){
      if(parsedCart[name]){
        products[name].quantity = parsedCart[name].quantity;

        const quantitySpan = document.getElementById(name +"_quantity");
        if(quantitySpan){
          quantitySpan.textContent = products[name].quantity ;
        }

        const removeBtn = document.getElementById(name + "_remove");
        if(removeBtn){
          if(products[name].quantity >0){
            removeBtn.removeAttribute("disabled");
          } else {
            removeBtn.setAttribute("disabled", "true")
          }
        }
      }
    }
  }
  updateTotal();
}


for (const name of productNames) {
  const addToCardButtonById = name + "_add";
  const removeFromCardButtonById = name + "_remove";

  document
    .getElementById(addToCardButtonById)
    .addEventListener("click", () => addToCart(name));
  document
    .getElementById(removeFromCardButtonById)
    .addEventListener("click", () => removeFromCart(name));

}

function addToCart(productName) {
  products[productName].quantity += 1;
  if (products[productName].quantity > 0) {
    document
      .getElementById(productName + "_remove")
      .removeAttribute("disabled");
  }
  document.getElementById(productName + `_quantity`).textContent =
    products[productName].quantity;

  const totalPrice = document.getElementById("total_price");
  updateTotal();
  saveTotalStorage();
}

function removeFromCart(productName) {
  if (products[productName].quantity >= 1) {
    products[productName].quantity -= 1;
    document.getElementById(productName + "_quantity").textContent =
      products[productName].quantity;
  } else {
    document
      .getElementById(productName + "_remove")
      .setAttribute("disabled", "true");
  }
  updateTotal();
  saveTotalStorage();
}

function updateTotal() {
  let totalPrice = 0;

  for (const productKey in products) {
    const product = products[productKey];
    totalPrice += product.price * product.quantity;
  }

  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

clearCart.addEventListener("click", () => {
  totalPriceSpan.textContent = 0.00;
  for (const name of productNames) {
    products[name].quantity = 0;
    document.getElementById(name + "_quantity").textContent = 0;
    document
      .getElementById(name + "_remove")
      .setAttribute("disabled", "true");
  }
  localStorage.removeItem("freshMartCart");
});

loadFromLocalStorage();