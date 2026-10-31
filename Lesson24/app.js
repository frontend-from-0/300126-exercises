function apiRequest(url, options, errorMessage) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(errorMessage);
    }

    return response.json();
  });
}

function showMessage(element, message, type = "error") {
  element.textContent = message;

  element.classList.remove("hidden");
  element.classList.remove("status-message--success", "status-message--error");

  element.classList.add("status-message--" + type);
}

function hideMessage(element) {
  element.classList.add("hidden");
}

function getUserId() {
  return window.location.search.split("=")[1];
}

function getUserFormData() {
  return {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    age: Number(document.getElementById("age").value),
    phone: document.getElementById("phone").value,
    birthDate: document.getElementById("birthDate").value,
    gender: document.getElementById("gender").value,
    username: document.getElementById("username").value,
  };
}

function getNextUserId() {
  return apiRequest(
    "https://dummyjson.com/users?limit=0",
    undefined,
    "Failed to fetch users",
  ).then((data) => {
    return data.users.length + 1;
  });
}

function fillUserForm(user) {
  document.getElementById("userId").value = user.id;
  document.getElementById("firstName").value = user.firstName;
  document.getElementById("lastName").value = user.lastName;
  document.getElementById("email").value = user.email;
  document.getElementById("age").value = user.age;
  document.getElementById("phone").value = user.phone;
  document.getElementById("birthDate").value = user.birthDate;
  document.getElementById("gender").value = user.gender;
  document.getElementById("username").value = user.username;
}

if (document.getElementById("fetchUsersButton")) {
  const fetchBtn = document.getElementById("fetchUsersButton");
  const container = document.getElementById("container");
  const statusMessage = document.getElementById("statusMessage");

  fetchBtn.addEventListener("click", () => {
    hideMessage(statusMessage);
    container.innerHTML = "";

    apiRequest(
      "https://dummyjson.com/users",
      undefined,
      "Failed to fetch users",
    )
      .then((data) => {
        data.users.forEach((user) => createUserCard(user));
      })
      .catch((error) => {
        showMessage(statusMessage, "An error occurred. " + error);
      });
  });

  function createUserCard(user) {
    const userCard = document.createElement("li");
    userCard.classList.add("card");

    const title = document.createElement("h2");
    title.classList.add("card-title");
    title.textContent = user.firstName + " " + user.lastName;

    const cardBody = document.createElement("p");
    cardBody.classList.add("card-body");
    cardBody.textContent = "Date of birth: " + user.birthDate;

    const infoBtn = document.createElement("a");
    infoBtn.textContent = "User Information";
    infoBtn.href = `./pages/user.html?userId=${user.id}`;
    infoBtn.classList.add("button", "button--success");

    userCard.appendChild(title);
    userCard.appendChild(cardBody);
    userCard.appendChild(infoBtn);

    container.appendChild(userCard);
  }
}

