window.onload = () => {
  const postsContainer = document.querySelector('.postsContainer');
  const addButton = document.querySelector('.addPost');
  postsContainer.innerHTML = '';

  addButton.addEventListener('click', redirectAddPost);

  function redirectAddPost(e) {
    window.location = 'http://localhost:3000/posts/add';
  }

  fetch('http://localhost:3000/data/posts', {
    headers: {
      username: localStorage.getItem('user') || ''
    }
  })
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      data.forEach(e => {
        createPost(e);
      });
    })
    .catch(err => {
      console.log(err);
      // window.location = '/signin';
    });

  function createPost(post) {
    let card = document.createElement('div');
    card.classList.add('card');

    let title = document.createElement('h1');
    title.classList.add('title');
    title.innerHTML = post.title;

    let upvote = document.createElement('img');
    //TODO check if he upvoted it
    upvote.src =
      post.name == localStorage.getItem('user')
        ? '../images/upvoted.png'
        : '../images/upvote.png';
    upvote.classList.add('upvote');

    let downvote = document.createElement('img');
    //TODO check if he upvoted it
    downvote.src =
      post.name == localStorage.getItem('user')
        ? '../images/downvoted.png'
        : '../images/downvote.png';
    downvote.classList.add('downvote');

    let score = document.createElement('p');
    score.classList.add('score');
    score.innerHTML = post.score;

    let scoreContainer = document.createElement('div');
    scoreContainer.classList.add('scoreContainer');

    appendChildren(scoreContainer, upvote, score, downvote);

    let description = document.createElement('p');
    description.classList.add('description');
    description.innerHTML = `submitted ${post.timestamp} hours ago by ${
      post.name == localStorage.getItem('user') ? 'Me' : post.name
    }`;

    let contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');
    appendChildren(contentContainer, scoreContainer, description);

    let buttonContainer = null;

    if (post.name == localStorage.getItem('user')) {
      let modify = document.createElement('button');
      modify.classList.add('modify');
      modify.setAttribute('data-post_id', post.post_id);
      modify.innerHTML = 'Modify';
      modify.addEventListener('click', modifyPost);

      let remove = document.createElement('button');
      remove.classList.add('remove');
      remove.setAttribute('data-post_id', post.post_id);
      remove.innerHTML = 'Remove';
      remove.addEventListener('click', removePost);

      buttonContainer = document.createElement('div');
      buttonContainer.classList.add('buttonContainer');
      appendChildren(buttonContainer, modify, remove);
      card.appendChild(buttonContainer);
    }

    appendChildren(card, title, contentContainer);
    postsContainer.appendChild(card);
  }

  function appendChildren(parent, ...children) {
    children.forEach(e => {
      parent.appendChild(e);
    });
  }

  function modifyPost(e) {
    localStorage.setItem('modify', `${e.target.getAttribute('data-post_id')}`);
    window.location = 'http://localhost:3000/posts/modify';
  }

  function removePost(e){

  }
};
