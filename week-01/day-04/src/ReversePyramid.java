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
        String row = "";
        String antiPattern = "0";
        for (int i = 3; i < numberOfColumn ; i++) {
            pattern += "**";
        }
        for (int i = 0; i < numberOfRows; i++) {
            for (int j = 0; j < numberOfColumn; j++) {
                if (j == columnHalf-i){
                    row += pattern;
                    pattern = pattern.substring(0, pattern.length()-3);
                } else if (j < columnHalf-i){
                    row += antiPattern;
                }
            }
            if (i == 0) {
                row = row.substring(0, numberOfColumn+1);
            } else {
                row = row.substring(numberOfColumn+i, 2*numberOfColumn+2*i+1);
            }
            System.out.println(row);
        }
        System.out.println();

        }

}