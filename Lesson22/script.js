/* 
1. Create an object to hold products data (price, quantity)
2. Select interactive elements
3. Add event listeners to interactive elements (add to cart, remove, clear cart)
4. Connect necessary logical functions to the event listeners.
*/

const clearCart = document.getElementById('clear_cart');
const totalPriceSpan = document.getElementById('total_price');

let products = {
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

// Sayfa yüklendiğinde localStorage'dan verileri çek
const savedCart = localStorage.getItem('shoppingCart');
if (savedCart) {
  products = JSON.parse(savedCart);
}

// LocalStorage'a kaydetmek için yardımcı fonksiyon
function saveToLocalStorage() {
  localStorage.setItem('shoppingCart', JSON.stringify(products));
}

const productNames = Object.keys(products);

// Sayfa yüklendiğinde arayüzü güncelle
for (const name of productNames) {
  const addToCartButtonId = name + '_add';
  const removeFromCartButtonId = name + '_remove';

  document
    .getElementById(addToCartButtonId)
    .addEventListener('click', () => addToCart(name));
  document
    .getElementById(removeFromCartButtonId)
    .addEventListener('click', () => removeFromCart(name));

  // Kayıtlı miktarları ekrana yansıt
  document.getElementById(name + '_quantity').textContent = products[name].quantity;
  
  // Eğer başlangıçta miktar 0 ise remove butonunu devre dışı bırak
  if (products[name].quantity === 0) {
    document.getElementById(removeFromCartButtonId).setAttribute('disabled', 'true');
  } else {
    document.getElementById(removeFromCartButtonId).removeAttribute('disabled');
  }
}

// Başlangıç fiyatını hesapla
updateTotal();

function addToCart(productName) {
  products[productName].quantity += 1;

  // Miktar arttığı için remove butonunu aktif yap
  document
    .getElementById(productName + '_remove')
    .removeAttribute('disabled');
  
  const productQuantitySpan = document.getElementById(productName + '_quantity');
  productQuantitySpan.textContent = products[productName].quantity;

  updateTotal();
  saveToLocalStorage(); // Değişikliği kaydet
}

function removeFromCart(productName) {
  if (products[productName].quantity > 0) {
    products[productName].quantity -= 1;
    
    const productQuantitySpan = document.getElementById(productName + '_quantity');
    productQuantitySpan.textContent = products[productName].quantity;
    
    updateTotal();
    saveToLocalStorage(); // Değişikliği kaydet
  } 
  
  // Ürün miktarı 0'a düşerse remove butonunu tekrar devre dışı bırak
  if (products[productName].quantity === 0) {
    document
      .getElementById(productName + '_remove')
      .setAttribute('disabled', 'true');
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

// Sepeti temizle düğmesi işlevselliği
clearCart.addEventListener('click', () => {
  for (const name in products) {
    products[name].quantity = 0; // Miktarları sıfırla
    document.getElementById(name + '_quantity').textContent = 0; // Ekranda sıfırla
    document.getElementById(name + '_remove').setAttribute('disabled', 'true'); // Tüm remove butonlarını kilitle
  }
  
  updateTotal(); // Fiyatı sıfırla
  saveToLocalStorage(); // Sıfırlanmış hali kaydet
});