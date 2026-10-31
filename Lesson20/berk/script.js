// 1. Select element
// 2. Add event listener with suitable event type
// 3. Do something (e.g. modify the appearance)

const userNameInput = document.getElementById("username");
const selectedUserNameText = document.getElementById("selected-username");
const emailInput = document.getElementById("email");
const selectedEmailText = document.getElementById("selected-email");
const dateInput = document.getElementById("date");
const selectedDateText = document.getElementById("selected-date");
const timeRadios = document.querySelectorAll(".slot");
const selectedTimeText = document.getElementById("selected-time");
const submitButton = document.getElementById("confirm");
const form = document.getElementById("booking-form");
const formContent = document.getElementById("form-content");
const confirmation = document.getElementById("confirmation-message");
const data = { date: "", time: "", username: "", email: "" };

const minTomorrow = new Date();
minTomorrow.setDate(minTomorrow.getDate() + 1);
dateInput.min = minTomorrow.toISOString().split("T")[0];

dateInput.addEventListener("change", function () {
  const dateValue = dateInput.value;
  const selectedDate = new Date(dateValue).toLocaleDateString("en-GB");

  if (!selectedDate || selectedDate === "Invalid Date") {
    selectedDateText.textContent = "-";
    data.date = "";
  } else {
    selectedDateText.textContent = selectedDate;
    data.date = selectedDate;
  }
  allowSubmit();
});

timeRadios.forEach((radio) => {
  radio.addEventListener("change", function () {
    const selectedTime = radio.value;
    selectedTimeText.textContent = selectedTime;
    data.time = selectedTime;
    allowSubmit();
  });
});

userNameInput.addEventListener("change", function () {
  const userNameValue = userNameInput.value.trim();

  if (userNameValue === "") {
    selectedUserNameText.textContent = "-";
    data.username = "";
  } else {
    selectedUserNameText.textContent = userNameValue;
    data.username = userNameValue;
  }
  allowSubmit();
});

emailInput.addEventListener("change", function () {
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    selectedEmailText.textContent = "-";
    data.email = "";
  } else {
    selectedEmailText.textContent = emailValue;
    data.email = emailValue;
  }
  allowSubmit();
});

function allowSubmit() {
  if (data.time && data.date && data.username && data.email) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  formContent.classList.add("hidden");
  confirmation.classList.remove("hidden");
});
