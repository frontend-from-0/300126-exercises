const container = document.getElementById("post-container");

container.innerHTML = '<div class="spinner"></div><p>Loading...</p>';
container.classList.add("loading");

let allPosts = [];

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    allPosts = posts;

    container.classList.remove("loading");

    displayPosts(allPosts);
  });

function displayPosts(posts) {
  container.textContent = "";

  if (posts.length === 0) {
    const noResults = document.createElement("div");
    noResults.classList.add("no-results");

    const message = document.createElement("p");
    message.textContent = "No posts found.";
    message.classList.add("no-results-message");

    const backButton = document.createElement("button");
    backButton.textContent = "Back to Home Page";
    backButton.classList.add("back-home-btn");

    backButton.addEventListener("click", function () {
      displayPosts(allPosts);

      searchInput.value = "";
      searchInput.classList.remove("active");
      searchBtn.classList.remove("hidden");
    });

    noResults.appendChild(message);
    noResults.appendChild(backButton);

    container.appendChild(noResults);

    return;
  }

  posts.forEach((post) => {
    const postArticle = document.createElement("article");
    postArticle.classList.add("post");

    const title = document.createElement("h2");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    postArticle.appendChild(title);
    postArticle.appendChild(body);

    container.appendChild(postArticle);
  });
}

const searchBtn = document.querySelector("#search-btn");
const searchInput = document.querySelector("#searchInput");

searchBtn.addEventListener("click", function () {
  searchInput.classList.add("active");
  searchBtn.classList.add("hidden");

  searchInput.focus();
});

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const searchText = searchInput.value.toLowerCase();

    const filteredPosts = allPosts.filter((post) => {
      return (
        post.title.toLowerCase().includes(searchText) ||
        post.body.toLowerCase().includes(searchText)
      );
    });

    displayPosts(filteredPosts);
  }
});
const backToTop = document.querySelector("#back-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
