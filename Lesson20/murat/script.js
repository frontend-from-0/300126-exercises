// 1. Select element
// 2. Add event listener with suitable event type
// 3. Do something (e.g. modify the appearance)

const dateInput = document.getElementById("date");
const selectedDateText = document.getElementById("selected-date");
const timeButtons = document.getElementsByClassName("slot");
const selectedTimeText = document.getElementById("selected-time");
const submitButton = document.getElementById("confirm");
const form = document.getElementById("booking-form");
const formContent = document.getElementById("form-content");
const confirmation = document.getElementById("confirmation-message");
const data = { date: "", time: "" };

dateInput.addEventListener("change", function () {
  let dateValue = dateInput.value;
  const selectedDate = new Date(dateValue).toLocaleDateString("en-GB");

  console.log(`DateInput Value, ${dateInput.value}, ${typeof dateInput.value}`);

  if (!selectedDate || selectedDate === "Invalid Date") {
    selectedDateText.textContent = "-";
    data.date = "";
  } else {
    selectedDateText.textContent = selectedDate;
    data.date = selectedDate;
  }
  allowSubmit();
});

console.log(timeButtons);

const timeButtonsArray = [...timeButtons];
timeButtonsArray.forEach((button) => {
  button.addEventListener("click", function () {
    const selectedTime = button.textContent;

    if (typeof selectedTime === "string") {
      selectedTimeText.textContent = selectedTime;
      data.time = selectedTime;
    }

    timeButtonsArray.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    allowSubmit();
  });
});

function allowSubmit() {
  if (data.time && data.date) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
  formContent.classList.add("hidden");
  confirmation.classList.remove("hidden");
  confirmation.innerHTML = `<h1>Thank you!</h1> <p>Your appointment is confirmed for ${data.date} at ${data.time}</p>`;
});

/* Login page script process */

const loginPage = document.getElementById("login-page");
const loginForm = document.getElementById("login-form");
const displayUsername = document.getElementById("display-username");
const displayEmail = document.getElementById("display-email");

document.addEventListener("DOMContentLoaded", function () {
  if (formContent) {
    formContent.classList.add("blurred");
  }
  const today = new Date();
  today.setDate(today.getDate() + 2);
  if (dateInput) {
    dateInput.min = today.toISOString().split("T")[0];
  }
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usernameInput = document.getElementById("username").value.trim();
  const emailInput = document.getElementById("email").value.trim();

  const isNameValid = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/.test(usernameInput);
  const isEmailValid = emailInput.includes("@");

  if (displayUsername && displayEmail && isNameValid && isEmailValid) {
    displayUsername.textContent = usernameInput;
    displayEmail.textContent = emailInput;
    if (loginPage) {
      loginPage.style.display = "none";
    }
    if (formContent) {
      formContent.classList.remove("blurred");
    }
  } else {
    if (!isNameValid) {
      alert(
        "Please don't write numbe or special characters while writing your username",
      );
    } else if (!isEmailValid) {
      alert("Please write valid mail adress");
    } else {
      alert("A system error occurred.Please refresh the page.");
    }
  }
});
