import java.util.List;

public class Armada {

  List<Ship> ships;


  public boolean war(Armada otherArmada) {

    int shipCounter = 0;
    int otherShipCounter = 0;

    while (ships.size() > shipCounter && otherArmada.ships.size() > otherShipCounter) {

      if (ships.get(shipCounter).battle(otherArmada.ships.get(otherShipCounter))) {
        otherShipCounter++;
      } else {
        shipCounter++;
      }
    }

    if (ships.size() == shipCounter) {
      return false;
    } else {
      return true;
    }


  }
}


