document.addEventListener("DOMContentLoaded", () => {
  const petFieldset = document.querySelector(".favouritePetFieldset");
  const signUpButton = document.querySelector(".signUp");
  const signUpFieldset = document.querySelector(".signUpCatFieldset");
  const loveCatsButton = document.querySelector(".loveCats");
  petFieldset.addEventListener("change", changeSignup);
  signUpFieldset.addEventListener("change", changeLoveCats);
  function changeSignup(e) {
    let value = e.target.value;
    if (value === "Dog" || value === "Cat") {
      signUpButton.removeAttribute("disabled");
    } else {
      signUpButton.setAttribute("disabled", "");
    }
  }

  function changeLoveCats(e) {
    let value = e.target.value;
    value === "Yes"
      ? loveCatsButton.removeAttribute("disabled")
      : loveCatsButton.setAttribute("disabled", "");
  }
});
