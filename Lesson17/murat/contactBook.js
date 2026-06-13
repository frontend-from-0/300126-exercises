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
    name: "Murat",
    phone: "00905411112233",
    email: "murat@mail.com",
  },
  {
    name: "Seda",
    phone: "00905412223344",
    email: "seda@mail.com",
  },
];

const workContacts = [
  {
    name: "Ahmet",
    phone: "00905413334455",
    email: "ahmet@mail.com",
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

const ALLOWED_FIELDS = ["name", "phone", "email"];

function displayAllContacts(contacts, currentAllowedFields) {
  console.log("Displaying all contacts...");
  if (!Array.isArray(contacts)) {
    console.warn("Provided input is not an array");
    return;
  }
  if (currentAllowedFields === undefined) {
    console.warn(
      "❌ Error: Missing second parameter 'currentAllowedFields'. Please provide an allowed fields array.",
    );
    return;
  }
  if (contacts.length == 0) {
    console.log("No contacts in the list.");
    return;
  }
  for (const item of contacts) {
    if (typeof item !== "object" || item === null || Array.isArray(item)) {
      console.warn("This element is not a real object, skipping...");
      continue;
    }
    if (Object.keys(item).length == 0) {
      console.log("Skipping completely empty object...");
      continue;
    }

    let hasInvalidKey = false;
    for (const key in item) {
      if (!currentAllowedFields.includes(key)) {
        hasInvalidKey = true;
        break;
      }
    }
    if (hasInvalidKey) {
      console.warn(
        "❌ Access Denied: This object contains unauthorized fields. Skipping...",
      );
      continue;
    }

    let outputString = "";
    for (const key in item) {
      outputString += `${key}: ${item[key]} | `;
    }
    console.log(outputString);
  }
  console.log("End of contacts.");
}

displayAllContacts(generalContacts, ALLOWED_FIELDS);
displayAllContacts(workContacts, ALLOWED_FIELDS);
displayAllContacts([]);
displayAllContacts();
displayAllContacts(
  [{ street: "some street", postalCode: "12345" }],
  ALLOWED_FIELDS,
);
displayAllContacts(["john", "1312312", "emaail@com"], ALLOWED_FIELDS);

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
  if (!Array.isArray(contactList)) return null;
  for (const item of contactList) {
    if (item.name.toLowerCase() === name.toLowerCase()) {
      return item;
    }
  }
  return null;
}

function addContact(name, phone, email, contactList) {
  console.log(`Adding a new contact`);
  if (!Array.isArray(contactList)) {
    console.log("❌ Error: Valid contact list must be provided.");
    return;
  }
  if (
    typeof name !== "string" ||
    name.trim() === "" ||
    typeof phone !== "string" ||
    phone.trim() === "" ||
    typeof email !== "string" ||
    email.trim() === ""
  ) {
    console.log("❌ Error: Invalid input. Please check all fields.");
    return;
  }

  if (!email.includes(`@`) || !email.includes(`.`)) {
    console.log("❌ Error: Invalid email format. Must contain '@' and '.'");
    return;
  }

  const cleanPhone = phone.replace(`+`, ``);
  if (isNaN(cleanPhone)) {
    console.log(`"❌ Error: Phone number must contain only digits."`);
    return;
  }

  const existingContact = findContact(name, contactList);
  if (existingContact) {
    console.warn(`⚠️ Warning: ${name} already exists in contacts array.`);
    return;
  }
  const newContact = { name, phone, email };
  contactList.push(newContact);
  console.log(`✅ Contact ${name} added successfully.`);
}

addContact("Mary", "001236672", "vanderboom@gmail.com", generalContacts);
displayAllContacts(generalContacts, ALLOWED_FIELDS);
addContact("001236672", "vanderboom@gmail.com", generalContacts);
addContact("", "001236672", "vanderboom@gmail.com", generalContacts);
addContact("Zeynep", "05412223344", "zeynep-mail-com", generalContacts);
addContact("Ali", "0541-TELEFON-NO", "ali@mail.com", generalContacts);
addContact("murat", "05411112233", "murat2@mail.com", generalContacts);

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
  if (!Array.isArray(contactList)) {
    console.log("❌ Error: Valid contact list must be provided.");
    return;
  }
  if (typeof name !== "string" || name.trim() === "") {
    console.log("❌ Error: Invalid input. Please check name.");
    return;
  }
  const foundContact = findContact(name, contactList);
  if (foundContact) {
    console.log(
      `✅ Found! Name: ${foundContact.name}, Phone: ${foundContact.phone}, Email: ${foundContact.email}`,
    );
    return;
  }
  console.log(`❌ No contact found with the name: ${name}`);
}

viewContact("Murat", generalContacts);
viewContact("Seda", generalContacts);
viewContact([]);
viewContact();
viewContact("Serkan");
viewContact("Serkan", generalContacts);

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
  if (!Array.isArray(contactList)) {
    console.log("❌ Error: Valid contact list must be provided.");
    return;
  }
  if (
    typeof name !== "string" ||
    name.trim() === "" ||
    typeof newPhone !== "string" ||
    newPhone.trim() === "" ||
    typeof newEmail !== "string" ||
    newEmail.trim() === ""
  ) {
    console.log("❌ Error: Invalid input. Please check all fields.");
    return;
  }

  if (!newEmail.includes(`@`) || !newEmail.includes(`.`)) {
    console.log("❌ Error: Invalid email format. Must contain '@' and '.'");
    return;
  }

  const cleanPhone = newPhone.replace(`+`, ``);
  if (isNaN(cleanPhone)) {
    console.log(`"❌ Error: Phone number must contain only digits."`);
    return;
  }

  console.log(`Updating contact for: ${name}...`);
  const updateContact = findContact(name, contactList);
  if (!updateContact) {
    console.log(
      `❌ Error: No contact found with the name '${name}' to update.`,
    );
    return;
  }
  updateContact.phone = newPhone.replace("+", "").trim();
  updateContact.email = newEmail.trim();
  console.log(`✅ Success: ${name}'s contact info has been updated!`);
}

