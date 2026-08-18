const createUserForm = document.getElementById('createUserForm');
const statusMessage = document.getElementById('statusMessage');

createUserForm.addEventListener('submit', (e) => {
  e.preventDefault();
  statusMessage.classList.add('hidden');

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;
  const birthDate = document.getElementById('birthDate').value; // Tarih formdan alınıyor

  fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      age: age,
      birthDate: birthDate // API'ye gönderiliyor
    })
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Failed to create user');
    }
    return res.json();
  })
  .then(data => {
    // API'den gelen veriyi kendi özel listemize ekliyoruz
    const customUser = {
      id: 'custom-' + Date.now(),
      firstName: data.firstName,
      lastName: data.lastName,
      birthDate: data.birthDate // Doğum tarihi eklendi
    };

    const storedUsers = JSON.parse(localStorage.getItem('customUsers')) || [];
    storedUsers.push(customUser);
    localStorage.setItem('customUsers', JSON.stringify(storedUsers));

    statusMessage.textContent = `User ${data.firstName} created successfully!`;
    statusMessage.style.color = 'var(--color-success)';
    statusMessage.classList.remove('hidden');
    createUserForm.reset(); 
  })
  .catch(error => {
    statusMessage.textContent = 'An error occurred. ' + error;
    statusMessage.style.color = 'var(--color-danger)';
    statusMessage.classList.remove('hidden');
  });
});