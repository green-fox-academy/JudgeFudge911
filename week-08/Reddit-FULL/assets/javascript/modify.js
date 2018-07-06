window.onload = () => {
  if (localStorage.getItem('modify') == null) {
    window.location = 'http://localhost:3000/posts';
  }
  const POST_ID = localStorage.getItem('modify');

  fetch('http://localhost:3000/data/posts')
    .then(res => res.json())
    .then(data => {
      data.forEach(e => {
        if (e.post_id == POST_ID) {
          document.querySelector('.titleInput').value = e.title;
          document.querySelector('.urlInput').value = e.url;
        }
      });
    });

  const submitButton = document.querySelector('.submitButton');
  submitButton.addEventListener('click', modifyPost);

  function modifyPost() {
    const title = document.querySelector('.titleInput').value;
    const url = document.querySelector('.urlInput').value;

    const modifiedContent = { post_id: POST_ID, title: title, url: url };

    let postData = (url, data) => {
      return fetch(url, {
        method: 'PUT',
        headers: {
          username: localStorage.getItem('user' || ''),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
          if (data.message == 'ok') {
            localStorage.removeItem('modify');
            window.location = 'http://localhost:3000/posts';
          }
        });
    };

    postData('http://localhost:3000/posts/modify', modifiedContent);
  }
};
