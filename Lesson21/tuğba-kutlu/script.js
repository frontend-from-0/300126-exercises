//Variables for regEx patterns
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ' \-]*[a-zA-ZÀ-ÿ]$/;
const cardNumberPattern =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;
const cardCvvPattern = /^[0-9]{3,4}$/;

//Variables
const emailInput = document.getElementById("email");
const form = document.getElementById("checkoutForm");
const phoneInput = document.getElementById("phone");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const cardCvv = document.getElementById("cvv");
const cardnumber = document.getElementById("cardnumber");
const expDate = document.getElementById("expDate");
const successMessage = document.getElementById("success");

const cardError = document.getElementById("cardError");
const cvvError = document.getElementById("cvvError");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const phoneError = document.getElementById("phoneError");
const errorEmail = document.getElementById("emailError");
const expDateError = document.getElementById("expDateError");

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
  const trimmedValue = value.trim().replace(/\s/g, "");
  if (trimmedValue.length < 1) {
    cardError.textContent = "This value is required";
    cardError.classList.remove("hidden");
    formValid = false;
  } else if (!cardNumberPattern.test(trimmedValue)) {
    cardError.textContent =
      "Card number should match the following format: 5123 4500 0000 0008";
    cardError.classList.remove("hidden");
    formValid = false;
  } else {
    cardError.classList.add("hidden");
  }
}

function validateCvv(value) {
  const trimmedValue = value.trim();
  if (trimmedValue.length < 1) {
    cvvError.textContent = "This value is required.";
    cvvError.classList.remove("hidden");
    formValid = false;
  } else if (!cardCvvPattern.test(trimmedValue)) {
    cvvError.textContent = "cvv should match the following format: 123 or 1234";
    cvvError.classList.remove("hidden");
    formValid = false;
  } else {
    cvvError.classList.add("hidden");
  }
}

function validateExpDate(value) {
  let trimmedValue = value.trim().replace(/\D/g, "");
  expDate.value = trimmedValue;
  if (trimmedValue.length < 1) {
    expDateError.textContent = "This provide a valid date.";
    expDateError.classList.remove("hidden");
    formValid = false;
  }

  if (trimmedValue.length > 2) {
    trimmedValue = trimmedValue.slice(0, 2) + "/" + trimmedValue.slice(2);
    let [month, year] = trimmedValue.split("/");
    let expyear = 2000 + Number(year);
    let expiration = new Date(expyear, Number(month), 1);
    let now = new Date();

    if (month > 12) {
      month = 12;
      trimmedValue = `${month}/${year}`;
      expDate.value = trimmedValue;
    } else if (expiration < now) {
      expDateError.textContent =
        "Your card has expired. Please use a different card.";
      expDateError.classList.remove("hidden");
      formValid = false;
    } else {
      expDateError.classList.add("hidden");
    }
    expDate.value = trimmedValue;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.classList.add("hidden");
  successMessage.classList.remove("hidden");
  successMessage.classList.add("show");
});

emailInput.addEventListener("blur", () => validateEmail(emailInput.value));
phoneInput.addEventListener("blur", () => validatePhone(phoneInput.value));
firstName.addEventListener("blur", () =>
  validateName(firstName.value, firstNameError),
);
lastName.addEventListener("blur", () =>
  validateName(lastName.value, lastNameError),
);

cardnumber.addEventListener("blur", () => validateCard(cardnumber.value));
cardCvv.addEventListener("blur", () => validateCvv(cardCvv.value));
expDate.addEventListener("input", () => validateExpDate(expDate.value));

validateEmail(emailInput.value);
validatePhone(phoneInput.value);
validateName(firstName.value, firstNameError);
validateName(lastName.value, lastNameError);
validateCard(cardnumber.value);
validateCvv(cardCvv.value);
validateExpDate(expDate.value);

// Bu kısımı çalıştıramadığım için yukarıya yazdım ve sorunu tam olarak çözemedim.

// form.addEventListener("submit", function (event) {
// event.preventDefault();

//     if (formValid) {
//     form.classList.add("hidden");
//     successMessage.classList.remove("hidden");
//     successMessage.classList.add("show");
//   }

//   return;
// });



/* 
** Form Validation **

0. Identify what information do you need to collect from the user (identify required and optional fields).

1. Identify all static parts (inputs and related fields / elements, e.g. placeholder elements for errors), and add HTML and CSS for them. Add CSS for dinamic parts as well.

2. Select form, inputs, error elements in JS (elements that trigger events, elements that provide values for validation, or elements that we need to update).

3. Prepare validation rules (including regexes ) for every input type.

4. Trigger validation using event listeners.

5. (Optional) you can have an help value to keep track of form valid state (e.g. let formValid = true).
*/
