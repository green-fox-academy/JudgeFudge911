import java.util.Arrays;
import java.util.List;

public class Farm {

  List<Animal> animals;
  int freePlaces;

  public void breed() {
    if (freePlaces > 0) {
      Animal animal = new Animal();
    }
  }

  public void slaughter() {

    int[] hungerOfAnimals = new int[animals.size()];

    for (int i = 0; i < animals.size(); i++) {
      hungerOfAnimals[i] = animals.get(i).hunger;
    }

    Arrays.sort(hungerOfAnimals);

    for (Animal animal :
            animals) {
      if (animal.hunger == hungerOfAnimals[5]) {
        animals.remove(animal);
        break;
      }
    }

  }
}
