import java.util.ArrayList;
import java.util.List;

public class Garden {

  List<Flower> flowers;
  List<Tree> trees;

  public void addFlower(Flower... flower){
    for (Flower element :
            flower) {
      flowers.add(element);
    }
  }

  public void addTree(Tree... tree){
    for (Tree element :
            tree) {
      trees.add(element);
    }
  }

  public void checkStatus(){

    List<Plants> plants = listPlants();
    String type = "";
    String watering = "";

    for (Plants plant :
            plants) {
      if (plant instanceof Flower){
        type = "Flower";
      } else {
        type = "Tree";
      }
      if(plant.needWater()){
        watering = " needs water";
      } else {
        watering = " doesn't need water";
      }
      System.out.println("The " + plant.color + " " + type + watering );
    }

  }

  public List<Plants> listPlants(){
    List<Plants> plants = new ArrayList<>();
    plants.addAll(flowers);
    plants.addAll(trees);
    return plants;
  }

  public void watering(int amountOfWatering) {

    System.out.println("Watering with " + amountOfWatering);

    List<Plants> plants = listPlants();
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
