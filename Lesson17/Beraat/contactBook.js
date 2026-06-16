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

//try to create a global variable that contains all the lists and update all the functions to work accordingly
const generalContacts = [
  {
    name: undefined,
    phone: "0090512345678",
    email: "example@com",
  },
  {
    name: "Mehmet",
    phone: "00123345456",
    email: "example2@com",
  },
  {
    name: "Ayşe",
    phone: "",
    email: "example2@com",
  },
  {
    name: "Fatma",
    phone: "00123345456",
    email: "",
  },
];

const workContacts = [
  {
    name: "John",
    phone: "00011111111111",
    email: "work-contact@com",
  },
];

const friendContacts = [];

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
  console.log("\nStep 2:");
  console.log("Displaying all contacts...");

  if (!Array.isArray(contacts) || contacts.length == 0) {
    console.log("No contacts in the list.");
    return;
  }

  for (let i = 0; i < contacts.length; i++) {
    const currentContact = contacts[i];
    if (typeof currentContact !== "object" || currentContact === null) {
      console.log(`Invalid contact at item ${i + 1}: not an object`);
    }
    if (!contacts[i].name) {
      console.log(`Contact at item ${i + 1} is missing "name"`);
    }

    if (!contacts[i].email) {
      console.log(`Contact ${contacts[i].name} is missing "email"`);
    }

    if (!contacts[i].phone) {
      console.log(`Contact ${contacts[i].name} is missing "phone"`);
    }

    // TODO: add check that current contact is an object (Optional: and has required properties -> Object.keys())

    console.log(
      `Name: ${currentContact.name}, Phone: ${currentContact.phone}, Email: ${currentContact.email}\n`,
    );
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

function findContact(key, contactList) {
  if (!key || typeof key !== "string") {
    return null;
  }

  const allKey = key.toLowerCase();

  for (let i = 0; i < contactList.length; i++) {
    const contact = contactList[i];

    if (!contact || typeof contact !== "object") continue;

    if (
      (contact.name && contact.name.toLowerCase().includes(allKey)) ||
      (contact.phone && contact.phone.includes(key)) ||
      (contact.email && contact.email.toLowerCase().includes(allKey))
    ) {
      return contact;
    }
  }

  return null;
}

function addContact({name, phone, email, contactList}) {
  console.log(`\nStep 3:`);
  console.log(`Adding a new contact ${name}`);

  /*if(!name || !phone || !email || !contactList) {//or we can use displayAllContacts() check conditions
    console.log(`Missing property. Please check again`);
  };*/ //we should use displayAllContacts() check conditions
  //better we create a "check" function at the beginning
  //but they are not same one checks for the item one checks for the provided values

  if (!name) {
    console.log(`Missing "name"`);
    return;
  }

  if (!email) {
    console.log(`Missing "email"`);
    return;
  }

  if (!phone) {
    console.log(`Missing "phone"`);
    return;
  }
  if (!contactList) {
    console.log(`Missing which list to add`);
    return;
  }

  const maybeExistingContact = findContact(name, contactList);
  if (maybeExistingContact) {
    console.warn("This guy is already here.");
    return;
  }

  const newContact = { name, phone, email }; // {name: name, phone: phone, email: email};
  contactList.push(newContact);
  console.log("Succesfully added a new contact.");
  viewContact(name, contactList);
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
  console.log("\nStep 4:");
  if (!Array.isArray(contactList) || contactList.length === 0) {
    console.log(`Please provide a valid list.`);
    return;
  }

  if (!name) {
    console.log(`Missing which "name" to look`);
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

function updateContact({ name, newPhone, newEmail, contactList }) {
  console.log("\nStep 5:");
  if (!name || !Array.isArray(contactList)) {
    console.log("Please provide a valid name and contact list.");
    return;
  }

  if (newPhone !== undefined && !/^\d+$/.test(newPhone)) {
    //add regexp validation
    console.log(`New phone values are not valid, please check again.`);
    return;
  }

  if (newEmail !== undefined && !newEmail.includes("@")) {
    //add regexp validation
    console.log(`New email values are not valid, please check again.`);
    return;
  }

  if (newPhone === undefined && newEmail === undefined) {
    console.log(`Please provide a new phone or email to update.`);
    return;
  }
  //find a way to validate the provided inputs are ok, and make it to log simplier, not without an object
  //done for now

  const contact = findContact(name, contactList);

  if (!contact) {
    console.log(`No contact found with the name: ${name}`);
    return;
  }

  console.log(`Updating ${name}...`);

  if (newPhone) {
    contact.phone = newPhone;
  }

  if (newEmail) {
    contact.email = newEmail;
  }

  console.log(`${name} updated.`);
  console.log(contact);
}

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
  console.log("\nStep 6:");
  if (!name || !Array.isArray(contactList)) {
    console.log("Please provide a valid name and contact list.");
    return;
  }

  const contact = findContact(name, contactList);

  if (!contact) {
    console.log(`No contact found with the name: ${name.toLowerCase().charAt(0).toUpperCase()+name.slice(1)}}`);
    return;
  }
  const index = contactList.indexOf(contact);

  console.log(`Removing ${name}...`); //we can make stylish adjustment but im not sure if necessery
  //${name.toLowerCase().charAt(0).toUpperCase()+name.slice(1)}

  const removedContact = contactList.splice(index, 1);
  console.log(`Removed ${name}`);
  console.log(removedContact);
}



/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the 
Contact Book in action.
*/

displayAllContacts(generalContacts);

displayAllContacts(workContacts);

// TODO: make sure that the function still works when input below is provided
displayAllContacts([]);

displayAllContacts();
displayAllContacts([{street:"some street", postalCode: '12345'}]);
displayAllContacts(['john', '1312312', 'emaail@com']);


addContact({name:"Mary", phone:"001236672", email:"vanderboom@gmail.com", contactList: generalContacts});
addContact({name:"Mehmet", phone:"001236672", email:"vanderboom@gmail.com",contactList: generalContacts});
addContact({name:"Mahmut",phone: null, email:"vanderboom@gmail.com", contactList:generalContacts});
addContact({name:"Muhammet", email:"vanderboom@gmail.com",contactList: generalContacts}); //it lacks phone number but it says contact list is missing. find a way to how to seperate them

viewContact("Mary", generalContacts);
viewContact("mary", generalContacts);
viewContact("mah", generalContacts);
viewContact(generalContacts);

//we have same shift problem here too, name become contactlist and it sees no contactlist

updateContact({
  name: "Ayşe",
  contactList: generalContacts,
});

updateContact({
  name: "ayşe",
  newPhone: "005533698874",
  contactList: generalContacts,
});

updateContact({
  newPhone: "005533698874",
  contactList: generalContacts,
});
//find much simplier way to validate the given information, there are too many if's

removeContact(undefined, generalContacts) 
//find a way to remove missing items and a way to list missing items
removeContact("mehmet", generalContacts)


/*
-----------------------------------------------------------
  OPTIONAL ENHANCEMENTS:
-----------------------------------------------------------
1. Partial Name Search:
   - Instead of strict ===, use .includes() for the name check. (done in findContact function)

2. Sort Contacts:
   - Add a function to sort contacts alphabetically by name.
3. Search by multiple fields:
   - e.g., find a contact by phone number or email. (done in findContact function)
*/
