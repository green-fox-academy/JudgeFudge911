public class App {
  public static void main(String[] args) {

    Garden garden = new Garden();

    Flower yellow = new Flower("yellow");
    Flower blue = new Flower("blue");

    Tree purple = new Tree("purple");
    Tree orange = new Tree("orange");

    garden.checkStatus();

    garden.watering(40);

    garden.checkStatus();

    garden.watering(70);

    garden.checkStatus();

  }
}
