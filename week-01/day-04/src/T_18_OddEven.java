import java.util.Scanner;

public class T_18_OddEven {
  public static void main(String[] args) {
    // Write a program that reads a number from the standard input,
    // Then prints "Odd" if the number is odd, or "Even" if it is even.
    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter a number!");
    int number = scanner.nextInt();

    System.out.println((number % 2 == 0) ? "Even" : "Odd");
  }
}
