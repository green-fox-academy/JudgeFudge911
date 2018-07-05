window.onload = () => {
  const submitButton = document.querySelector('.submitButton');
  submitButton.addEventListener('click', addPost);

  function addPost() {
    const title = document.querySelector('.titleInput').value;
    const url = document.querySelector('.urlInput').value;
    console.log(url);

    const newPost = { title: title, url: url };

    let postData = (url, data) => {
      return fetch(url, {
        method: 'POST',
        headers: {
          username: localStorage.getItem('user' || ''),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json());
    };

    postData('http://localhost:3000/posts', newPost);
  }
};
