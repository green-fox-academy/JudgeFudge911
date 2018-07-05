window.onload = () => {
  const submitButton = document.querySelector("#submit");
  const username = document.querySelector("#usernameInput");
  const password = document.querySelector("#passwordInput");
  submitButton.addEventListener("click", submitForm);

  let users = [];

  fetch("http://localhost:3000/data/users")
    .then(res => res.json())
    .then(data => {
      users = data;
    });

  function submitForm(e) {
    //TODO run on input field enter keydown event too
    e.preventDefault();
    users.forEach(element => {
      if (element.name == username.value) {
        if (element.password == password.value) {
          localStorage.setItem("user", username.value);
          window.location = "http://localhost:3000/posts";
        } else {
          //TODO tell user input is not valid
        }
      }
    });
  }
};
