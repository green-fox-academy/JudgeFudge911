public class Animal {

  int hunger;
  int thirst;

  public Animal() {
    hunger = 50;
    thirst = 50;
  }

  public static void eat(Animal animal){
    animal.hunger--;
  }

  public static void drink(Animal animal){
    animal.thirst--;
  }

  public static void play(Animal animal){
    animal.hunger++;
    animal.thirst++;
  }

}
