import java.util.Arrays;

public class CAB {

  Integer[] number;
  boolean gameOver;
  int guessCounter;


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

