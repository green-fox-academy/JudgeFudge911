import java.util.Random;
import java.util.Scanner;

public class GuessNumberLives {
  public static void main(String[] args) {
    guessNumberLife();
  }

  public static void guessNumberLife() {

    Random rand = new Random();

    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter two numbers, the system will generate a random number between the first and second!");
    int rand1 = scanner.nextInt();
    int rand2 = scanner.nextInt();

    int randomNumber = rand.nextInt((rand2) + rand1);

    System.out.println("The random number is: " + randomNumber + " (for testing purposes only)");

    System.out.println("How many lives you want?");
    int lives = scanner.nextInt();

    System.out.println("Guess the number!");
    int guess = scanner.nextInt();


    while (guess != randomNumber && lives - 1 != 0) {
      if (guess < randomNumber) {
        System.out.println("Too low. Guess again! Choose wisely, you have " + --lives + " lives left");
      } else {
        System.out.println("Too high. Guess again! Choose wisely, you have " + --lives + " lives left");
      }
      guess = scanner.nextInt();
    }
    if (lives > 1) {
      System.out.println("Congratulations. You won!");
    } else {
      System.out.println("You dead m8. Get rekt");
    }
  }
}
