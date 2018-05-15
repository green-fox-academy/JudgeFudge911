import java.util.Random;
import java.util.Scanner;

public class GuessNumber {
  public static void main(String[] args) {

    guessDatNumba();

  }

  public static void guessDatNumba() {
    Random rand = new Random();

    Scanner scanner = new Scanner(System.in);

    int randomNumber = rand.nextInt((100) + 1);

    System.out.println("The random number is: " + randomNumber);

    System.out.println("Guess the number!");
    int guess = scanner.nextInt();

    while (guess != randomNumber) {
      if (guess < randomNumber){
        System.out.println("Too low. Guess again!");
      } else {
        System.out.println("Too high. Guess again!");
      }
      guess = scanner.nextInt();
    }
    System.out.println("Congratulations. You won!");
  }
}
