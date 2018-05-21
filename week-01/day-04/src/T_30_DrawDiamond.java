import java.util.ArrayList;
import java.util.Scanner;

public class T_30_DrawDiamond {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("How many rows should your diamond have?");
    int numberOfRows = scanner.nextInt();

    int patternCounter = numberOfRows/2;

    for (int i = 0; i < numberOfRows; i++) {
      for (int j = 0; j < numberOfRows; j++) {
        if (j < patternCounter || j > numberOfRows-1-patternCounter) {
          System.out.print("0");
        } else {
          System.out.print("*");
        }
      }
      System.out.println();
      if (i < numberOfRows/2){
        patternCounter--;
      } else {
        patternCounter++;
      }
    }
  }
}
