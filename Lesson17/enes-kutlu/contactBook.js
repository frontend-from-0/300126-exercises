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
    name: "Allison",
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
  if (typeof contacts === "undefined") {
    console.log("Please provide a contacts array.");
    return;
  }
  if (!Array.isArray(contacts)) {
    console.log("Contacts must be an array.");
    return;
  }
  console.log("Displaying all contacts...");
  if (contacts.length == 0) {
    console.log("No contacts in the list.");
    return;
  }

  for (let i = 0; i < contacts.length; i++) {
    // TODO: add check that current contact is an object (Optional: and has required properties -> Object.keys())
    const currentContact = contacts[i];
    if (typeof currentContact === "object") {
      if (
        Object.keys(currentContact).includes("name") &&
        Object.keys(currentContact).includes("phone") &&
        Object.keys(currentContact).includes("email")
      ) {
        console.log(
          `Name: ${currentContact.name}, Phone: ${currentContact.phone}, Email: ${currentContact.email}`,
        );
      } else {
        console.log("Provided properties is not included in object.");
        return;
      }
    } else {
      console.log("Provided value is not an object.");
      return;
    }
  }

  console.log("End of contacts.");
}

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
  if (typeof name !== "string" || name.length <= 0) {
    console.log("Name must be a non-empty string.");
    return null;
  }
  if (!Array.isArray(contactList)) {
    console.log("Contact list must be an array.");
    return null;
  }

  for (let i = 0; i < contactList.length; i++) {
    if (contactList[i].name.toLowerCase().includes(name.toLowerCase())) {
      return contactList[i];
    }
  }
  return null;
}



function addContact(name, phone, email, contactList) {
  if (typeof name !== "string" || name.length <= 0) {
    console.log("Name must be a non-empty string.");
    return;
  }
  if (typeof phone !== "string" || phone.length <= 0) {
    console.log("Phone must be a non-empty string.");
    return;
  }
  if (typeof email !== "string" || email.length <= 0) {
    console.log("Email must be a non-empty string.");
    return;
  }
  if (!Array.isArray(contactList)) {
    console.log("Contact list must be an array.");
    return;
  }

  console.log(`Adding a new contact: ${name}`);
  const maybeExistingContact = findContact(name, contactList);
  if (maybeExistingContact) {
    console.warn("This guy is already here.");
    return;
  }

  const newContact = { name, phone, email }; // {name: name, phone: phone, email: email};
  contactList.push(newContact);
  console.log("Succesfully added a new contact.");
}

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
  if (typeof name !== "string" || name.length <= 0) {
    console.log("Name must be a non-empty string.");
    return;
  }
  if (!Array.isArray(contactList)) {
    console.log("Contact list must be an array.");
    return;
  }

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

/*
-----------------------------------------------------------
  STEP 5: Update a Contact
-----------------------------------------------------------
Function: updateContact(name, newPhone, newEmail)
- Finds the contact by name and updates phone + email.
- Logs "Contact updated successfully." if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/

function updateContact(name, newPhone, newEmail, contactList) {
  if (typeof name !== "string" || name.length <= 0) {
    console.log("Name must be a non-empty string.");
    return;
  }
  if (typeof newPhone !== "string" || newPhone.length <= 0) {
    console.log("Phone must be a non-empty string.");
    return;
  }
  if (typeof newEmail !== "string" || newEmail.length <= 0) {
    console.log("Email must be a non-empty string.");
    return;
  }
  if (!Array.isArray(contactList)) {
    console.log("Contact list must be an array.");
    return;
  }

  const maybeExistingContact = findContact(name, contactList);
  if (maybeExistingContact) {
    maybeExistingContact.phone = newPhone;
    maybeExistingContact.email = newEmail;
    console.log(`Contact ${name} updated successfully.`);
  } else {
    console.log("No contact found with the name:", name);
  }
}
// We could search the name as inside findContact, it would not give us 2 "not found" log. But I tried it and it made whole code so complicate.

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
function removeContact(name, contactList) {
  if (typeof name !== "string" || name.length <= 0) {
    console.log("Name must be a non-empty string.");
    return;
  }
  if (!Array.isArray(contactList)) {
    console.log("Contact list must be an array.");
    return;
  }
  const findUser = contactList.findIndex(
    (user) => user.name.toLowerCase() === name.toLowerCase(),
  );
  if (findUser !== -1) {
    contactList.splice(findUser, 1);
    console.log(contactList);
    console.log("Contact removed successfully.");
  } else {
    console.log("No contact found with the name:", name);
  }
}

/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the 
Contact Book in action.
*/
console.log("\tPart 1: Display all contacts.");
displayAllContacts(generalContacts);
console.log("\tDisplaying a different contact:");
displayAllContacts(workContacts);
// TODO: make sure that the function still works when input below is provided
console.log("\tIf we try display an empty array:");
displayAllContacts([]);
console.log("\tIf we try display an empty function argument:");
displayAllContacts();
console.log(
  "\tIf we try display an object that doesn't has wanted properties:",
);
displayAllContacts([{ street: "some street", postalCode: "12345" }]);
console.log("\tIf we try display an array without any object");
displayAllContacts(["john", "1312312", "emaail@com"]);

console.log("\n\tPart 2: Add a New Contact:");
addContact("Mary", "001236672", "vanderboom@gmail.com", generalContacts);
displayAllContacts(generalContacts);

console.log("\n\tPart 3: View a Contact by Name:");
viewContact("Mary", generalContacts);
viewContact("mary", generalContacts);



console.log("\n\tPart 5: Update a Contact:");
updateContact("Ferhat", "99999", "kkt@mail.com", generalContacts);
updateContact("mehmet", "99999", "kkt@mail.com", workContacts);

console.log("\n\tPart 6: Delete a Contact:");
removeContact("ali", generalContacts);
removeContact("mary", generalContacts);
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
   Added at line --
*/

function searchByField(value, contactList) {
  if (typeof value !== "string" || value.length <= 0) {
    console.log("Search value must be a non-empty string.");
    return;
  }
  if (!Array.isArray(contactList)) {
    console.log("Contact list must be an array.");
    return;
  }
  const results = contactList.filter(
    (contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase()) ||
      contact.phone.includes(value) ||
      contact.email.toLowerCase().includes(value.toLowerCase()),
  );
  if (results.length === 0) {
    console.log("No contact found matching:", value);
    return;
  } else {
    console.log(`Found ${results.length} contact(s) matching:`, value);
    for (let i = 0; i < results.length; i++){
      console.log(results[i]);
    }
  }
}
console.log("\n\tOptional 4 - Search by Multiple Fields:");
searchByField("kkt@mail.com", generalContacts);
searchByField("kkt@mail.com", workContacts);

function sortContacts(contactList) {
  if (!Array.isArray(contactList)) {
    console.log("Contact list must be an array.");
    return;
  }
  contactList.sort((a, b) => a.name.localeCompare(b.name));
  console.log("Contacts sorted alphabetically.");
  console.log(contactList);
}
sortContacts(generalContacts)

// I learned how to use sort and filter properties. I got some help from claude while doing last optional parts.