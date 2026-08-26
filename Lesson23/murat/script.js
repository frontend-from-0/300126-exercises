fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    const mainElement = document.getElementById("container");

    json.forEach((element) => {
      const users = document.createElement("div");
      users.classList.add("card");
      const elementTitle = document.createElement("h2");
      elementTitle.classList.add("element-title");
      elementTitle.textContent = element.title;
      const elementBody = document.createElement("p");
      elementBody.classList.add("element-body");
      elementBody.textContent = element.body;
      users.appendChild(elementTitle);
      users.appendChild(elementBody);
      mainElement.appendChild(users);
    });
  });

const scrollTopBtn = document.getElementById("scrollTopBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn")
const searchInput = document.getElementById("searchInput")

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

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
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
})