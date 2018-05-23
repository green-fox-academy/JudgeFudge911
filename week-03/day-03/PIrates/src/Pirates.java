public class Pirates {

  boolean dead;

  int intoxicated;

  boolean passedOut;

  public Pirates(){
    intoxicated = 0;
  }

  public void drinkSomeRum() {
    if (dead) {
      System.out.println("He's dead.");
    } else {
      intoxicated++;
    }
  }

  public void howsItGoingMate() {

    if (dead) {
      System.out.println("He's dead.");
    } else {
      if (intoxicated < 4 && intoxicated > 0) {
        System.out.println("Pour me anudder!");
      } else {
        System.out.println("Arghh, I'ma Pirate. How d'ya d'ink its goin?");

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
    } else {

    }

  }

}
