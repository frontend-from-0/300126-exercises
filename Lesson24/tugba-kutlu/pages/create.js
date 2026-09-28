const createUserForm = document.getElementById("createUserForm");
const statusMessage = document.getElementById("statusMessage");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");

createUserForm.addEventListener("submit", (e) => {
  e.preventDefault();

  statusMessage.classList.add("hidden");

  fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      return response.json();
    })
    .then((newUser) => {
      statusMessage.textContent = `User created successfully. New user id: ${newUser.id}`;
      statusMessage.classList.remove("hidden");
      createUserForm.reset();
    })
    .catch((error) => {
      statusMessage.textContent = "An error occured." + error;
      statusMessage.classList.remove("hidden");
    });
});
