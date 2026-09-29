const createUserForm = document.getElementById("createUserForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const statusMessage = document.getElementById("statusMessage");

createUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  statusMessage.classList.add("hidden");

  const newUser = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
  };

  fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      return response.json();
    })
    .then((data) => {
      statusMessage.textContent = "User created successfully!";
      statusMessage.classList.remove("hidden");
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1500);
    })
    .catch((error) => {
      statusMessage.textContent = "An error occured: " + error;
      statusMessage.classList.remove("hidden");
    });
});
