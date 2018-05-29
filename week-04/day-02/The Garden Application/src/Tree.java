public class Tree extends Plants {

  @Override
  boolean needWater() {
    return (water < 10);
  }

  @Override
  void getWatered(int amountOfWater) {
    water += Math.round(amountOfWater * 0.4);
  }

}
