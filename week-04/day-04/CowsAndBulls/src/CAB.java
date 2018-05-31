import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class CAB {

  Scanner scanner = new Scanner(System.in);
  private int[] number;
  boolean gameOver;
  int guessCounter;


  public CAB() {
    Random r = new Random();
    number = new int[4];

    for (int i = 0; i < 4; i++) {
      number[i] = r.nextInt(10);
    }
    gameOver = false;
    guessCounter = 0;
  }

  public int[] getNumber() {
    return number;
  }

  public String guess() {
    System.out.println("Enter 4 numbers!");
    String numbers = scanner.nextLine();
    guessCounter++;
    String status = "";
    for (int i = 0; i < 4; i++) {
      if (Character.getNumericValue(numbers.charAt(i)) == number[i]) {
        status += "Cow";
      } else if (Arrays.asList(number).contains((int) (numbers.charAt(i)))) {
        status += "Bull";
      }
      if (i != 4 && Arrays.asList(number).contains(((int) (numbers.charAt(i))))) {
        status += ", ";
      }
    }

    if (status.equals("CowCowCowCow")) {
      gameOver = true;
      return "Congratulations, you won! Your guess counter is at: " + guessCounter;
    }
    return status;
  }

  public static void main(String[] args) {

    CAB cab = new CAB();
    for (int i = 0; i < 4; i++) {
      System.out.print(cab.getNumber()[i]);
    }

    System.out.println();

    while (!cab.gameOver) {
      System.out.println(cab.guess());
    }

  }

}

