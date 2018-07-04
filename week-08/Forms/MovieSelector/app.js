document.addEventListener("DOMContentLoaded", () => {
  const genre = document.querySelector("#genre");
  const movies = document.querySelector("#movies");
  genre.addEventListener("change", filterOptions);

  function filterOptions(e) {
    let value = e.target.value;
    Array.from(movies).forEach(e => {
      if (!e.classList.contains(value)) {
        e.setAttribute("disabled", "");
      } else {
        e.removeAttribute("disabled");
      }
    });
  }
});
