const searchParams = new URLSearchParams(window.location.search);

const userId = searchParams.get("userId");

const updateUserForm = document.getElementById("updateUserForm");
const statusMessage = document.getElementById("statusMessage");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");

if (!userId) {
  updateUserForm.classList.add("hidden");
  statusMessage.textContent = "The user is not found.";
  statusMessage.classList.remove("hidden");
}

fetch(`https://dummyjson.com/users/${userId}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch user with id ${userId}`);
    }
    return response.json();
  })
  .then((user) => {
    firstNameInput.value = user.firstName;
    lastNameInput.value = user.lastName;
  })
  .catch((error) => {
    statusMessage.textContent = "An error occured." + error;
    statusMessage.classList.remove("hidden");
  });

updateUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  statusMessage.classList.add("hidden");

  const updateUser = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
  };

  fetch(`https://dummyjson.com/users/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateUser),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to update user");
      }
      return response.json();
    })
    .then((data) => {
      statusMessage.textContent = "User updated successfully!";
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
