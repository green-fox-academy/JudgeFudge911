import java.util.List;
public class Ship {

  List<Pirates> crew;
  Pirates captain;

  public void fillShip(){
    captain = new Pirates();
    for (int i = 0; i < (int) (Math.random() * 10); i++) {
      crew.add(new Pirates());
    }
  }

  public String toString(Ship ship) {
    String result = "";

    if (ship.captain.dead){
      result += "The captain's dead. ";
    } else {
      if(ship.captain.passedOut){
        result += "The captain's passed out. ";
      } else {
        result += "The captain's ready. ";
      }
    }
    int alivePirates = 0;
    for (Pirates pirate :
            ship.crew) {
      if (!pirate.dead) {
        alivePirates++;
      }
    }

    result += "There is " + alivePirates + " pirates alive in the crew";

    return result;
  }

}
