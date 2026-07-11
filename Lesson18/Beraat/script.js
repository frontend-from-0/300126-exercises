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

class ShoppingCart {
  // Private values
  #items;
  #stock;
  #discount;
  // Instantiation method - constructor
  constructor() {
    this.#items = [];
    this.#stock = [];
    this.#discount = { SAVE10: 10, SAVE15: 15, SAVE20: 20 };
  }

  // Methods
  createItem(name, price, quantity) {
    console.log("------- Adding new item to the stock. -------");
    if (!name) {
      console.log(`Provide an item name to add.`);
      return;
    }
    if (quantity <= 0) {
      console.log(`Quantity must be bigger than 0`);
      return;
    }
    if (price.amount === undefined) {
      console.log(`Provide an item price.`);
      return;
    }
    if (typeof price.amount !== "number") {
      console.log("Price amount must be a number.");
      return;
    }
    if (price.amount <= 0) {
      console.log(`Price must be bigger than 0`);
      return;
    }

    let stockItem;
    for (const item of this.#stock) {
      if (item.name.toLowerCase() === name.toLowerCase()) {
        stockItem = item;
        break;
      }
    }
    if (stockItem) {
      stockItem.quantity += quantity;
      stockItem.price.amount = price.amount;
      console.log(
        `İtem ${name} stock is updated, new quantity: ${stockItem.quantity}`,
      );
    } else {
      this.#stock.push({
        name,
        price,
        quantity,
        discount: 0,
      });
      console.log(`İtem ${name} is added to stock.`);
    }
    console.log("--------------");
  }
  viewStock() {
    console.log("------- Viewing the stock -------");
    if (this.#stock.length > 0) {
      for (const item of this.#stock) {
        console.log(
          `Current item - name: ${item.name}, price: ${item.price.amount} ${item.price.currency}, quantity: ${item.quantity}`,
        );
      }
    } else {
      console.log(`The stock is empty.`);
    }
    console.log("--------------");
  }
  viewCart() {
    console.log("------- Viewing the cart -------");
    if (this.#items.length > 0) {
      for (const item of this.#items) {
        console.log(
          `Current item - name: ${item.name}, price: ${item.price.amount} ${item.price.currency}, quantity: ${item.quantity}`,
        );
      }
    } else {
      console.log(`The cart is empty.`);
    }
    console.log("--------------");
  }

  // If you define Item class for creating items, then modify addItem to accept one parameter (object) instead of 3.
  /*addItem(name, quantity) {
    for (const item of this.#stock) {
      if (item.name !== name) {
        console.log(`Item ${name} is not on our selling list.`);
        return;
      } else if (item.name === name && item.quantity === 0) {
        console.log(`Item ${name} is out of stock.`);
        return;
      } else {
        return item;
      }
    }

    for (const item of this.#items) {
      if (item.name === name) {
        console.log(`Item ${name} quantity increased by ${quantity}`);
        item.quantity += quantity;
        return;
      }
    }
    console.log(`Adding a new item ${name} to the cart.`);
    this.#items.push({ name, price, quantity });
  }*/

  addItem(name, quantity) {
    console.log("------- Adding item to the cart -------");

    if (!name) {
      console.log(`Provide an item name to add.`);
      return;
    }
    if (quantity <= 0) {
      console.log(`Quantity must be bigger than 0`);
      return;
    }

    let stockItem;

    for (const item of this.#stock) {
      if (item.name.toLowerCase() === name.toLowerCase()) {
        stockItem = item;
        break;
      }
    }

    if (!stockItem) {
      console.log(`Item ${name} is not on our selling list.`);
      return;
    }

    if (stockItem.quantity < quantity) {
      console.log(
        `Item ${name} is out of stock. Available stock is ${stockItem.quantity}`,
      );
      return;
    }

    for (const item of this.#items) {
      if (item.name.toLowerCase() === name.toLowerCase()) {
        item.quantity += quantity;
        stockItem.quantity -= quantity;
        console.log(`Item ${name} is increased by ${quantity}.`);
        this.viewCart();
        this.getTotal();
        return;
      }
    }

    this.#items.push({
      name: stockItem.name,
      price: stockItem.price,
      quantity: quantity,
      discount: 0,
    });

    stockItem.quantity -= quantity;

    console.log(`Added ${quantity} ${name}(s) to the shopping cart.`);

    this.viewCart();
    this.getTotal();

    console.log("--------------");
  }

  removeItem(name, quantity) {
    console.log("------- Removing item from the cart -------");
    let cartItem;
    let stockItem;

    for (const item of this.#items) {
      if (item.name.toLowerCase() === name.toLowerCase()) {
        cartItem = item;
        break;
      }
    }

    if (!cartItem) {
      console.log(`Item ${name} is not found in the cart`);
      return;
    }

    for (const item of this.#stock) {
      if (item.name.toLowerCase() === name.toLowerCase()) {
        stockItem = item;
        break;
      }
    }

    if (cartItem.quantity <= quantity || quantity === undefined) {
      console.log(`All ${name}(s) removed from the cart.`);
      stockItem.quantity += cartItem.quantity;
      this.#items = this.#items.filter(
        (item) => item.name.toLowerCase() !== name.toLowerCase(),
      );
      this.viewCart();
      this.getTotal();
      return;
    }
    cartItem.quantity -= quantity;
    stockItem.quantity += quantity;

    console.log(`${quantity} ${cartItem.name} item removed.`);
    this.viewCart();
    this.getTotal();
    console.log("--------------");
  }

  getTotal() {
    let total = 0;
    let currentItem;

    if (this.#items.length === 0) {
      console.log("Total: 0.00");
      return;
    }

    for (const item of this.#items) {
      total += item.price.amount * (1 - item.discount / 100) * item.quantity;
      currentItem = item;
    }

    console.log(`Total: ${total.toFixed(2)} ${currentItem.price.currency}`);
  }
  applyDiscount(discountCode, name) {
    console.log("------- Applying discount to the item  -------");

    let discountItem;
    for (const item of this.#items) {
      if (item.name.toLowerCase() === name.toLowerCase()) {
        discountItem = item;
        break;
      }
    }

    if (!discountItem) {
      console.log(`Item ${name} is not found in the cart`);
      return;
    }
    const discountAmount = this.#discount[discountCode];

    if (discountAmount === undefined) {
      console.log(
        `${discountCode} is not an discount code. Please provide a valid discount code.`,
      );
      return;
    }
    discountItem.discount = discountAmount;
    console.log(`${discountCode} is applied to ${discountItem.name}. `);
    console.log("--------------");
    this.getTotal();
  }
}

const cart = new ShoppingCart();
cart.viewCart();

cart.createItem("laptop", { amount: 1000.5, currency: "EUR" }, 1);
cart.createItem("phone", { amount: 500, currency: "EUR" }, 2);
cart.createItem("desktop", { amount: 800, currency: "EUR" }, 5);
cart.createItem("laptop", { amount: 1000.5, currency: "EUR" }, 2);
cart.createItem("laptop", { amount: 1000.5, currency: "EUR" }, 2);

cart.viewStock();

cart.getTotal();

cart.addItem("laptop", 1);
cart.addItem("phone", 2);
cart.addItem("laptop", 2);
cart.viewCart();

cart.removeItem("apples", 1);
cart.removeItem("laptop", 1);

cart.applyDiscount("SAVE20", "laptop");
cart.applyDiscount("SAVE10", "laptop");
cart.viewStock();

//after updating the price update feature

cart.createItem("laptop", { amount: 1200, currency: "EUR" }, 2);
cart.createItem("phone", { amount: 700, currency: "EUR" }, 2);
cart.viewStock();

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
