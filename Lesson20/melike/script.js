// 1. Select element
// 2. Add event listener with suitable event type
// 3. Do something (e.g. modify the appearance)

//MD step1 started
const nameInput = document.getElementById('userName');
const emailInput = document.getElementById('userEmail');
const selectedNameText = document.getElementById('selected-name');
const selectedEmailText = document.getElementById('selected-email');
//MD step1 finished
const dateInput = document.getElementById('date');
const selectedDateText = document.getElementById('selected-date');
const timeButtons = document.getElementsByClassName('slot');
const selectedTimeText = document.getElementById('selected-time');
const submitButton = document.getElementById('confirm');
const form = document.getElementById('booking-form');
const formContent = document.getElementById('form-content');
const confirmation = document.getElementById('confirmation-message');
const data = { name: '', email: '', date: '', time: '' };
//MD step2 started
nameInput.addEventListener('blur', function () {
  const nameValue = nameInput.value.trim();
  const nameRegex = /^[A-Za-zçÇğĞıİöÖşŞüÜ\s]+$/;

  if (nameValue && nameRegex.test(nameValue)) {
    selectedNameText.textContent = nameValue;
    data.name = nameValue;
  } else {
    selectedNameText.textContent = 'Geçersiz İsim';
    data.name = '';
  }
  allowSubmit();
});

emailInput.addEventListener('blur', function () {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue && emailRegex.test(emailValue)) {
    selectedEmailText.textContent = emailValue;
    data.email = emailValue;
  } else {
    selectedEmailText.textContent = 'Geçersiz E-posta';
    data.email = '';
  }
  allowSubmit();
});
//MD step2 finished
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

  if (data.name && data.email && data.time && data.date) {   //MD step2 updated allowSubmit function to include name and email validation 
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  // MD step5: Populate the confirmation message with the selected data
  document.getElementById('conf-name').textContent = data.name;
  document.getElementById('conf-email').textContent = data.email;
  document.getElementById('conf-date').textContent = data.date;
  document.getElementById('conf-time').textContent = data.time;
  //MD step5 finished
  console.log(event);
  formContent.classList.add('hidden');
  confirmation.classList.remove('hidden');
});

// MD step3: Set the minimum date for the date input to tomorrow's date
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const yyyy = tomorrow.getFullYear();
const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
const dd = String(tomorrow.getDate()).padStart(2, '0');
dateInput.min = `${yyyy}-${mm}-${dd}`;
//MD step3 finished