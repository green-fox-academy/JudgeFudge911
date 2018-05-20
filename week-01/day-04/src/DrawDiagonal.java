import java.util.Scanner;

public class DrawDiagonal {
  public static void main(String[] args) {
    // Write a program that reads a number from the standard input, then draws a
    // square like this:
    //
    //
    // % % % % %
    // % %     %
    // %   %   %
    // %     % %
    // % % % % %
    //
    // The square should have as many lines as the number was
    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter the number of lines.");
    int numberOfLines = scanner.nextInt();

    for (int i = 0; i < numberOfLines; i++) {
      System.out.println("");
      for (int j = 0; j < numberOfLines; j++) {
        if (i == 0 || i == numberOfLines - 1 || j == 0 || j == numberOfLines - 1) {
          System.out.print("% ");
        } else if (i == j) {
          System.out.print("% ");
        } else {
          System.out.print("  ");
        }
      }

    }
  }
}
