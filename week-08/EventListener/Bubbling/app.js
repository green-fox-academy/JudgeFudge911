document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const img = document.querySelector(".img-inspector");

  nav.addEventListener("click", moveImage);
  nav.addEventListener("click", zoomImage);

  function moveImage(e) {
      console.log(img.backgroundPosition);

    if (e.target.dataset.action === "move") {
      let currentBackgroundPositionX = parseInt(img.style.backgroundPositionX) || 0;
      let currentBackgroundPositionY = parseInt(img.style.backgroundPositionY) || 0;
      if (e.target.dataset.direction === "up") {
        img.style.backgroundPositionY = `${currentBackgroundPositionY - 10}px`;
      }
      if (e.target.dataset.direction === "down") {
        img.style.backgroundPositionY = `${currentBackgroundPositionY + 10}px`;
      }
      if (e.target.dataset.direction === "right") {
        img.style.backgroundPositionX = `${currentBackgroundPositionX + 10}px`;
      }
      if (e.target.dataset.direction === "left") {
        img.style.backgroundPositionX = `${currentBackgroundPositionX - 10}px`;
      }
    }
  }

  function zoomImage(e) {
    if (e.target.dataset.action === "zoom") {
      let currentSize = parseInt(img.style.backgroundSize) || 200;
      img.style.backgroundSize =
        e.target.dataset.direction === "in"
          ? `${currentSize + 20}%`
          : `${currentSize - 20}%`;
    }
  }
});
