import java.util.Scanner;

public class DrawPyramid {
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
        String antiPattern = "0";
        String row = "";

        for (int i = 0; i < numberOfRows; i++) {
            for (int j = 0; j < numberOfColumn; j++) {
                if (j == columnHalf-i){
                    row += pattern;
                    pattern += "**";
                } else if (j < columnHalf-i){
                    row += antiPattern;
                }
            }
            if (i == 0) {
              row = row.substring(0, columnHalf+1);
            } else {
                row = row.substring(columnHalf+i, 2*columnHalf+2*i+1);
            }
            System.out.println(row);
        }
        System.out.println();
    }
}

