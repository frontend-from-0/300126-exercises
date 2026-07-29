// 1. Select element
// 2. Add event listener with suitable event type
// 3. Do something (e.g. modify the appearance)

const dateInput = document.getElementById('date');
const selectedDateText = document.getElementById('selected-date');
const timeButtons = document.getElementsByClassName('slot');
const selectedTimeText = document.getElementById('selected-time');
const submitButton = document.getElementById('confirm');
const form = document.getElementById('booking-form');
const formContent = document.getElementById('form-content');
const confirmation = document.getElementById('confirmation-message');

const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const summaryUsername = document.getElementById('summary-username');
const summaryEmail = document.getElementById('summary-email');

const confName = document.getElementById('conf-name');
const confEmail = document.getElementById('conf-email');
const confDate = document.getElementById('conf-date');
const confTime = document.getElementById('conf-time');

const data = { date: '', time: '', username: '', email: '' };

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
dateInput.min = tomorrow.toISOString().split('T')[0];

usernameInput.addEventListener('change', function () {
  const value = usernameInput.value;
  if (value) {
    summaryUsername.textContent = value;
    data.username = value;
  } else {
    summaryUsername.textContent = '-';
    data.username = '';
  }
  allowSubmit();
});

emailInput.addEventListener('change', function () {
  const value = emailInput.value;
  if (value) {
    summaryEmail.textContent = value;
    data.email = value;
  } else {
    summaryEmail.textContent = '-';
    data.email = '';
  }
  allowSubmit();
});

dateInput.addEventListener('change', function () {
  let dateValue = dateInput.value;
  const selectedDate = new Date(dateValue).toLocaleDateString('en-GB');

  console.log(`DateInput Value, ${dateInput.value}, ${typeof dateInput.value}`);

  if (!selectedDate || selectedDate === 'Invalid Date') {
    selectedDateText.textContent = '-';
    data.date = '';
  } else {
    selectedDateText.textContent = selectedDate;
    data.date = selectedDate;
  }
  allowSubmit();
});

console.log(timeButtons);

const timeButtonsArray = [...timeButtons];
timeButtonsArray.forEach((button) => {
  button.addEventListener('click', function () {
    const selectedTime = button.textContent;

    if (typeof selectedTime === 'string') {
      selectedTimeText.textContent = selectedTime;
      data.time = selectedTime;
    }

    allowSubmit();
  });
});

function allowSubmit() {
  if (data.time && data.date && data.username && data.email) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event);
  formContent.classList.add('hidden');
  confirmation.classList.remove('hidden');

  confName.textContent = data.username;
  confEmail.textContent = data.email;
  confDate.textContent = data.date;
  confTime.textContent = data.time;
});