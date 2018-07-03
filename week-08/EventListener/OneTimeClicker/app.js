document.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelector("button");

  button.addEventListener("click", logTime);

  function logTime(e) {
    console.log(e);
    console.log(e.timeStamp);
  /*   button.disabled = true;
    button.removeEventListener("click", logTime); */
  }
});
