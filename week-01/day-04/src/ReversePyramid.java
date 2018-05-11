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
        int numberOfColumn = 2 * numberOfRows - 1;


        String pattern = "*";
        String patternIncrement = "**";
        for (int i = 0; i < numberOfRows - 1; i++) {
            pattern += patternIncrement;
        }
        String antiPattern = "";
        String antiPatternIncrement = "0";

        for (int i = 0; i < numberOfRows; i++) {
            String row = "";
            if (i != 0) {
                antiPattern += antiPatternIncrement;
            }
            row += antiPattern;
            row += pattern;
            if (i != numberOfRows-1){
                pattern = pattern.substring(0, pattern.length() - 2);
            }
            for (int j = 0; j < numberOfColumn; j++) {

            }
            System.out.println(row);
        }


    }

}