document.addEventListener("DOMContentLoaded", () => {
  const genre = document.querySelector("#genre");
  const movies = document.querySelector("#movies");
  const result = document.querySelector(".result");
  genre.addEventListener("change", filterOptions);
  movies.addEventListener("change", renderMovieTitle);

  function filterOptions(e, genre) {
    let value = genre || e.target.value;
    Array.from(movies).forEach(e => {
      if (!e.classList.contains(value)) {
        e.disabled = true;
      } else {
        e.disabled = false;
      }
    });
  }

  function renderMovieTitle(e) {
    let value = e.target.value;
    result.innerHTML = `The selected movie is: ${value}`;
  }
});
