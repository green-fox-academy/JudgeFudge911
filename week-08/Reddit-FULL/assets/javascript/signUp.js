window.onload = () => {
  const submitButton = document.querySelector('#submit');
  const username = document.querySelector('#usernameInput');
  const password = document.querySelector('#passwordInput');
  submitButton.addEventListener('click', submitForm);

  let users = [];

  function checkIfUsernameTaken() {
    users.forEach(element => {
      if (element.name == username.value) {
        username.value = '';
        password.value = '';
        alert('Username already taken!');
        return true;
      } else {
        return false;
      }
    });
  }

  fetch('http://localhost:3000/data/users')
    .then(res => res.json())
    .then(data => {
      users = data;
    });

  function submitForm(e) {
    //TODO run on input field enter keydown event too
    e.preventDefault();
    if (!checkIfUsernameTaken()) {
      let postData = (url, data) => {
        return fetch(url, {
          method: 'POST',
          headers: {
            username: `${username.value}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data => {
            if (data.message == 'ok') {
              localStorage.setItem('user', username.value);
              window.location = 'http://localhost:3000/posts';
            }
          });
        //TODO error handling
      };
      postData('http://localhost:3000/signup', { password: password.value });
    }
  }
};
