const containerForPosts = document.getElementById("posts-container");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      const postCreator = createPostCard(post);
      containerForPosts.appendChild(postCreator);
    });
  });

function createPostCard(post) {
  const savedPost = localStorage.getItem(`Post-${post.id}`);
  const postsData = savedPost ? JSON.parse(savedPost) : null;
  let likeCount = postsData ? postsData.like : 0;
  let disslikeCount = postsData ? postsData.disslike : 0;
  let userLikeStatus = postsData ? postsData.status : null;
  /*First I will create all elements, should look like this;
    <article class="user-post">
      <div class="post-header">
        <div class="user-avatar"></div><span class="userIdText"></span>
        <button class="preferences-for-posts">...</button>
      </div>

      <div class="post-body">
        <div class="post-title"></div>
        <div class="post-text"></div>
      </div>
      
      <div class="post-footer">
        <button class="likeBtn"></button>
        <button class="disslikeBtn"></button>
        <button class="shareBtn"></button>
      </div>
    </article>
  */

  const userPost = document.createElement("article");
  userPost.classList.add("user-post");

  const postHeader = document.createElement("div");
  postHeader.classList.add("post-header");
  const userAvatar = document.createElement("div");
  userAvatar.classList.add("user-avatar");
  userAvatar.innerHTML = '<i class="fa-solid fa-mask fa-"></i>';
  const userName = document.createElement("span");
  userName.classList.add("userIdText");
  userName.textContent = `u/${post.userId}`;
  const prefBtn = document.createElement("button");
  prefBtn.classList.add("preferences-for-posts");
  prefBtn.textContent = "...";

  const postBody = document.createElement("div");
  postBody.classList.add("post-body");
  const postTitle = document.createElement("div");
  postTitle.classList.add("post-title");
  const titleTruncate =
    post.title.length > 40 ? post.title.slice(0, 40) + "..." : post.title;
  postTitle.textContent = titleTruncate;

  const postText = document.createElement("div");
  postText.classList.add("post-text");
  postText.textContent = post.body;

  const postFooter = document.createElement("div");
  postFooter.classList.add("post-footer");
  const likeBtn = document.createElement("button");
  const disslikeBtn = document.createElement("button");
  const shareBtn = document.createElement("button");
  likeBtn.classList.add("likeBtn");
  likeBtn.classList.add("postButtons");
  likeBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i><span class="like-count">${likeCount}</span>`;
  disslikeBtn.classList.add("disslikeBtn");
  disslikeBtn.classList.add("postButtons");
  disslikeBtn.innerHTML = `<i class="fa-solid fa-arrow-down"></i><span class="disslike-count">${disslikeCount}</span>`;
  shareBtn.classList.add("shareBtn");
  shareBtn.classList.add("postButtons");
  shareBtn.innerHTML = '<i class="fa-solid fa-share"></i>';

  userPost.appendChild(postHeader);
  userPost.appendChild(postBody);
  userPost.appendChild(postFooter);
  postHeader.appendChild(userAvatar);
  postHeader.appendChild(userName);
  postHeader.appendChild(prefBtn);
  postBody.appendChild(postTitle);
  postBody.appendChild(postText);
  postFooter.appendChild(likeBtn);
  postFooter.appendChild(disslikeBtn);
  postFooter.appendChild(shareBtn);

  const likeCountText = likeBtn.querySelector(".like-count");

  likeBtn.addEventListener("click", () => {
    if (userLikeStatus === "like") {
      likeCount--;
      userLikeStatus = null;
    } else {
      likeCount++;
      userLikeStatus = "like";
    }

    likeCountText.textContent = likeCount;

    disslikeBtn.disabled = userLikeStatus === "like";

    const newPostsData = {
      name: post.id,
      like: likeCount,
      disslike: disslikeCount,
      status: userLikeStatus,
    };
    localStorage.setItem(`Post-${post.id}`, JSON.stringify(newPostsData));
  });
  const disslikeCountText = disslikeBtn.querySelector(".disslike-count");
  disslikeBtn.addEventListener("click", () => {
    if (userLikeStatus === "disslike") {
      disslikeCount--;
      userLikeStatus = null;
    } else {
      disslikeCount++;
      userLikeStatus = "disslike";
    }

    disslikeCountText.textContent = disslikeCount;

    likeBtn.disabled = userLikeStatus === "disslike";

    const newPostsData = {
      name: post.id,
      like: likeCount,
      disslike: disslikeCount,
      status: userLikeStatus,
    };

    localStorage.setItem(`Post-${post.id}`, JSON.stringify(newPostsData));
  });

  if (userLikeStatus === "like") {
    disslikeBtn.disabled = true;
  }

  if (userLikeStatus === "disslike") {
    likeBtn.disabled = true;
  }

  return userPost;
}
