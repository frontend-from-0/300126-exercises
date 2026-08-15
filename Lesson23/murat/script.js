const scrollTopBtn = document.getElementById("scrollTopBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn")
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    const mainElement = document.getElementById("container");

    json.forEach((element) => {
      const postContainer = document.createElement("div");
      postContainer.classList.add("card");
      const elementTitle = document.createElement("h2");
      elementTitle.classList.add("element-title");
      elementTitle.textContent = element.title;
      const elementBody = document.createElement("p");
      elementBody.classList.add("element-body");
      elementBody.textContent = element.body;
      postContainer.appendChild(elementTitle);
      postContainer.appendChild(elementBody);
      mainElement.appendChild(postContainer);
    });
  });

  scrollTopBtn.classList.add("btn");
themeToggleBtn.classList.add("btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme")
})


function filterPosts(){
  const searchTerm = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const titleText = card.querySelector(".element-title").textContent.toLowerCase();
    const bodyText = card.querySelector(".element-body").textContent.toLowerCase();

    const fullContent = titleText + " " + bodyText;

    if (fullContent.includes(searchTerm)){
      card.classList.remove("hide")
    } else {
      card.classList.add("hide")
    }
  })
}


searchInput.addEventListener("input", filterPosts);
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  filterPosts();
});
searchInput.addEventListener("blur", filterPosts);