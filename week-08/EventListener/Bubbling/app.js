document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const img = document.querySelector(".img-inspector");

  nav.addEventListener("click", moveImage);
  nav.addEventListener("click", zoomImage);

  function moveImage(e) {
    if (e.target.getAttribute("data-direction") === "up") {
    } else if (e.target.getAttribute("data-direction") === "down") {
    } else if (e.target.getAttribute("data-direction") === "left") {
    } else {
      //right
    }
  }

  function zoomImage(e) {
    let currentSize = parseInt(img.style.backgroundSize) || 200;
    img.style.backgroundSize =
      e.target.dataset.direction === "in"
        ? `${currentSize + 20}%`
        : `${currentSize - 20}%`;
  }
});
