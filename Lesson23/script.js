const postsContainer = document.getElementById("posts-container");
const randomButton = document.getElementById("random-button");

let posts = [];
let currentIndex = -1;

function displayPost(index) {
  const post = posts[index];

  postsContainer.innerHTML = "";

  const postElement = document.createElement("article");
  const titleElement = document.createElement("h2");
  const bodyElement = document.createElement("p");

  titleElement.textContent = post.title;
  bodyElement.textContent = post.body;

  postElement.classList.add("post-card");

  postElement.appendChild(titleElement);
  postElement.appendChild(bodyElement);

  postsContainer.appendChild(postElement);
}

function showRandomPost() {
  let randomIndex = Math.floor(Math.random() * posts.length);

  if (posts.length > 1 && randomIndex === currentIndex) {
    randomIndex = (randomIndex + 1) % posts.length;
  }

  currentIndex = randomIndex;

  displayPost(currentIndex);
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    return response.json();
  })
  .then((data) => {
    console.log("Posts:", data);

    posts = data;

    randomButton.disabled = false;
    randomButton.textContent = "Show Another Random Post";

    showRandomPost();
  })
  .catch((error) => {
    console.error("Error:", error);

    postsContainer.textContent = "Unable to load posts.";
    randomButton.textContent = "Posts unavailable";
  });

randomButton.addEventListener("click", showRandomPost);
