//Variables for regEx patterns
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ' \-]*[a-zA-ZÀ-ÿ]$/;
const cardNumberPattern =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{4})$/;
const cvvPattern = /^\d{3,4}$/;
//Variables
const emailInput = document.getElementById("email");
const errorEmail = document.getElementById("emailError");
const form = document.getElementById("checkoutForm");
const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");

const cardNumber = document.getElementById("cardNumber");
const cardError = document.getElementById("cardError");
const expDateInput = document.getElementById("expDate");
const expDateError = document.getElementById("expDateError");
const cvvInput = document.getElementById("cvv");
const cvvInputError = document.getElementById("cvvError");
const confirmationMessage = document.getElementById("confirmationMessage");
const confirmationText = document.getElementById("confirmationText");
let formValid = true;

function validateEmail(value) {
  const trimmedValue = value.trim();
  if (!emailPattern.test(trimmedValue)) {
    errorEmail.textContent = "Please provide a valid mail address.";
    emailError.classList.remove("hidden");
    emailInput.setAttribute("aria-invalid", "true");
    formValid = false;
  } else {
    emailError.classList.add("hidden");
    emailInput.setAttribute("aria-invalid", "false");
  }
}

function validatePhone(value) {
  const trimmedValue = value.trim();
  if (!phonePattern.test(trimmedValue)) {
    phoneError.textContent = "Please provide a valid phone number";
    phoneError.classList.remove("hidden");
    phoneInput.setAttribute("aria-invalid", "true");
    formValid = false;
  } else {
    phoneError.classList.add("hidden");
    phoneInput.setAttribute("aria-invalid", "false");
  }
}

function validateName(value, errorElement) {
  const trimmedValue = value.trim();
  if (trimmedValue.length < 1) {
    errorElement.textContent = "The value is required";
    errorElement.classList.remove("hidden");
    emailInput.setAttribute("aria-invalid", "true");
    formValid = false;
  } else if (!namePattern.test(trimmedValue)) {
    errorElement.textContent =
      "The value should be at least 2 characters and contain letters. It can contain spaces and dashes but only in the middle of the name.";
    errorElement.classList.remove("hidden");
    emailInput.setAttribute("aria-invalid", "true");
    formValid = false;
  } else {
    errorElement.classList.add("hidden");
    emailInput.setAttribute("aria-invalid", "false");
  }
}

function validateCard(value) {
  const trimmedValue = value.trim();
  const rawNumber = trimmedValue.replace(/\s/g, "");
  if (trimmedValue.length < 1) {
    cardError.textContent = "This value is required";
    cardError.classList.remove("hidden");
    cardNumber.setAttribute("aria-invalid", "true");
    formValid = false;
  } else if (!cardNumberPattern.test(rawNumber)) {
    cardError.textContent =
      "Card number should match the following format: 5123 4500 0000 0008";
    cardError.classList.remove("hidden");
    cardNumber.setAttribute("aria-invalid", "true");
    formValid = false;
  } else {
    cardError.classList.add("hidden");
    cardNumber.setAttribute("aria-invalid", "false");
  }
}

const isNotExpired = (month, year) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const fullYear = year < 100 ? 2000 + year : year;
  if (fullYear > currentYear) return true;
  if (fullYear === currentYear && month >= currentMonth) return true;
  return false;
};

function validateExpDate(value) {
  if (typeof value !== "string") return false;
  const trimmedValue = value.trim();
  const match = trimmedValue.match(expDatePattern);
  if (trimmedValue.length < 1) {
    expDateError.textContent = "This value is required";
    expDateError.classList.remove("hidden");
    expDateInput.setAttribute("aria-invalid", "true");
    formValid = false;
    return;
  }
  if (!match) {
    expDateError.textContent =
      "Expiration date should match the following format: MM/YY (e.g., 05/28)";
    expDateError.classList.remove("hidden");
    expDateInput.setAttribute("aria-invalid", "true");
    formValid = false;
    return;
  }
  const month = parseInt(match[1], 10);
  const year = parseInt(match[2], 10);
  if (!isNotExpired(month, year)) {
    expDateError.textContent = "The card has expired.";
    expDateError.classList.remove("hidden");
    expDateInput.setAttribute("aria-invalid", "true");
    formValid = false;
  } else {
    expDateError.classList.add("hidden");
    expDateInput.setAttribute("aria-invalid", "false");
  }
}

function validateCvv(value) {
  const trimmedValue = value.trim();
  const isValid = cvvPattern.test(trimmedValue);
  if (!isValid) {
    cvvInputError.textContent = "CVV must be 3 or 4 digits.";
    cvvInputError.classList.remove("hidden");
    cvvInput.setAttribute("aria-invalid", "true");
    formValid = false;
  } else {
    cvvInputError.classList.add("hidden");
    cvvInput.setAttribute("aria-invalid", "false");
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

cardNumber.addEventListener("blur", () => validateCard(cardNumber.value));
cardNumber.addEventListener("input", (e) => {
  let userValue = e.target.value.replace(/\D/g, "");
  if (userValue.length > 16) {
    userValue = userValue.slice(0, 16);
  }
  e.target.value = userValue;
  const parts = userValue.match(/\d{1,4}/g);
  e.target.value = parts ? parts.join(" ") : "";
});
expDateInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 4) {
    value = value.slice(0, 4);
  }
  if (value.length > 2) {
    e.target.value = `${value.slice(0, 2)}/${value.slice(2)}`;
  } else {
    e.target.value = value;
  }
});
expDateInput.addEventListener("blur", () =>
  validateExpDate(expDateInput.value),
);

cvvInput.addEventListener("blur", () => validateCvv(cvvInput.value));
cvvInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  formValid = true;
  validateEmail(emailInput.value);
  validatePhone(phoneInput.value);
  validateName(firstName.value, firstNameError);
  validateName(lastName.value, lastNameError);
  validateCard(cardNumber.value);
  validateExpDate(expDateInput.value);
  validateCvv(cvvInput.value);

  if (formValid) {
    const userEmail = emailInput.value.trim();
    confirmationText.textContent = `Your receipt and download link are on their way to ${userEmail}.`;
    form.classList.add("hidden");
    confirmationMessage.classList.remove("hidden");
    form.reset();
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
