const searchParams = new URLSearchParams(window.location.search);
const userId = searchParams.get('userId');

const updateUserForm = document.getElementById('updateUserForm');
const statusMessage = document.getElementById('statusMessage');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const birthDateInput = document.getElementById('birthDate'); // Tarih seçildi

// DummyJSON'dan gelen tarihi HTML Date Input'un kabul edeceği (YYYY-MM-DD) yapıya çevirir
function formatDate(dateString) {
  if (!dateString) return '';
  const parts = dateString.split('-');
  if (parts.length === 3) {
    return `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`;
  }
  return dateString;
}

if (!userId) {
  updateUserForm.classList.add('hidden');
  statusMessage.textContent = 'The user is not found.';
  statusMessage.style.color = 'var(--color-danger)';
  statusMessage.classList.remove('hidden');
} else {

  if (String(userId).startsWith('custom-')) {
    const storedUsers = JSON.parse(localStorage.getItem('customUsers')) || [];
    const foundUser = storedUsers.find(u => u.id === userId);
    
    if(foundUser) {
      firstNameInput.value = foundUser.firstName;
      lastNameInput.value = foundUser.lastName;
      birthDateInput.value = formatDate(foundUser.birthDate); // Tarih forma yazıldı
    } else {
      statusMessage.textContent = 'Custom user not found.';
      statusMessage.classList.remove('hidden');
    }
  } else {
    // Hazır listeden biriyse API'den getir
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to fetch user with id ${userId}`);
        return response.json();
      })
      .then((user) => {
        firstNameInput.value = user.firstName;
        lastNameInput.value = user.lastName;
        birthDateInput.value = formatDate(user.birthDate); // Tarih forma yazıldı
      })
      .catch((error) => {
        statusMessage.textContent = 'An error occured. ' + error;
        statusMessage.style.color = 'var(--color-danger)';
        statusMessage.classList.remove('hidden');
      });
  }
}

updateUserForm.addEventListener('submit', (e) => {
  e.preventDefault();
  statusMessage.classList.add('hidden');

  if (String(userId).startsWith('custom-')) {
    let storedUsers = JSON.parse(localStorage.getItem('customUsers')) || [];
    let userIndex = storedUsers.findIndex(u => u.id === userId);
    
    if(userIndex !== -1) {
      storedUsers[userIndex].firstName = firstNameInput.value;
      storedUsers[userIndex].lastName = lastNameInput.value;
      storedUsers[userIndex].birthDate = birthDateInput.value; // Tarih güncellendi
      localStorage.setItem('customUsers', JSON.stringify(storedUsers));
      
      statusMessage.textContent = `User updated successfully!`;
      statusMessage.style.color = 'var(--color-success)';
      statusMessage.classList.remove('hidden');
    }
    return; 
  }

  // Hazır listeden biriyse API üzerinden güncelle
  fetch(`https://dummyjson.com/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      birthDate: birthDateInput.value // Tarih API'ye gönderildi
    })
  })
  .then(res => {
    if (!res.ok) throw new Error('Failed to update user');
    return res.json();
  })
  .then(data => {
    statusMessage.textContent = `User ${data.firstName} updated successfully!`;
    statusMessage.style.color = 'var(--color-success)';
    statusMessage.classList.remove('hidden');
  })
  .catch(error => {
    statusMessage.textContent = 'An error occured. ' + error;
    statusMessage.style.color = 'var(--color-danger)';
    statusMessage.classList.remove('hidden');
  });
});