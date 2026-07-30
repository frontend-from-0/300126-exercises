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
const data = { date: "", time: "", fullname: "", email: "" };
const appointmentDate = document.getElementById(`appointment-date`);
const appointmentTime = document.getElementById(`appointment-time`);
const resetButton = document.getElementById(`reset-button`);
const fullnameInput = document.getElementById(`fullname`);
const writedFullnameText = document.getElementById("writed-fullname");
const emailInput = document.getElementById("email");
const writedEmailText = document.getElementById("writed-email");
const appointmentFullname = document.getElementById("appointment-fullname");
const appointmentEmail = document.getElementById("appointment-email");
const emailErrorMessage = document.getElementById("email-error")
const fullnameErrorMessage = document.getElementById("fullname-error")

const today = new Date().toISOString().split("T")[0];
dateInput.min = today;

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
    timeButtonsArray.forEach((btn) => {
      btn.classList.remove(`button-selected`);
      btn.setAttribute(`aria-pressed`, `false`);
    });
    button.classList.add(`button-selected`);
    button.setAttribute(`aria-pressed`, `true`);

    if (typeof selectedTime === "string") {
      selectedTimeText.textContent = selectedTime;
      data.time = selectedTime;
    }

    allowSubmit();
  });
});

function allowSubmit() {
  if (data.time && data.date && data.fullname && data.email) {
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
  appointmentDate.textContent = data.date;
  appointmentTime.textContent = data.time;
  appointmentFullname.textContent = data.fullname;
  appointmentEmail.textContent = data.email;
});

fullnameInput.addEventListener(`blur`, function () {
  writedFullnameText.textContent = fullnameInput.value;
  data.fullname = fullnameInput.value;
  if(fullnameInput.value === ''){
    fullnameInput.classList.add(`invalid`);
    fullnameErrorMessage.textContent = "Please enter your Fullname.";
  } else {
    fullnameInput.classList.remove(`invalid`)
    fullnameErrorMessage.textContent = "";
  }
  allowSubmit();
});

emailInput.addEventListener(`blur`, function () {
  writedEmailText.textContent = emailInput.value;
  data.email = emailInput.value;
  if(emailInput.checkValidity() === false) {
    emailInput.classList.add(`invalid`)
    emailErrorMessage.textContent = "Please enter a valid email.";
  } else {
    emailInput.classList.remove(`invalid`)
    emailErrorMessage.textContent = "";
  }
  allowSubmit();
});

resetButton.addEventListener("click", function () {
  formContent.classList.remove("hidden");
  confirmation.classList.add("hidden");
  data.date = ``;
  data.time = ``;
  dateInput.value = ``;
  selectedDateText.textContent = `-`;
  selectedTimeText.textContent = `-`;
  timeButtonsArray.forEach((btn) => {
    btn.classList.remove("button-selected");
    btn.setAttribute("aria-pressed", "false");
  });
  data.fullname = ``;
  data.email = ``;
  fullnameInput.value = ``;
  emailInput.value = ``;
  writedEmailText.textContent = `-`;
  writedFullnameText.textContent = `-`;
  allowSubmit();
});
