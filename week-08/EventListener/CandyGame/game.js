document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.querySelector(".create-candies");
  const buyButton = document.querySelector(".buy-lollypops");
  const rainButton = document.querySelector(".candy-machine");
  const lollypops = document.querySelector(".lollypops");
  const candies = document.querySelector(".candies");
  let numberOfLollypops = lollypops.childElementCount;
  let numberOfCandies = candies.innerHTML;

  createButton.addEventListener("click", createCandy);
  buyButton.addEventListener("click", buyLollypop);
  rainButton.addEventListener("click", makeItRain);

  function createCandy() {}

  function buyLollypop() {
      console.log(numberOfCandies);

    if (numberOfCandies >= 10) {
      lollypops.innerHTML += "\u{1F36D}";
    } else {
      console.log("Error: not enough candies to buy lolly");
    }
  }

  function generateCandy() {}

  //TODO: display Candies/seconds

  function makeItRain() {}
});
