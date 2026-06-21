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
  #items;
  constructor() {
    this.#items = [];
  }
  viewCart() {
    console.log(`---------Viewing the cart----------`);
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

  addItem(name, price, quantity) {
    if (typeof name !== "string" || name.trim() === "") {
      console.error(`Error: Name must be a valid, non-empty string.`);
      return;
    }
    if (
      typeof price !== "object" ||
      price == null ||
      typeof price.amount !== "number" ||
      typeof price.currency !== "string" ||
      price.currency.trim() === ""
    ) {
      console.error(
        `Error: Price must be an object containing a valid 'amount' (number) and 'currency' (string).`,
      );
      return;
    }
    if (
      typeof quantity !== "number" ||
      quantity <= 0 ||
      !Number.isInteger(quantity)
    ) {
      console.error(
        `Error: Quantity must be a positive integer greater than 0.`,
      );
      return;
    }
    for (const item of this.#items) {
      if (item.name.toLowerCase() === name.toLowerCase()) {
        console.log(
          `Item ${name} already exists, incrementing quantity by ${quantity}`,
        );
        item.quantity += quantity;
        return;
      }
    }
    console.log(`Adding a new item ${name} to the cart.`);
    this.#items.push({ name, price, quantity });
  }
  removeItem(name) {
    if (typeof name !== "string" || name.trim() === "") {
      console.error(`Error: Name must be a valid, non-empty string.`);
      return;
    }
    for (let i = 0; i < this.#items.length; i++) {
      if (this.#items[i].name.toLowerCase() === name.toLowerCase()) {
        console.log(`Found item ${name}, removing from the cart...`);
        this.#items.splice(i, 1);
        return;
      }
    }
    console.log(`Item ${name} is not found in the cart`);
  }
  getTotal() {
    console.log(`total fee is calculated`)
    let totalCost = 0;
    for (const item of this.#items) {
      if (item.price && typeof item.price.amount === "number") {
        totalCost += item.price.amount * item.quantity;
      }
    }
    console.log(`Total price: ${totalCost} TRY`);
    return totalCost;
  }

  applyDiscount(code) {
    console.log(`Method triggered with code: "${code}"`);
    const newTotalCost = this.getTotal();
    let currentTotal = newTotalCost;
    const discountCode = "SAVE20";
    if (code === discountCode) {
      currentTotal = newTotalCost * 0.8;
      console.log(`Congratulations! You've earned a 20% discount.`)
    } else {
      console.log(`Invalid or no discount code applied.`);
    }
    console.log(`Total price after discount: ${currentTotal} TRY`);
     return currentTotal;
  }
}

const cart = new ShoppingCart();
cart.viewCart();

cart.addItem(`Laptop`, { amount: 25000, currency: `TRY` }, 1);
cart.addItem(`Phone`, { amount: 20000, currency: `TRY` }, 2);
cart.addItem(`Tablet`, { amount: 35000, currency: `TRY` }, 1);
cart.addItem(123, { amount: 25000, currency: `EUR` }, 1);
cart.addItem(`Watch`, { amount: `Fifty`, currency: `TRY` }, 1);
cart.addItem(`Tablet`, { amount: 35000, currency: `TRY` }, -1);
cart.viewCart();
cart.removeItem("tablet");
cart.removeItem("apples");
cart.viewCart();
cart.getTotal();
cart.applyDiscount("SAVE20");
cart.applyDiscount("SAVE10");


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
