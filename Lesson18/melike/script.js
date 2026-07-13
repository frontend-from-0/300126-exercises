/*
===========================================================
  SHOPPING CART APPLICATION
===========================================================
In this project, you'll create a simple Shopping Cart to
simulate adding items, removing items, calculating totals,
and applying discounts.

You'll practice:
1. Classes and objects
2. Encapsulation and abstraction
3. Methods (functions inside a class)
4. Arrays and basic array methods (push, filter, find)
5. Conditional statements (if-else)

Below is a step-by-step guide with comments explaining
each part. You can test each step by running the code in
Node.js or a browser console.
*/

// creating a class for items to be added to the shopping cart --MD
class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
} 

/*
-----------------------------------------------------------
  STEP 1: Create the ShoppingCart Class
-----------------------------------------------------------
1. Define a `ShoppingCart` class.
2. Add a constructor that initializes an empty private 
   array `#items` to store the cart items.
3. Add a `viewCart` method to display all items in the cart.
*/
class ShoppingCart {
  // Private values
  #items;

  // Instantiation method - constructor
  constructor() {
    this.#items = [];
  }

  // Methods
  viewCart() {
    console.log('------- Viewing the cart -------');
    if (this.#items.length > 0) {
      for (const item of this.#items) {
        console.log(
          `Current item - name: ${item.name}, price: ${item.price.amount} ${item.price.currency}, quantity ${item.quantity}`,
        );
      }
    } else {
      console.log(`The cart is empty.`);
    }
    console.log('--------------');
  }

  /*
  -----------------------------------------------------------
    STEP 2: Add Items to the Cart
  -----------------------------------------------------------
  1. Create an `addItem` method in the `ShoppingCart` class.
  2. The method should:
     - Accept `name`, `price`, and `quantity` as parameters.
     - Check if the item already exists in the cart.
       - If it exists, increase the quantity.
       - Otherwise, add the new item to the `#items` array.
  */
  // modified addItem method to accept Item object --MD
  addItem(newItem) {
    for (const item of this.#items) {
      if (item.name === newItem.name) {
        console.log(
          `Item ${newItem.name} already exists, incrementing quantity by ${newItem.quantity}`,
        );
        item.quantity += newItem.quantity;
        return;
      }
    }
    console.log(`Adding a new item ${newItem.name} to the cart.`);
    this.#items.push(newItem); 
  }

  /*
  -----------------------------------------------------------
    STEP 3: Remove Items from the Cart
  -----------------------------------------------------------
  1. Add a `removeItem` method to the `ShoppingCart` class.
  2. The method should:
     - Accept the `name` of the item to remove.
     - Remove the item from the `#items` array if it exists.
  */
  removeItem(name) {
    for (let i = 0; i < this.#items.length; i++) {
      if (this.#items[i].name === name) {
        console.log(`Found item ${name}, removing from the cart...`)
        this.#items.splice(i, 1);
        return;
      }
    }
    console.log(`Item ${name} is not found in the cart`)
  }

  /*
  -----------------------------------------------------------
    STEP 4: Calculate the Total Cost
  -----------------------------------------------------------
  1. Add a `getTotal` method to the `ShoppingCart` class.
  2. The method should:
     - Calculate and return the total cost of all items in 
       the cart.
  */
  
  getTotal() {
    let total = 0;
    
    for (const item of this.#items) {

      total += item.price.amount * item.quantity;
    }
    
    console.log(`Total cost of items in cart: ${total} EUR`);
    return total;
  }


  /*
  -----------------------------------------------------------
    STEP 5: Apply a Discount
  -----------------------------------------------------------
  1. Add an `applyDiscount` method to the `ShoppingCart` class.
  */

applyDiscount(code) {
    const discounts = {
      'SAVE10': 10, 
      'SAVE20': 20, 
      'HALFPRICE': 50 
    };
    

  /*
  2. The method should:
     - Accept a discount code (e.g., 'SAVE10', 'SAVE20').
     - Apply a percentage discount to the total cost if the 
       code is valid.
       */
       let currentTotal = this.getTotal();
       /*
  3. Use an object to store discount codes and their values.
  */
 if (discounts[code]) {
      let discountPercentage = discounts[code];
      let discountAmount = (currentTotal * discountPercentage) / 100;
      let newTotal = currentTotal - discountAmount;

      console.log(`Success! Discount code '${code}' applied. You saved ${discountAmount} EUR.`);
      console.log(`New total to pay: ${newTotal} EUR`);
      return newTotal;
    } else {
      console.log(`Error: Invalid discount code '${code}'. Total is still ${currentTotal} EUR.`);
      return currentTotal;
    }
  }
}
  

// ==========================================================
// TEST AREA
// ==========================================================

const cart = new ShoppingCart();
cart.viewCart();

// creating new objects of Item class and adding them to the cart --MD
const item1 = new Item('laptop', { amount: 1000.5, currency: 'EUR' }, 1);
const item2 = new Item('phone', { amount: 500, currency: 'EUR' }, 2);
const item3 = new Item('laptop', { amount: 1000.5, currency: 'EUR' }, 2);


console.log('TEST2 :Add Items to the Cart: ');
cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);
cart.viewCart();

// cart.items.splice(1, 2);

console.log('TEST3 :Remove Items from the Cart: ');
cart.removeItem('laptop');
cart.removeItem('apples');

cart.viewCart();

console.log('TEST4 :Calculate the Total Cost: ');
cart.getTotal();

console.log('TEST5 :Apply a Discount: ');
cart.applyDiscount('SAVE10');
cart.applyDiscount('FAKECODE');