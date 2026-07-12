//Variables for regEx patterns
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ' \-]*[a-zA-ZÀ-ÿ]$/;
const cardNumberPattern =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/(2[6-9]|3[0-6])$/;
const cvvPattern = /^[0-9]{3}$/;

//Variables
const emailInput = document.getElementById("email");
const errorEmail = document.getElementById("emailError");
const form = document.getElementById("checkoutForm");
const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const cardnumber = document.getElementById("cardnumber");
const cardError = document.getElementById("cardError");
const expDate = document.getElementById("expDate");
const dateError = document.getElementById("dateError");
const cvv = document.getElementById("cvv");
const cvvError = document.getElementById("cvvError");
const successInput = document.getElementById("success");

let formValid = true;

function validateEmail(value) {
  const trimmedValue = value.trim();
  if (!emailPattern.test(trimmedValue)) {
    errorEmail.textContent = "Please provide a valid mail address.";
    emailError.classList.remove("hidden");
    formValid = false;
  } else {
    emailError.classList.add("hidden");
  }
}

function validatePhone(value) {
  const trimmedValue = value.trim();
  if (!phonePattern.test(trimmedValue)) {
    phoneError.textContent = "Please provide a valid phone number";
    phoneError.classList.remove("hidden");
    formValid = false;
  } else {
    phoneError.classList.add("hidden");
  }
}

function validateName(value, errorElement) {
  const trimmedValue = value.trim();
  if (trimmedValue.length < 1) {
    errorElement.textContent = "The value is required";
    errorElement.classList.remove("hidden");
    formValid = false;
  } else if (!namePattern.test(trimmedValue)) {
    errorElement.textContent =
      "The value should be at least 2 characters and contain letters. It can contain spaces and dashes but only in the middle of the name.";
    errorElement.classList.remove("hidden");
    formValid = false;
  } else {
    errorElement.classList.add("hidden");
  }
}

function validateCard(value) {
  const trimmedValue = value.trim();
  const cleanValue = trimmedValue.replace(/\s/g, "");
  if (trimmedValue === "") {
    cardError.textContent = "This value is required";
    cardError.classList.remove("hidden");
    formValid = false;
  } else if (!cardNumberPattern.test(cleanValue)) {
    cardError.textContent =
      "Card number should match the following format: 5123 4500 0000 0008";
    cardError.classList.remove("hidden");
    formValid = false;
  } else {
    cardError.classList.add("hidden");
    formValid = true;
  }
}

function validateData(value) {
  const trimmedValue = value.trim();
  if (trimmedValue === "") {
    dateError.textContent = "This value is required.";
    dateError.classList.remove("hidden");
    formValid = false;
  } else if (!expDatePattern.test(trimmedValue)) {
    dateError.textContent =
      "Please enter a valid date (MM/YY) between 01 and 12 for month and between 26 and 36 for year ";
    dateError.classList.remove("hidden");
    formValid = false;
  } else {
    dateError.classList.add("hidden");
  }
}

function validateCvv(value) {
  const trimedValue = value.trim();
  if (trimedValue === "") {
    cvvError.textContent = "This value is required.";
    cvvError.classList.remove("hidden");
    formValid = false;
  } else if (!cvvPattern.test(trimedValue)) {
    cvvError.textContent = "Please enter your 3-digit security code.";
    cvvError.classList.remove("hidden");
    formValid = false;
  } else {
    cvvError.classList.add("hidden");
  }
}

emailInput.addEventListener("blur", () => validateEmail(emailInput.value));
phoneInput.addEventListener("blur", () => validatePhone(phoneInput.value));
firstName.addEventListener("blur", () =>
  validateName(firstName.value, firstNameError),
);
lastName.addEventListener("blur", () =>
  validateName(lastName.value, lastNameError),
);

cardnumber.addEventListener("blur", () => validateCard(cardnumber.value));
expDate.addEventListener("blur", () => validateData(expDate.value));
expDate.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 2) {
    value = value.substring(0, 2) + "/" + value.substring(2, 4);
  } else {
    value = value.substring(0, 2);
  }
  e.target.value = value;
});

cvv.addEventListener("blur", () => validateCvv(cvv.value));

form.addEventListener("submit", function (event) {
  event.preventDefault();

  validateEmail(emailInput.value);
  validatePhone(phoneInput.value);
  validateName(firstName.value, firstNameError);
  validateName(lastName.value, lastNameError);
  validateCard(cardnumber.value);
  validateData(expDate.value);
  validateCvv(cvv.value);

  if (formValid) {
    successInput.classList.remove("hidden");
    form.classList.add("hidden");
  }

  return;
});

/* 
** Form Validation **

0. Identify what information do you need to collect from the user (identify required and optional fields).

1. Identify all static parts (inputs and related fields / elements, e.g. placeholder elements for errors), and add HTML and CSS for them. Add CSS for dinamic parts as well.

2. Select form, inputs, error elements in JS (elements that trigger events, elements that provide values for validation, or elements that we need to update).

3. Prepare validation rules (including regexes ) for every input type.

4. Trigger validation using event listeners.

5. (Optional) you can have an help value to keep track of form valid state (e.g. let formValid = true).
*/
