import java.util.ArrayList;
import java.util.List;

public class Garden {

  List<Flower> flowers;
  List<Tree> trees;

  public void addFlower(Flower flower){
    flowers.add(flower);
  }

  public void addTree(Tree tree){
    trees.add(tree);
  }



  public void watering(int amountOfWatering) {

    List<Plants> plants = new ArrayList<>();
    plants.addAll(flowers);
    plants.addAll(trees);
    int counter = 0;
    for (Plants plant :
            plants) {
      if (plant.needWater()) {
        counter++;
      }
    }

    amountOfWatering /= counter;

    for (Plants plant :
            plants) {
      if (plant.needWater()) {
        plant.getWatered(amountOfWatering);
      }
    }
  }
}
