import java.util.Scanner;

public class DrawSquare {
  public static void main(String[] args) {
    // Write a program that reads a number from the standard input, then draws a
    // square like this:
    //
    //
    // %%%%%
    // %   %
    // %   %
    // %   %
    // %   %
    // %%%%%
    //
    // The square should have as many lines as the number was
    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter the number of lines.");
    int numberOfLines = scanner.nextInt();

    if (numberOfLines <= 2) {
      System.out.println("That's not enough lines.");
    } else {
      String fullRow = "# ";
      for (int i = 1; i < numberOfLines; i++) {
        fullRow += "# ";
      }
      String row = "#";
      for (int i = 2; i < numberOfLines; i++) {
        row += "  ";
      }
      row += " #";
      System.out.println(fullRow);
      for (int i = 2; i < numberOfLines; i++) {
        System.out.println(row);
      }
      System.out.println(fullRow);
    }
  }
}
