
public class Tree extends Plants {

  public Tree(String color){
    this.color = color;
  }


  @Override
  boolean needWater() {
    return (water < 10);
  }

  @Override
  void getWatered(int amountOfWater) {
    water += Math.round(amountOfWater * 0.4);
  }

}