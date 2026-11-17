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
  #discount;
  #activeDiscountRate;
  // Instantiation method - constructor
  constructor() {
    this.#items = [];
    this.#discount = {
      SAVE10: 10,
      SAVE15: 15,
      SAVE20: 20,
    };

    this.#activeDiscountRate = 0;
  }

  // Methods

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

  addItem(name, price, quantity) {
    console.log("------- Adding item -------");

    if (!name) {
      console.log("Provide an item name.");
      return;
    }

    if (!price || typeof price.amount !== "number" || price.amount <= 0) {
      console.log("Provide a valid price.");
      return;
    }

    if (quantity <= 0) {
      console.log("Quantity must be greater than 0.");
      return;
    }

    const existingItem = this.#items.find(
      (item) => item.name.toLowerCase() === name.toLowerCase(),
    );

    if (existingItem) {
      existingItem.quantity += quantity;
      console.log(`${name} quantity updated.`);
    } else {
      this.#items.push({
        name,
        price,
        quantity,
      });

      console.log(`${name} added to cart.`);
    }

    this.getTotal();
  }
  removeItem(name, quantity = Infinity) {
    console.log("------- Removing item from the cart -------");

    if (!name) {
      console.log("Provide an item name.");
      return;
    }

    const cartItem = this.#items.find(
      (item) => item.name.toLowerCase() === name.toLowerCase(),
    );

    if (!cartItem) {
      console.log(`Item "${name}" is not found in the cart.`);
      return;
    }

    if (quantity <= 0) {
      console.log("Quantity must be greater than 0.");
      return;
    }

    if (quantity >= cartItem.quantity) {
      this.#items = this.#items.filter(
        (item) => item.name.toLowerCase() !== name.toLowerCase(),
      );

      console.log(`All ${name}(s) removed from the cart.`);
    } else {
      cartItem.quantity -= quantity;

      console.log(`${quantity} ${name}(s) removed from the cart.`);
    }

    this.viewCart();
    this.getTotal();

    console.log("--------------");
  }

  getTotal() {
    let total = 0;
    let currency = "";

    if (this.#items.length === 0) {
      console.log("Total: 0.00");
      return;
    }

    for (const item of this.#items) {
      total += item.price.amount * item.quantity;
      currency = item.price.currency;
    }

    total = total * (1 - this.#activeDiscountRate / 100);

    console.log(`Total: ${total.toFixed(2)} ${currency}`);
  }
  applyDiscount(discountCode) {
    console.log("------- Applying discount -------");

    const discountAmount = this.#discount[discountCode];

    if (discountAmount === undefined) {
      console.log(`${discountCode} is not a valid discount code.`);
      return;
    }

    this.#activeDiscountRate = discountAmount;

    console.log(`${discountCode} applied to the cart.`);
    console.log("--------------");

    this.getTotal();
  }
}

const cart = new ShoppingCart();
cart.viewCart();

cart.addItem("laptop", { amount: 1000.5, currency: "EUR" }, 1);
cart.addItem("phone", { amount: 500, currency: "EUR" }, 2);
cart.addItem("desktop", { amount: 800, currency: "EUR" }, 5);
cart.addItem("laptop", { amount: 1000.5, currency: "EUR" }, 2);
cart.addItem("laptop", { amount: 1000.5, currency: "EUR" }, 2);

cart.getTotal();

cart.viewCart();

cart.removeItem("apples", 1);
cart.removeItem("laptop", 1);

cart.applyDiscount("SAVE20");
cart.applyDiscount("SAVE10");

//after updating the price update feature

cart.addItem("laptop", { amount: 1200, currency: "EUR" }, 2);
cart.addItem("phone", { amount: 700, currency: "EUR" }, 2);

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