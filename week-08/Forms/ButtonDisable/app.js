document.addEventListener("DOMContentLoaded", () => {
  const petFieldset = document.querySelector(".favouritePetFieldset");
  const signUpButton = document.querySelector('.signUp');

  const loveCatsButton = document.querySelector('.loveCats');
  petFieldset.addEventListener("change", changeSignup);

  function changeSignup(e) {
      let value = e.target.value;
    if(value === "Dog" || value === "Cat"){
        signUpButton.removeAttribute('disabled');
    } else {
        signUpButton.setAttribute('disabled', "");
    }
  }
});
