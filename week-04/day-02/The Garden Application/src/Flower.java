public class Flower extends Plants {

  @Override
  boolean needWater() {
    return (water < 5);
  }

  @Override
  void getWatered(int amountOfWater) {
    water += Math.round(amountOfWater * 0.75);
  }
}
