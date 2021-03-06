import java.util.Scanner;

public class T_28_DrawTriangle {
  public static void main(String[] args) {
    // Write a program that reads a number from the standard input, then draws a
    // triangle like this:
    //
    // *
    // **
    // ***
    // ****
    //
    // The triangle should have as many lines as the number was
    Scanner scanner = new Scanner(System.in);

    System.out.println("How many rows should your triangle have?");
    int numberOfLines = scanner.nextInt();

    String pattern = "";
    int increment = 0;

    while (increment < numberOfLines + 1) {
      System.out.println(pattern);
      pattern += "*";
      increment++;
    }
  }
}
