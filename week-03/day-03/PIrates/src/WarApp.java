public class WarApp {
  public static void main(String[] args) {
    Armada armada1 = new Armada();
    Armada armada2 = new Armada();

    armada1.fillArmada();
    armada2.fillArmada();

    for (Ship ship :
            armada1.ships) {
      ship.fillShip();
    }

    for (Ship ship :
            armada2.ships) {
      ship.fillShip();
    }

    System.out.println("This number of ships " + armada1.ships.size());
    System.out.println("Other number of ships " + armada2.ships.size());

    armada1.war(armada2);



  }
}
