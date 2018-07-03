document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.querySelector(".create-candies");
  const buyButton = document.querySelector(".buy-lollypops");
  const rainButton = document.querySelector(".candy-machine");
  const lollypops = document.querySelector(".lollypops");
  const candies = document.querySelector(".candies");
  const production = document.querySelector('.speed');
  let seconds = 0;
  let generationBonus = 100;

  setInterval(clock, 1000);

  function updateProductionSpeed(){
    production.innerHTML = Math.floor(getNumberOfLollypops() / 10) * generationBonus/100;
  }

  function clock() {
    seconds++;
  }

  function getNumberOfCandies() {
    return parseInt(candies.innerHTML);
  }

  function getNumberOfLollypops() {
    return lollypops.innerHTML.length / 2;
  }

  createButton.addEventListener("click", createCandy);
  buyButton.addEventListener("click", buyLollypop);
  rainButton.addEventListener("click", makeItRain);

  setInterval(() => {
    createCandy(undefined, Math.floor(getNumberOfLollypops() / 10));
    updateProductionSpeed();
  }, 1000);

  function createCandy(e, quantity = 1) {
    candies.innerHTML = getNumberOfCandies() + quantity;
  }

  function buyLollypop() {
    if (getNumberOfCandies() >= 100) {
      lollypops.innerHTML += "\u{1F36D}";
      candies.innerHTML = getNumberOfCandies() - 100;
    } else {
      console.log("Error: not enough candies to buy lolly");
    }
  }

  function makeItRain() {
    generationBonus += 10;
    updateProductionSpeed;
  }
});