if (document.getElementById("userForm")) {
  const userId = getUserId();

  const userForm = document.getElementById("userForm");
  const statusMessage = document.getElementById("statusMessage");

  const updateBtn = document.getElementById("updateUserButton");
  const saveBtn = document.getElementById("saveUserButton");
  const cancelBtn = document.getElementById("cancelUpdateButton");
  const deleteBtn = document.getElementById("deleteUserButton");

  const editableInputs = [
    document.getElementById("firstName"),
    document.getElementById("lastName"),
    document.getElementById("email"),
    document.getElementById("age"),
    document.getElementById("phone"),
    document.getElementById("birthDate"),
    document.getElementById("gender"),
    document.getElementById("username"),
  ];

  let originalUser;

  if (!userId) {
    showMessage(statusMessage, "The user is not found.");
    userForm.classList.add("hidden");
  } else {
    apiRequest(
      `https://dummyjson.com/users/${userId}`,
      undefined,
      "Failed to fetch user",
    )
      .then((user) => {
        originalUser = user;

        fillUserForm(user);

        deleteBtn.href = `./delete.html?userId=${user.id}`;
      })
      .catch((error) => {
        showMessage(statusMessage, "An error occurred. " + error);
        userForm.classList.add("hidden");
      });
  }

  function setEditing(disabled) {
    editableInputs.forEach((input) => {
      input.disabled = disabled;
    });

    updateBtn.classList.toggle("hidden", !disabled);
    saveBtn.classList.toggle("hidden", disabled);
    cancelBtn.classList.toggle("hidden", disabled);
    deleteBtn.classList.toggle("hidden", !disabled);
  }

  updateBtn.addEventListener("click", () => {
    setEditing(false);
  });

  cancelBtn.addEventListener("click", () => {
    fillUserForm(originalUser);

    setEditing(true);

    hideMessage(statusMessage);
  });

  saveBtn.addEventListener("click", () => {
    const updatedUser = getUserFormData();

    apiRequest(
      `https://dummyjson.com/users/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      },
      "Failed to update user",
    )
      .then((user) => {
        originalUser = {
          ...originalUser,
          ...user,
        };

        fillUserForm(originalUser);

        setEditing(true);

        showMessage(statusMessage, "User created successfully!", "success");
      })
      .catch((error) => {
        showMessage(statusMessage, "An error occurred. " + error);
      });
  });
}

if (document.getElementById("confirmDeleteButton")) {
  const userId = getUserId();

  const userDetails = document.getElementById("userDetails");
  const statusMessage = document.getElementById("statusMessage");

  const confirmationMessage = document.getElementById("confirmationMessage");
  const successMessage = document.getElementById("successMessage");

  const confirmDeleteBtn = document.getElementById("confirmDeleteButton");
  const cancelDeleteBtn = document.getElementById("cancelDeleteButton");

  if (!userId) {
    showMessage(statusMessage, "The user is not found.");
    confirmationMessage.classList.add("hidden");
  } else {
    apiRequest(
      `https://dummyjson.com/users/${userId}`,
      undefined,
      "Failed to fetch user",
    )
      .then((user) => {
        displayDeleteUser(user);

        cancelDeleteBtn.href = `./user.html?userId=${user.id}`;
      })
      .catch((error) => {
        showMessage(statusMessage, "An error occurred. " + error);
        confirmationMessage.classList.add("hidden");
      });
  }

  function displayDeleteUser(user) {
    const title = document.createElement("h3");
    title.textContent = user.firstName + " " + user.lastName;

    const userInfo = [
      "User ID: " + user.id,
      "Email: " + user.email,
      "Phone: " + user.phone,
      "Age: " + user.age,
      "Username: " + user.username,
    ];

    userDetails.appendChild(title);

    userInfo.forEach((info) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = info;

      userDetails.appendChild(paragraph);
    });
  }

  confirmDeleteBtn.addEventListener("click", () => {
    confirmDeleteBtn.disabled = true;

    apiRequest(
      `https://dummyjson.com/users/${userId}`,
      {
        method: "DELETE",
      },
      "Failed to delete user",
    )
      .then(() => {
        confirmationMessage.classList.add("hidden");
        successMessage.classList.remove("hidden");
      })
      .catch((error) => {
        showMessage(statusMessage, "An error occurred. " + error);
        confirmDeleteBtn.disabled = false;
      });
  });
}

if (document.getElementById("createUserForm")) {
  const createUserForm = document.getElementById("createUserForm");
  const statusMessage = document.getElementById("statusMessage");
  const createUserButton = document.getElementById("createUserButton");
  const cancelButton = document.getElementById("cancelButton");
  const homeButton = document.getElementById("homeButton");

  const userIdInput = document.getElementById("userId");
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const usernameInput = document.getElementById("username");

  let nextUserId;

  getNextUserId()
    .then((userId) => {
      nextUserId = userId;
      userIdInput.value = nextUserId;
    })
    .catch((error) => {
      showMessage(statusMessage, "An error occurred. " + error);
    });

  function generateUsername() {
    usernameInput.value =
      firstNameInput.value.trim().toLowerCase() +
      lastNameInput.value.trim().charAt(0).toLowerCase();
  }

  firstNameInput.addEventListener("input", generateUsername);
  lastNameInput.addEventListener("input", generateUsername);

  createUserForm.addEventListener("submit", (event) => {
    event.preventDefault();

    hideMessage(statusMessage);

    if (!nextUserId) {
      showMessage(statusMessage, "User ID is not available yet.");
      return;
    }

    const newUser = {
      id: nextUserId,
      ...getUserFormData(),
    };

    apiRequest(
      "https://dummyjson.com/users/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      },
      "Failed to create user",
    )
      .then((user) => {
        showMessage(statusMessage, "User created successfully!", "success");

        const inputs = createUserForm.querySelectorAll("input");

        inputs.forEach((input) => {
          input.disabled = true;
        });

        createUserButton.classList.add("hidden");
        cancelButton.classList.add("hidden");

        homeButton.classList.remove("hidden");

        console.log("API response:", user);
      })
      .catch((error) => {
        showMessage(statusMessage, "An error occurred. " + error);
      });
  });
}
