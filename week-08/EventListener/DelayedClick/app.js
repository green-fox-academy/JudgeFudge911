document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const p = document.querySelector("p");
  button.addEventListener("click", delayedFunction);

  function delayedFunction(e) {
    setTimeout(() => {
      p.innerHTML = "2 seconds ellapsed";
    }, 2000);
  }
});
