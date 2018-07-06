"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const pass = document.querySelector(".pass");
  const rePass = document.querySelector(".retype");
  const button = document.querySelector("button");
  const form = document.querySelector('form');

  button.addEventListener("click", e => {
    e.preventDefault();
    if (pass.value === rePass.value) {
        form.submit();
    } else {
      alert("Passwords doesn't match, please try again!");
    }
  });
});

