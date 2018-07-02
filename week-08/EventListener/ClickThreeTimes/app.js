document.addEventListener("DOMContentLoaded", () => {
  let seconds = 0;
  function clock() {
    if (seconds < 5) {
      seconds++;
      console.log(seconds);

    } else {
      clearInterval(timer);
    }
  }
  let timer = setInterval(clock, 1000);
  let counter = 0;
  const button = document.querySelector("button");
  const p = document.querySelector("p");
  button.addEventListener("click", ifClicked);
  function ifClicked(e) {
    if (seconds < 5) {
      button.removeEventListener('click', ifClicked);
      console.log("dont do that");
      return;
    } else {
      counter++;
      if (counter === 3) {
        p.innerHTML = "5 seconds ellapsed and clicked 3 times";
      }
    }
  }
});