updateContact("Murat", "05559998877", "yeni-murat@gmail.com", generalContacts);
updateContact("Ahmet", "05559993877", "yeni-murat2@gmail.com", generalContacts);
displayAllContacts(generalContacts, ALLOWED_FIELDS);
updateContact([]);
updateContact();

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
  if (!Array.isArray(contactList)) {
    console.log("❌ Error: Valid contact list must be provided.");
    return;
  }
  if (typeof name !== "string" || name.trim() === "") {
    console.log("❌ Error: Invalid input. Please check all fields.");
    return;
  }

  console.log(`${name} is searching for remove`);
  for (let i = 0; i < contactList.length; i++) {
    if (contactList[i].name?.toLowerCase() === name.toLowerCase()) {
      contactList.splice(i, 1);
      console.log(`Contact removed successfully.`);
      return;
    }
  }
  console.log(`No contact found with the name: ${name}`);
}
removeContact("Mary", generalContacts);
displayAllContacts(generalContacts, ALLOWED_FIELDS);
updateContact([]);
updateContact();
removeContact("John", generalContacts);

/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the 
Contact Book in action.

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

console.log(`Testing Our Functions: Option 1...`);
function nameCheck(name, contactList) {
  if (!Array.isArray(contactList)) {
    console.log("❌ Error: Valid contact list must be provided.");
    return;
  }
  if (typeof name !== "string" || name.trim() === "") {
    console.log("❌ Error: Invalid input. Please check all fields.");
    return;
  }
  const searchName = name.toLowerCase();
  for (const item of contactList) {
    if (item?.name?.toLowerCase()?.includes(searchName)) {
      console.log(`${name} is on the list`);
      return;
    }
  }
  console.log(`${name} is not on the list`);
}

nameCheck("Seda", generalContacts);
nameCheck("Sefa", generalContacts);
nameCheck([]);
nameCheck(1234, generalContacts);
nameCheck();

console.log(`Testing Our Functions: Option 2...`);
const sortList = [...generalContacts];
sortList.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});
console.log("--- Sorted list ---");
console.log(sortList);
console.log("--- Orijinal List ---");
console.log(generalContacts);

console.log(`Testing Our Functions: Option 3...`);
function searchValue(keyword, contactList) {
  if (typeof keyword !== "string" || keyword.trim() === "") {
    console.log(
      "❌ Error: Invalid search keyword. It must be a non-empty string.",
    );
    return;
  }
  if (!Array.isArray(contactList)) {
    console.log("❌ Error: Valid contact list must be provided.");
    return;
  }
  const searchKeyword = keyword.toLowerCase();
  const result = contactList.filter(function (item) {
    const nameMatch = item?.name?.toLowerCase().includes(searchKeyword);
    const phoneMatch = item?.phone?.toLowerCase().includes(searchKeyword);
    const emailMatch = item?.email?.toLowerCase().includes(searchKeyword);
    return nameMatch || phoneMatch || emailMatch;
  });
  if (result.length > 0) {
    console.log(`Match found for ${keyword} (${result.length} person)`);

    for (const person of result) {
      console.log(
        `Name: ${person.name}, Phone: ${person.phone}, Email: ${person.email}`,
      );
    }
  } else {
    console.log(`No matches found for ${keyword}`);
  }
}

displayAllContacts(generalContacts, ALLOWED_FIELDS);
searchValue("Sed", generalContacts);
searchValue("9", generalContacts);
updateContact([]);
updateContact();
searchValue(9);

// Extra Optiion -4
//change the position of objects

console.log(`Extra Option 4...`);
function substitution(value1, value2, contactList) {
  console.log(`current list`);
  console.log(generalContacts);
  if (!Array.isArray(contactList)) {
    console.log("❌ Error: Valid contact list must be provided.");
    return;
  }
  const indexValue1 = contactList.findIndex(function (item) {
    return item.name === value1;
  });
  const indexValue2 = contactList.findIndex(function (item) {
    return item.name === value2;
  });
  if (indexValue1 !== -1 && indexValue2 !== -1) {
    [contactList[indexValue1], contactList[indexValue2]] = [
    contactList[indexValue2],
    contactList[indexValue1]
  ];
    
  }
  
  console.log(`new list`);
  console.log(generalContacts);
  console.log("End of contacts.");
}

substitution("Murat", "Seda", generalContacts);
substitution([]);
substitution();




// Extra Optiion -5
//change the position of keywords (name)

console.log(`Extra Option 5...`);
function substitutionKeywords(value1, value2, contactList) {
  console.log(`current list`);
  console.log(generalContacts);
  if (!Array.isArray(contactList)) {
    console.log("❌ Error: Valid contact list must be provided.");
    return;
  }
  const indexValue1 = contactList.findIndex(function (item) {
    return item.name === value1;
  });
  const indexValue2 = contactList.findIndex(function (item) {
    return item.name === value2;
  });
  if (indexValue1 !== -1 && indexValue2 !== -1) {
    [contactList[indexValue1].name, contactList[indexValue2].name] = [
    contactList[indexValue2].name,
    contactList[indexValue1].name
  ];
    
  }
  
  console.log(`new list`);
  console.log(generalContacts);
  console.log("End of contacts.");
}

substitutionKeywords("Murat", "Seda", generalContacts);
substitutionKeywords([]);
substitutionKeywords();


