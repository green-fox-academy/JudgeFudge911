import java.util.ArrayList;
import java.util.List;

public class Ship {

  List<Pirates> crew;
  Pirates captain;

  public void fillShip() {
    captain = new Pirates();
    crew = new ArrayList<>();
    for (int i = 0; i < (int) (Math.random() * 10); i++) {
      crew.add(new Pirates());
    }
  }

  public boolean battle(Ship otherShip) {

    if (this.calculateScore() > otherShip.calculateScore()) {
      otherShip.lose();
      this.win();
    } else {
      lose();
      otherShip.win();
    }
    return this.calculateScore() > otherShip.calculateScore();

  }

  public void win() {

    int numberOfDrinks = (int) (Math.random() * 4);

    for (int i = 0; i < this.crew.size(); i++) {
      crew.get(i).intoxicated += numberOfDrinks;
    }

    captain.intoxicated += numberOfDrinks;

  }

  public void lose() {
    int KillCount = (int) (Math.random() * crew.size());
    for (int i = 0; i < KillCount; i++) {
      if (crew.get(i).dead) {
        KillCount++;
      } else {
        crew.get(i).dead = true;
      }
    }
  }

  public int alivePirates() {
    int alivePirates = 0;
    for (Pirates pirate :
            crew) {
      if (!pirate.dead) {
        alivePirates++;
      }
    }
    return alivePirates;
  }

  public int calculateScore() {
    int score = alivePirates() - captain.intoxicated;

    return score;
  }

  @Override
  public String toString() {
    String result = "";

    if (captain.dead) {
      result += "The captain's dead. ";
    } else {
      if (captain.passedOut) {
        result += "The captain's passed out. ";
      } else {
        result += "The captain's ready. ";
      }
    }


    result += "There is " + alivePirates() + " pirates alive in the crew";

    return result;
  }

}
