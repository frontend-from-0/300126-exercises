const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ' -]*[a-zA-ZÀ-ÿ]$/;

const cardNumberPattern =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12})$/;

const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvPattern = /^\d{3,4}$/;

const form = document.getElementById("checkoutForm");
const success = document.getElementById("success");

const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const cardInput = document.getElementById("cardnumber");
const expDateInput = document.getElementById("expDate");
const cvvInput = document.getElementById("cvv");

const clearBtn = document.getElementById("clearBtn");
const returnBtn = document.getElementById("returnBtn");

const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const cardError = document.getElementById("cardError");
const expDateError = document.getElementById("expDateError");
const cvvError = document.getElementById("cvvError");

let formValid = true;

function showError(input, errorElement, message) {
  input.setAttribute("aria-invalid", "true");

  errorElement.textContent = message;

  errorElement.classList.remove("hidden");

  formValid = false;
}

function hideError(input, errorElement) {
  input.setAttribute("aria-invalid", "false");

  errorElement.textContent = "";

  errorElement.classList.add("hidden");
}

function validateEmail() {
  const value = emailInput.value.trim();

  if (value === "") {
    showError(emailInput, emailError, "Email is required.");
  } else if (!emailPattern.test(value)) {
    showError(emailInput, emailError, "Please enter a valid email address.");
  } else {
    hideError(emailInput, emailError);
  }
}

function validatePhone() {
  const value = phoneInput.value.trim();

  if (value === "") {
    showError(phoneInput, phoneError, "Phone number is required.");
  } else if (!phonePattern.test(value)) {
    showError(phoneInput, phoneError, "Please enter a valid phone number.");
  } else {
    hideError(phoneInput, phoneError);
  }
}

function validateFirstName() {
  const value = firstNameInput.value.trim();

  if (value === "") {
    showError(firstNameInput, firstNameError, "First name is required.");
  } else if (!namePattern.test(value)) {
    showError(
      firstNameInput,
      firstNameError,
      "Please enter a valid first name.",
    );
  } else {
    hideError(firstNameInput, firstNameError);
  }
}

function validateLastName() {
  const value = lastNameInput.value.trim();

  if (value === "") {
    showError(lastNameInput, lastNameError, "Last name is required.");
  } else if (!namePattern.test(value)) {
    showError(lastNameInput, lastNameError, "Please enter a valid last name.");
  } else {
    hideError(lastNameInput, lastNameError);
  }
}

function validateCard() {
  const value = cardInput.value.replace(/\s/g, "");

  if (value === "") {
    showError(cardInput, cardError, "Card number is required.");
  } else if (!cardNumberPattern.test(value)) {
    showError(cardInput, cardError, "Please enter a valid card number.");
  } else {
    hideError(cardInput, cardError);
  }
}

function validateExpDate() {
  const value = expDateInput.value.trim();

  if (value === "") {
    showError(expDateInput, expDateError, "Expiration date is required.");
  } else if (!expDatePattern.test(value)) {
    showError(expDateInput, expDateError, "Use MM/YY format.");
  } else {
    const [month, year] = value.split("/");

    const expMonth = Number(month);
    const expYear = Number(`20${year}`);

    const today = new Date();

    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    if (
      expYear < currentYear ||
      (expYear === currentYear && expMonth < currentMonth)
    ) {
      showError(expDateInput, expDateError, "Card has expired.");
      return;
    }
    hideError(expDateInput, expDateError);
  }
}

function validateCVV() {
  const value = cvvInput.value.trim();

  if (value === "") {
    showError(cvvInput, cvvError, "CVV is required.");
  } else if (!cvvPattern.test(value)) {
    showError(cvvInput, cvvError, "CVV must contain 3 or 4 digits.");
  } else {
    hideError(cvvInput, cvvError);
  }
}

function clearForm() {
  form.reset();

  const inputs = form.querySelectorAll("input");

  inputs.forEach(function (input) {
    input.setAttribute("aria-invalid", "false");
  });

  const errors = document.querySelectorAll(".input-error");

  errors.forEach(function (error) {
    error.textContent = "";

    error.classList.add("hidden");
  });

  formValid = true;
}

function showSuccessMessage() {
  form.classList.add("hidden");

  success.classList.remove("hidden");
}

function returnToForm() {
  success.classList.add("hidden");

  form.classList.remove("hidden");

  clearForm();
}

emailInput.addEventListener("blur", validateEmail);

phoneInput.addEventListener("blur", validatePhone);

firstNameInput.addEventListener("blur", validateFirstName);

lastNameInput.addEventListener("blur", validateLastName);

cardInput.addEventListener("blur", validateCard);

expDateInput.addEventListener("blur", validateExpDate);

cvvInput.addEventListener("blur", validateCVV);

clearBtn.addEventListener("click", clearForm);

returnBtn.addEventListener("click", returnToForm);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  formValid = true;

  validateEmail();
  validatePhone();
  validateFirstName();
  validateLastName();
  validateCard();
  validateExpDate();
  validateCVV();

  if (!formValid) {
    const firstInvalidInput = document.querySelector('[aria-invalid="true"]');

    if (firstInvalidInput) {
      firstInvalidInput.focus();
    }

    return;
  }

  showSuccessMessage();
});
