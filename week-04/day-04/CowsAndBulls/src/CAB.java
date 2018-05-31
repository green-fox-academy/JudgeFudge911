import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;

public class CAB {

  Integer[] number;
  boolean gameOver;
  int guessCounter;

  public CAB() {
    Random r = new Random();
    number = new Integer[4];

    for (int i = 0; i < 4; i++) {
      number[i] = r.nextInt();
    }
    gameOver = false;
    guessCounter = 0;
  }


  public String guess(Integer numbers) {
    guessCounter++;
    String status = "";
    for (int i = 0; i < 4; i++) {
      if (numbers.toString().charAt(i) == number[i]) {
        status += "Cow";
      } else if (Arrays.asList(number).contains(toString().charAt(i))) {
        status += "Bull";
      }
      if (i != 4) {
        status += ", ";
      }
    }

    if (status.equals("Cow, Cow, Cow, Cow")) {
      gameOver = true;
    }
    return status;
  }


}

