package Diamond;

import java.util.Scanner;

public class ReversePyramid {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //GET NUMBER
        System.out.println("How many rows should your pyramid have?");
        int numberOfRows = scanner.nextInt();

        //PATTERN
        String pattern = "*";
        String patternIncrement = "**";
        for (int i = 0; i < numberOfRows - 1; i++) {
            pattern += patternIncrement;
        }

        //ANTI PATTERN
        String antiPattern = "";
        String antiPatternIncrement = "0";

        for (int i = 0; i < numberOfRows; i++) {

            //RESET STRING AT EVERY ROW
            String row = "";

            //FIRST ROW DOESN'T GET SPACE EVERY OTHER DOES INCREASINGLY MORE
            if (i != 0) {
                antiPattern += antiPatternIncrement;
            }

            //EVERY ROW DECREASINGLY LESS PATTERN
            row += antiPattern;
            row += pattern;
            if (i != numberOfRows - 1) {
                pattern = pattern.substring(0, pattern.length() - 2);
            }

            //PRINT OUT STRING ROW
            System.out.println(row);
        }
    }

}



