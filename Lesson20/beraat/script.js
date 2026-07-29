// 1. Select element
// 2. Add event listener with suitable event type
// 3. Do something (e.g. modify the appearance)

const dateInput = document.getElementById("date");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const selectedDateText = document.getElementById("selected-date");
const selectedNameText = document.getElementById("selected-name");
const selectedEmailText = document.getElementById("selected-email");
const selectedTimeText = document.getElementById("selected-time");

const confirmName = document.getElementById("confirm-name");
const confirmEmail = document.getElementById("confirm-email");
const confirmDate = document.getElementById("confirm-date");
const confirmTime = document.getElementById("confirm-time");

const submitButton = document.getElementById("confirm");
const timeButtons = document.getElementsByClassName("slot");
const resetButton = document.getElementById("reset-btn");

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const form = document.getElementById("booking-form");
const formContent = document.getElementById("form-content");
const confirmation = document.getElementById("confirmation-message");
const data = { date: "", time: "", name: "", email: "" };

const newBookingButton = document.getElementById("new-booking");

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
dateInput.min = tomorrow.toISOString().split("T")[0];

resetButton.addEventListener("click", function () {
  form.reset();

  data.name = "";
  data.email = "";
  data.date = "";
  data.time = "";

  selectedNameText.textContent = "-";
  selectedEmailText.textContent = "-";
  selectedDateText.textContent = "-";
  selectedTimeText.textContent = "-";

  submitButton.disabled = true;

  [...timeButtons].forEach((button) => {
    button.style.background = "#eee";
  });
});

nameInput.addEventListener("input", function () {
  data.name = nameInput.value.trim();
  selectedNameText.textContent = data.name || "-";
  allowSubmit();
});

emailInput.addEventListener("blur", function () {
  const email = emailInput.value.trim();

  if (emailRegex.test(email)) {
    data.email = email;
    selectedEmailText.textContent = email;
  } else {
    data.email = "";
    selectedEmailText.textContent = "Invalid Email";
  }

  allowSubmit();
});

dateInput.addEventListener("change", function () {
  let dateValue = dateInput.value;
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

const timeButtonsArray = [...timeButtons];
timeButtonsArray.forEach((button) => {
  button.addEventListener("click", function () {
    const selectedTime = button.textContent;

    if (typeof selectedTime === "string") {
      selectedTimeText.textContent = selectedTime;
      data.time = selectedTime;
    }

    allowSubmit();
  });
});

newBookingButton.addEventListener("click", () => {
  location.reload();
});

function allowSubmit() {
  if (data.time && data.date && data.name && data.email) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  confirmName.textContent = data.name;
  confirmEmail.textContent = data.email;
  confirmDate.textContent = data.date;
  confirmTime.textContent = data.time;

  formContent.classList.add("hidden");
  confirmation.classList.remove("hidden");
});
