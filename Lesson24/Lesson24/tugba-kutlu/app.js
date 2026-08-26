const fetchBtn = document.getElementById("fetchUsersButton");
const container = document.getElementById("container");
const statusMessage = document.getElementById("statusMessage");

fetchBtn.addEventListener("click", () => {
  statusMessage.classList.add("hidden");
  fetch("https://dummyjson.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      return response.json();
    })
    .then((data) => {
      data.users.map((user) => createUserCard(user));
    })
    .catch((error) => {
      statusMessage.textContent = "An error occured." + error;
      statusMessage.classList.remove("hidden");
    });
});

function createUserCard(user) {
  const userCard = document.createElement("li");
  userCard.classList.add("card");

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const title = document.createElement("h2");
  title.classList.add("card-title");
  title.textContent = user.firstName + " " + user.lastName;

  const cardBody = document.createElement("p");
  cardBody.classList.add("card-body");
  cardBody.textContent = "Date of birth: " + user.birthDate;

  cardInfo.appendChild(title);
  cardInfo.appendChild(cardBody);

  const updateBtn = document.createElement("a");
  updateBtn.textContent = "Update User";
  updateBtn.setAttribute("href", `./pages/update.html?userId=${user.id}`);
  updateBtn.classList.add("button", "button--success");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete User";
  deleteBtn.classList.add("button", "button--danger");
  deleteBtn.setAttribute(
    "aria-label",
    `Delete ${user.firstName} ${user.lastName}`,
  );
  deleteBtn.addEventListener("click", () => deleteUser(user.id, userCard));

  const cardActions = document.createElement("div");
  cardActions.classList.add("card-actions");
  cardActions.appendChild(updateBtn);
  cardActions.appendChild(deleteBtn);

  userCard.appendChild(cardInfo);
  userCard.appendChild(cardActions);

  container.appendChild(userCard);
}

function deleteUser(userId, userCard) {
  statusMessage.classList.add("hidden");

  fetch(`https://dummyjson.com/users/${userId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to delete user ${userId}`);
      }
      return response.json();
    })
    .then(() => {
      userCard.remove();
      statusMessage.textContent = "User deleted succesfully.";
      statusMessage.classList.remove("hidden");
    })
    .catch((error) => {
      statusMessage.textContent = "An error occured." + error;
      statusMessage.classList.remove("hidden");
    });
}
