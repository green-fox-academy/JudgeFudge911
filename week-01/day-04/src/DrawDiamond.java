import java.util.Scanner;

public class DrawDiamond {
    public static void main(String[] args) {
        // Write a program that reads a number from the standard input, then draws a
        // diamond like this:
        //
        //
        //    *
        //   ***
        //  *****
        // *******
        //  *****
        //   ***
        //    *
        //
        // The diamond should have as many lines as the number was
        Scanner scanner = new Scanner(System.in);

        System.out.println("How many rows should your diamond have?");
        int numberOfRows = scanner.nextInt();

        int columnIncrement = numberOfRows - 1;
        int numberOfColumn = numberOfRows + columnIncrement;

        int temp = 0;
        String pattern = "*";

        for (int i = 0; i < numberOfRows*2; i++) {
            for (int j = 0; j < numberOfColumn; j++) {
                if (i > numberOfRows/2){
                    if (j == numberOfColumn / 2 - temp) {
                        System.out.print(pattern);
                        pattern += "**";
                    } else {
                        System.out.print(" ");
                    }
                } else {
                    if (j == numberOfColumn / 2 + temp ) {
                        System.out.print(pattern);
                        pattern += "**";
                    } else {
                        System.out.print(" ");
                    }
                }
            }
            temp++;
            System.out.println();
        }
    }
}
