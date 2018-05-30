package todo;

public class FleetOfThings {

  public static void main(String[] args) {
    Fleet fleet = new Fleet();

    Thing milk = new Thing("Get Milk");
    Thing obstacles = new Thing("Remove the obstacles");
    Thing stand = new Thing("Stand up");
    Thing eat = new Thing("Eat lunch");

    fleet.add(milk, obstacles, stand, eat);

    for (Thing t : fleet.getThings()) {
      t.printAllFields();
    }
  }
}