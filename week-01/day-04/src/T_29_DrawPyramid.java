import java.util.Scanner;

public class T_29_DrawPyramid {
  public static void main(String[] args) {
    // Write a program that reads a number from the standard input, then draws a
  // pyramid like this:
  //
  //
  //    *
  //   ***
  //  *****
  // *******
  //
    Scanner scanner = new Scanner(System.in);
    System.out.println("How many rows should your pyramid have?");
    int numberOfRows = scanner.nextInt();

    String empty = "";
    for (int i = 0; i < numberOfRows/2; i++) {
      empty += " ";
    }
    
    String a = "*";

    for (int i = 0; i < numberOfRows+1; i++) {
      System.out.println(empty + a);
      empty = empty.substring(0,empty.length()-i);
      a += "**";
    }
  }
}
