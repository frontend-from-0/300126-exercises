// 1. Select element
// 2. Add event listener with suitable event type
// 3. Do something (e.g. modify the appearance)

const dateInput = document.getElementById('date');
const selectedDateText = document.getElementById('selected-date');
const timeButtons = document.querySelectorAll('input[name="timeslot"]');
const selectedTimeText = document.getElementById('selected-time');
const selectedName = document.getElementById('selected-name')
const selectedMail = document.getElementById('selected-mail')
const submitButton = document.getElementById('confirm');
const form = document.getElementById('booking-form');
const formContent = document.getElementById('form-content');
const confirmation = document.getElementById('confirmation-message');
const data = { date: '', time: '' };
const fullName = document.getElementById('fullname');
const phoneNumber = document.getElementById('phone');
const email = document.getElementById('email');
const turnBack = document.getElementById('turnBack');

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

// I got this part from internet, bu tbh I have no clue how this works.
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
dateInput.min = tomorrow.toISOString().split('T')[0];
// 


console.log(timeButtons);

timeButtons.forEach((radio) => {
  radio.addEventListener('change', function () {
    const selectedTime = radio.value;
    if (selectedTime) {
      selectedTimeText.textContent = selectedTime;
      data.time = selectedTime;
    }
    timeButtons.forEach(otherRadios => otherRadios.parentElement.classList.remove('activeRadio'))
    radio.parentElement.classList.add('activeRadio');
    allowSubmit();
  });
});

fullName.addEventListener('blur', function(){
  if(fullName.value){
    selectedName.textContent = fullName.value
  } else {
    selectedName.textContent = '-'
  }
})

email.addEventListener('blur', function(){
  if(email.value){
    selectedMail.textContent = email.value
  } else {
    selectedMail.textContent = '-'
  }
  if(email.value.length < 7){
    alert('Please enter a valid email address.')
  }
})


phoneNumber.addEventListener('input', function(){
allowSubmit();
})



function allowSubmit() {
  if (data.time && data.date && (phoneNumber.value.length > 7)) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  document.getElementById('confirm-name').textContent = fullName.value;
  document.getElementById('confirm-date').textContent = data.date;
  document.getElementById('confirm-time').textContent = data.time;
  document.getElementById('confirm-email').textContent = email.value;
  document.getElementById('confirm-phone').textContent = phoneNumber.value;

  formContent.classList.add('hidden');
  confirmation.classList.remove('hidden');
});

turnBack.addEventListener('click', function(){
  formContent.classList.remove('hidden');
  confirmation.classList.add('hidden');
})