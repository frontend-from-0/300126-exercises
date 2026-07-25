/*
===========================================================
  SIMPLE CONTACT BOOK APPLICATION
===========================================================
In this project, you'll create a Contact Book to store and
manage basic info: name, phone, and email.

You'll practice:
1. Arrays and objects
2. Loops (for, for-of, findIndex, etc.)
3. Conditionals (if-else)
4. Basic CRUD (Create, Read, Update, Delete) functionality

Below is a step-by-step guide, with sample code and 
comments explaining what each section does. Run this file
in Node.js or in your browser's console to see the output.
*/

/*
-----------------------------------------------------------
  STEP 1: Setup and Initial Data
-----------------------------------------------------------
1. Create an array named 'contacts' with a few initial 
   sample contacts.
2. Each contact is an object with 'name', 'phone', and 
   'email' properties.
*/
const generalContacts = [
  {
    name: "Ferhat",
    phone: "0090512345678",
    email: "example@com",
  },
  {
    name: "Mehmet",
    phone: "00123345456",
    email: "example2@com",
  },
];

const workContacts = [
  {
    name: "John",
    phone: "00011111111111",
    email: "work-contact@com",
  },
];

/*
-----------------------------------------------------------
  STEP 2: Display All Contacts
-----------------------------------------------------------
Function: displayAllContacts()
- Loops over the 'contacts' array.
- Logs a descriptive string for each contact.

Example output:
  Name: Alice, Phone: 123-456-7890, Email: alice@example.com
*/

function displayAllContacts(contacts) {
  console.log("Displaying all contacts...");
  if (!Array.isArray(contacts)) {
    console.log("Error: Contacts must be an array.");
    return;
  }

  if (contacts.length === 0) {
    console.log("No contacts in the list.");
    return;
  }

  for (let i = 0; i < contacts.length; i++) {
    // TODO: add check that current contact is an object (Optional: and has required properties -> Object.keys())

    const currentContact = contacts[i];

    if (typeof currentContact !== "object" || currentContact === null) {
      console.log(`Error: Item at index ${i} is not a valid object.`);
      return;
    }
    if (Object.keys(currentContact).length === 0) {
      console.log(`Error: Contact object at index ${i} is empty.`);
      return;
    }
    const requiredKeys = ["name", "phone", "email"];
    const missingAreas = requiredKeys.filter((key) => !(key in currentContact));
    if (missingAreas.length > 0) {
      const validKeys = Object.keys(currentContact).join(", ");
      console.log(
        `Error at index ${i}: Missing required properties [${missingAreas.join(", ")}]. Received keys: [${validKeys || "None"}].`,
      );
      return;
    }
    console.log(
      `Name: ${currentContact.name}, Phone: ${currentContact.phone}, Email: ${currentContact.email}`,
    );
  }

  console.log("End of contacts.");
}
console.log("Ex.1: ");
displayAllContacts(generalContacts);
console.log("Ex.2: ");
displayAllContacts(workContacts);
console.log("Ex.3: ");
// TODO: make sure that the function still works when input below is provided
displayAllContacts([]);
console.log("Ex.4: ");
displayAllContacts();
console.log("Ex.5: ");
displayAllContacts([{ street: "some street", postalCode: "12345" }]);
console.log("Ex.6: ");
displayAllContacts(["john", "1312312", "emaail@com"]);
console.log("STEP 1 is completed ");
// displayAllContacts();
// displayAllContacts([{street:"some street", postalCode: '12345'}]);
// displayAllContacts(['john', '1312312', 'emaail@com']);

/*
-----------------------------------------------------------
  STEP 3: Add a New Contact
-----------------------------------------------------------
Function: addContact(name, phone, email)
- Creates a new contact object and pushes it into 'contacts'.
- Checks if a contact with the same name already 
  exists before adding. If found, logs a warning and returns.
- Logs "Contact added successfully." if everything is good.
*/
function findContact(name, contactList) {
  for (let i = 0; i < contactList.length; i++) {
    if (contactList[i].name.toLowerCase() === name.toLowerCase()) {
      return contactList[i];
    }
  }
  console.log("Contact is not found.");
  return null;
}

function addContact(name, phone, email, contactList) {
  console.log("Adding a new contact.");

  const maybeExistingContact = findContact(name, contactList);
  if (maybeExistingContact) {
    console.warn("This guy is already here.");
    return;
  }

  const newContact = { name, phone, email }; // {name: name, phone: phone, email: email};
  contactList.push(newContact);
  console.log("Succesfully added a new contact.");
}

addContact("Mary", "001236672", "vanderboom@gmail.com", generalContacts);
displayAllContacts(generalContacts);

/*
-----------------------------------------------------------
  STEP 4: View a Contact by Name
-----------------------------------------------------------
Function: viewContact(name)
- Loops over 'contacts' to find one matching 'name'.
- Logs the contact info if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/

function viewContact(name, contactList) {
  console.log(`Looking for the name: ${name}...`);

  const maybeExistingContact = findContact(name, contactList);

  if (maybeExistingContact) {
    console.log(
      `Name: ${maybeExistingContact.name}, Phone: ${maybeExistingContact.phone}, Email: ${maybeExistingContact.email}`,
    );
    return;
  }

  console.log(`No contact found with the name: ${name}`);
}
viewContact("Mary", generalContacts);
viewContact("mary", generalContacts);

/*
-----------------------------------------------------------
  STEP 5: Update a Contact
-----------------------------------------------------------
Function: updateContact(name, newPhone, newEmail)
- Finds the contact by name and updates phone + email.
- Logs "Contact updated successfully." if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/

/*
-----------------------------------------------------------
  STEP 6: Remove a Contact
-----------------------------------------------------------
Function: removeContact(name)
- Finds the index of the contact with 'name' using 
  findIndex() or a loop.
- Splices it from the array if found.
- Logs "Contact removed successfully." if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/

/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the 
Contact Book in action.
*/

/*
-----------------------------------------------------------
  OPTIONAL ENHANCEMENTS:
-----------------------------------------------------------
1. Partial Name Search:
   - Instead of strict ===, use .includes() for the name check.

2. Sort Contacts:
   - Add a function to sort contacts alphabetically by name.
3. Search by multiple fields:
   - e.g., find a contact by phone number or email.
*/
