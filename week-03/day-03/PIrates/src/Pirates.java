public class Pirates {

  boolean dead;

  int intoxicated;

  boolean passedOut;

  public Pirates() {
    intoxicated = 0;
  }

  public void drinkSomeRum() {
    if (dead) {
      System.out.println("He's dead.");
    } else if (passedOut) {
      System.out.println("He's passed out");
    } else {
      intoxicated++;
    }
  }

  public void howsItGoingMate() {

    if (dead) {
      System.out.println("He's dead.");
    } else if (passedOut) {
      System.out.println("He's passed out");
    } else {
      if (intoxicated < 4) {
        System.out.println("Pour me anudder!");
      } else {
        System.out.println("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
        passedOut = true;
      }
    }
  }

  public void die() {
    if (dead) {
      System.out.println("He's already dead.");
    } else {
      dead = true;
    }
  }

  public void brawl(Pirates pirate) {

    if (pirate.dead || dead) {
      System.out.println("He's dead.");
    } else if (passedOut) {
      System.out.println("He's passed out");
    } else if (pirate.passedOut) {
      pirate.die();
    } else {
      int chance = (int) (Math.random() * 3);
      if (chance == 1) {
        die();
      } else if (chance == 2) {
        pirate.die();
      } else {
        passedOut = true;
        pirate.passedOut = true;
      }
    }

  }

}
