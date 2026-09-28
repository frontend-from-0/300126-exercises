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

/*
-----------------------------------------------------------
  STEP 1: Create the ShoppingCart Class
-----------------------------------------------------------
1. Define a `ShoppingCart` class.
2. Add a constructor that initializes an empty private 
   array `#items` to store the cart items.
3. Add a `viewCart` method to display all items in the cart.
*/
class Item {
  constructor(id, name, price, quantity) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a non-empty string.");
    }
    if (typeof price !== "object") {
      throw new TypeError("Price must be a object.");
    }
    if (typeof id !== "number" || id >= 99999 || id <= 10000) {
      throw new TypeError("ID must be a unique 5-digit number.");
    }
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
class ShoppingCart {
  // Private values
  #items;

  // Instantiation method - constructor
  constructor() {
    this.#items = [];
  }

  // Methods
  viewCart() {
    console.log("------- Viewing the cart -------");
    if (this.#items.length > 0) {
      for (const item of this.#items) {
        console.log(
          `Current item - name: ${item.name}, price: ${item.price.amount} ${item.price.currency}, quantity ${item.quantity}`,
        );
      }
    } else {
      console.log(`The cart is empty.`);
    }
    console.log("--------------");
  }

  // If you define Item class for creating items, then modify addItem to accept one parameter (object) instead of 3.
  addItem(newItem) {
    for (const item of this.#items) {
      if (item.id === newItem.id) {
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
  removeItem(name) {
    for (let i = 0; i < this.#items.length; i++) {
      if (this.#items[i].name === name) {
        console.log(`Found item ${name}, removing from the cart...`);
        this.#items.splice(i, 1);
        return;
      }
    }
    console.log(`Item ${name} is not found in the cart`);
  }
  getTotal() {
    let totalSum = 0;
    for (const item of this.#items) {
      totalSum += item.quantity * item.price.amount;
    }
    console.log(`Total: ${totalSum}`);

    return totalSum;
  }
  applyDiscount(code) {
    const upperCodes = code.toUpperCase();
    const discountCodes = {
      SAVE10: 10,
      SAVE20: 20,
    };
    let discountRate = 0;
    for (const key in discountCodes) {
      if (upperCodes === key) discountRate = discountCodes[key];
    }

    if (discountRate > 0) {
      const currentTotal = this.getTotal();
      const discountAmount = (currentTotal * discountRate) / 100;
      const finalTotal = currentTotal - discountAmount;
      console.log(
        `%${discountRate} indirim uygulandı! Yeni toplam: ${finalTotal}`,
      );
      return finalTotal;
    } else {
      console.log(`Geçersiz indirim kodu: ${code}`);
      return this.getTotal();
    }
  }
}

const cart = new ShoppingCart();
cart.viewCart();

cart.addItem(new Item(12345, "laptop", { amount: 1000.5, currency: "EUR" }, 1));
cart.addItem(new Item(12567, "phone", { amount: 500, currency: "EUR" }, 2));
cart.addItem(new Item(23641, "laptop", { amount: 800, currency: "EUR" }, 1));
cart.addItem(new Item(12345, "laptop", { amount: 1000.5, currency: "EUR" }, 2));
cart.viewCart();
cart.getTotal();
cart.removeItem("laptop");
cart.removeItem("apples");
cart.getTotal();
cart.viewCart();
cart.applyDiscount("SAVE10");
cart.applyDiscount("SAVE30");

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

/*
-----------------------------------------------------------
  STEP 3: Remove Items from the Cart
-----------------------------------------------------------
1. Add a `removeItem` method to the `ShoppingCart` class.
2. The method should:
   - Accept the `name` of the item to remove.
   - Remove the item from the `#items` array if it exists.
*/

/*
-----------------------------------------------------------
  STEP 4: Calculate the Total Cost
-----------------------------------------------------------
1. Add a `getTotal` method to the `ShoppingCart` class.
2. The method should:
   - Calculate and return the total cost of all items in 
     the cart.
*/

/*
-----------------------------------------------------------
  STEP 5: Apply a Discount
-----------------------------------------------------------
1. Add an `applyDiscount` method to the `ShoppingCart` class.
2. The method should:
   - Accept a discount code (e.g., 'SAVE10', 'SAVE20').
   - Apply a percentage discount to the total cost if the 
     code is valid.
3. Use an object to store discount codes and their values.
*/
