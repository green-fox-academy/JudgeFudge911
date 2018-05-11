import java.util.Scanner;

public class ReversePyramid {
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
        // The pyramid should have as many lines as the number was
        Scanner scanner = new Scanner(System.in);

        System.out.println("How many rows should your pyramid have?");
        int numberOfRows = scanner.nextInt();

        int columnIncrement = numberOfRows - 1;
        int numberOfColumn = numberOfRows + columnIncrement;
        int columnHalf = numberOfColumn/2;
        String pattern = "*";
        for (int i = 3; i < numberOfColumn ; i++) {
            pattern += "**";
        }
        System.out.println(pattern.length());

        }

}