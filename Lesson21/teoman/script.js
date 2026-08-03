//Variables for regEx patterns
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ' \-]*[a-zA-ZÀ-ÿ]$/;
const cardNumberPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;

// new: regex patterns for the two fields we did not cover in class
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvPattern = /^\d{3,4}$/;

//Variables
const emailInput = document.getElementById('email');
const errorEmail = document.getElementById('emailError');
const form = document.getElementById('checkoutForm');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phoneError');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');

const cardnumber = document.getElementById("cardnumber");
const cardError = document.getElementById("cardError")

// new: elements for expiration date and cvv
const expDateInput = document.getElementById('expDate');
const expDateError = document.getElementById('expDateError');
const cvvInput = document.getElementById('cvv');
const cvvError = document.getElementById('cvvError');
const successMessage = document.getElementById('success');

let formValid = true;

function validateEmail(value) {
  const trimmedValue = value.trim();
  if (!emailPattern.test(trimmedValue)) {
    errorEmail.textContent = 'Please provide a valid mail address.';
    emailError.classList.remove('hidden');
    formValid = false;
    emailInput.setAttribute('aria-invalid', 'true');
  } else {
    emailError.classList.add('hidden');
    emailInput.setAttribute('aria-invalid', 'false');
  }
}

function validatePhone(value) {
  const trimmedValue = value.trim();
  if (!phonePattern.test(trimmedValue)) {
    phoneError.textContent = 'Please provide a valid phone number';
    phoneError.classList.remove('hidden');
    formValid = false;
    phoneInput.setAttribute('aria-invalid', 'true');
  } else {
    phoneError.classList.add('hidden');
    phoneInput.setAttribute('aria-invalid', 'false');
  }
}

function validateName(value, errorElement) {
  const trimmedValue = value.trim();
  // new: find which input this error belongs to, so we can set aria-invalid on it
  const relatedInput = errorElement === firstNameError ? firstName : lastName;
  if (trimmedValue.length < 1) {
    errorElement.textContent = 'The value is required';
    errorElement.classList.remove('hidden');
    formValid = false;
    relatedInput.setAttribute('aria-invalid', 'true');
  } else if (!namePattern.test(trimmedValue)) {
    errorElement.textContent =
      'The value should be at least 2 characters and contain letters. It can contain spaces and dashes but only in the middle of the name.';
    errorElement.classList.remove('hidden');
    formValid = false;
    relatedInput.setAttribute('aria-invalid', 'true');
  } else {
    errorElement.classList.add('hidden');
    relatedInput.setAttribute('aria-invalid', 'false');
  }
}

function validateCard (value){
    const trimmedValue = value.trim();
    if (trimmedValue.length < 1){
      cardError.textContent = "This value is required";
      cardError.classList.remove("hidden");
      formValid = false;
      cardnumber.setAttribute('aria-invalid', 'true');
    } else if (!cardNumberPattern.test(trimmedValue)){
      cardError.textContent = "Card number should match the following format: 5123 4500 0000 0008";
      cardError.classList.remove("hidden");
      formValid = false;
      cardnumber.setAttribute('aria-invalid', 'true');
    } else {
      cardError.classList.add("hidden");
      cardnumber.setAttribute('aria-invalid', 'false');
    }
}

// new: validation for expiration date (task 1 - field not covered in class)
function validateExpDate(value) {
  const trimmedValue = value.trim();
  if (trimmedValue.length < 1) {
    expDateError.textContent = 'This value is required';
    expDateError.classList.remove('hidden');
    formValid = false;
    expDateInput.setAttribute('aria-invalid', 'true');
    return;
  }
  if (!expDatePattern.test(trimmedValue)) {
    expDateError.textContent = 'Please use the MM/YY format, e.g. 09/27';
    expDateError.classList.remove('hidden');
    formValid = false;
    expDateInput.setAttribute('aria-invalid', 'true');
    return;
  }
  // also check the card is not already expired
  const [month, year] = trimmedValue.split('/').map(Number);
  const expiry = new Date(2000 + year, month); // first day of the month after expiry
  const today = new Date();
  if (expiry < today) {
    expDateError.textContent = 'This card has expired. Please use a valid card.';
    expDateError.classList.remove('hidden');
    formValid = false;
    expDateInput.setAttribute('aria-invalid', 'true');
  } else {
    expDateError.classList.add('hidden');
    expDateInput.setAttribute('aria-invalid', 'false');
  }
}

// new: validation for CVV (task 1 - field not covered in class)
function validateCVV(value) {
  const trimmedValue = value.trim();
  if (trimmedValue.length < 1) {
    cvvError.textContent = 'This value is required';
    cvvError.classList.remove('hidden');
    formValid = false;
    cvvInput.setAttribute('aria-invalid', 'true');
  } else if (!cvvPattern.test(trimmedValue)) {
    cvvError.textContent = 'CVV should be 3 or 4 digits.';
    cvvError.classList.remove('hidden');
    formValid = false;
    cvvInput.setAttribute('aria-invalid', 'true');
  } else {
    cvvError.classList.add('hidden');
    cvvInput.setAttribute('aria-invalid', 'false');
  }
}

emailInput.addEventListener('blur', () => validateEmail(emailInput.value));
phoneInput.addEventListener('blur', () => validatePhone(phoneInput.value));
firstName.addEventListener('blur', () =>
  validateName(firstName.value, firstNameError),
);
lastName.addEventListener('blur', () =>
  validateName(lastName.value, lastNameError),
);

cardnumber.addEventListener("blur", () => validateCard(cardnumber.value));

// new: blur listeners for the two new fields
expDateInput.addEventListener('blur', () => validateExpDate(expDateInput.value));
cvvInput.addEventListener('blur', () => validateCVV(cvvInput.value));

// new: live input filtering, so the user can only type digits (no letters/symbols)
// in the numeric fields, on top of the maxlength already set in the HTML.
cardnumber.addEventListener('input', () => {
  const digitsOnly = cardnumber.value.replace(/\D/g, '').slice(0, 16);
  // group every 4 digits with a space, e.g. 5123 4500 0000 0008
  cardnumber.value = digitsOnly.replace(/(.{4})(?=.)/g, '$1 ');
});

expDateInput.addEventListener('input', () => {
  const digitsOnly = expDateInput.value.replace(/\D/g, '').slice(0, 4);
  expDateInput.value =
    digitsOnly.length > 2
      ? digitsOnly.slice(0, 2) + '/' + digitsOnly.slice(2)
      : digitsOnly;
});

cvvInput.addEventListener('input', () => {
  cvvInput.value = cvvInput.value.replace(/\D/g, '').slice(0, 4);
});

phoneInput.addEventListener('input', () => {
  // allow a leading + then digits/spaces only, matches phonePattern's shape
  phoneInput.value = phoneInput.value.replace(/(?!^\+)[^\d\s]/g, '');
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // new: reset formValid on every submit attempt. Without this line, once a user
  // triggers one invalid field, formValid stays false forever, even after they
  // fix every mistake, and the form could never succeed again.
  formValid = true;

  validateEmail(emailInput.value);
  validatePhone(phoneInput.value);
  validateName(firstName.value, firstNameError);
  validateName(lastName.value, lastNameError);
  validateCard(cardnumber.value);
  validateExpDate(expDateInput.value);
  validateCVV(cvvInput.value);


  if (formValid) {
    // Do something else to submit the form;

    // new: task 2 - show a meaningful confirmation message after a successful submit
    form.classList.add('hidden');
    successMessage.classList.remove('hidden');
    // move focus to the confirmation so screen reader users hear it right away
    successMessage.focus();
    form.reset();
  }

  return;
});