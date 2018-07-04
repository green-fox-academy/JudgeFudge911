document.addEventListener("DOMContentLoaded", () => {
  const petFieldset = document.querySelector(".favouritePetFieldset");
  const signUpButton = document.querySelector(".signUp");
  const signUpFieldset = document.querySelector(".signUpCatFieldset");
  const loveCatsButton = document.querySelector(".loveCats");
  const buttonContainer = document.querySelector(".buttonContainer");
  const viktor = document.querySelector("#Viktor");

  petFieldset.addEventListener("change", changeSignup);
  signUpFieldset.addEventListener("change", changeLoveCats);
  buttonContainer.addEventListener("click", alertSucces);

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
    if (value === "No" && viktor.checked) {
      signUpButton.removeAttribute("disabled");
    }
    value === "Yes"
      ? loveCatsButton.removeAttribute("disabled")
      : loveCatsButton.setAttribute("disabled", "");
  }

  function alertSucces(e) {
    if (loveCatsButton.hasAttribute("disabled")) {
      alert("Sigh, we still added you to the cat facts list");
    } else {
      alert("Thank you, you've succesfully signed up for cat facts.");
    }
  }
});
