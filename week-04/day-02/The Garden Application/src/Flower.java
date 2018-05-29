public class Flower extends Plants {

  public Flower(String color){
    this.color = color;
  }

  @Override
  boolean needWater() {
    return (water < 5);
  }

  @Override
  void getWatered(int amountOfWater) {
    water += Math.round(amountOfWater * 0.75);
  }
}
