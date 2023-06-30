const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const mainEl = document.getElementById("main");

const postSeparatorText = `<div class="post-separator container"></div>`;

for (let i = 0; i < posts.length; i++) {
  let { name, username, location, avatar, post, comment, likes } = posts[i];
  mainEl.innerHTML += buildPost(name, username, location, avatar, post, comment, likes, i);

  if (i < posts.length - 1) {
    mainEl.innerHTML += postSeparatorText;
  }
  console.log(`like-btn-${i}`);
}

// add like btn functionality
const likedStatus = new Array(posts.length).fill(false);

for (let i = 0; i < posts.length; i++) {
  const btn = document.getElementById(`like-btn-${i}`);
  btn.addEventListener("click", function () {
    if (likedStatus[i] === false) {
      likePost(i);
      likedStatus[i] = true;
      toggleRedHeart(btn);
    } else {
      unlikePost(i);
      likedStatus[i] = false;
      toggleBlankHeart(btn);
    }
  });
}

function buildPost(name, username, location, avatar, post, comment, likes, i) {
  const postText = `
<div class="container">
        <section class="post">
          <div class="post--info">
            <img src="${avatar}" class="avatar" alt="avatar for ${name}" />
            <div class="col">
              <h1 class="post--name">${name}</h1>
              <p class="post--location">${location}</p>
            </div>
          </div>

          <div class="post--content">
            <img class="post--image" src="${post}" alt="Vincent van Gogh" />
          </div>

          <div class="col">
            <div class="post--options">
              <img class="post--icon like-btn" id="like-btn-${i}" src="images/icon-heart.png" alt="heart icon" />
              <img class="post--icon" src="images/icon-comment.png" alt="heart icon" />
              <img class="post--icon" src="images/icon-dm.png" alt="heart icon" />
            </div>
            <div class="row start bold">
              <p id="likes-${i}">${likes} </p>
              <p class="likes--text">likes</p>
            </div>
          </div>

          <div class="comments col">
            <p class="comment">
              <span class="username">${username}</span> <span class="comment">${comment}</span>
            </p>
          </div>
        </section>
      </div>
`;
  return postText;
}

function likePost(index) {
  const likesEl = document.getElementById(`likes-${index}`);
  let likesNum = Number(likesEl.textContent);
  likesNum++;
  likesEl.textContent = likesNum;
}

function unlikePost(index) {
  const likesEl = document.getElementById(`likes-${index}`);
  let likesNum = Number(likesEl.textContent);
  likesNum--;
  likesEl.textContent = likesNum;
}

function toggleRedHeart(img) {
  img.src = "images/red-heart.png";
  img.classList.remove("post--icon");
  img.classList.add("red-heart");
}

function toggleBlankHeart(img) {
  img.src = "images/icon-heart.png";
  img.classList.remove("red-heart");
  img.classList.add("post--icon");
}
