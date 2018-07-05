window.onload = () => {
  const postsContainer = document.querySelector(".postsContainer");
  postsContainer.innerHTML = "";

  fetch("http://localhost:3000/data/posts")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      data.forEach(e => {
        createPost(e);
      });
    });

  function createPost(post) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.addEventListener("click", buttonHandler);

    let title = document.createElement("h1");
    title.classList.add("title");
    title.innerHTML = post.title;

    let score = document.createElement("p");
    score.classList.add("score");
    score.innerHTML = post.score;

    let description = document.createElement("p");
    description.classList.add("description");
    description.innerHTML = `submitted ${post.timestamp} hours ago by ${
      post.name
    }`;

    let modify = document.createElement("button");
    modify.classList.add("modify");

    let remove = document.createElement("button");
    remove.classList.add("remove");

    appendChildren(card, title, score, description, modify, remove);
    postsContainer.appendChild(card);
  }

  function appendChildren(parent, ...children) {
    children.forEach(e => {
      parent.appendChild(e);
    });
  }

  function buttonHandler(e) {
    //TODO handle modify and remove
  }
};
