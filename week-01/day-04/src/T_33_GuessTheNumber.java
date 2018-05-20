import java.util.Scanner;

public class T_33_GuessTheNumber {
  public static void main(String[] args) {
    // Write a program that stores a number, and the user has to figure it out.
    // The user can input guesses, after each guess the program would tell one
    // of the following:
    //
    // The stored number is higher
    // The stored number is lower
    // You found the number: 8
    Scanner scanner = new Scanner(System.in);

    int storedNumber = 8;

    System.out.println("Guess the number!");
    int guess = scanner.nextInt();
    boolean found = false;

    while (!found) {
      if (storedNumber > guess) {
        System.out.println("The stored number is higher, try again!");
        guess = scanner.nextInt();
      } else if (storedNumber < guess) {
        System.out.println("The stored number is lower, try again!");
        guess = scanner.nextInt();
      } else {
        System.out.println("You found the number: " + storedNumber);
        found = true;
      }
    }
  }
}
