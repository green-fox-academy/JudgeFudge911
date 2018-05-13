package Diamond;

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

        System.out.println("How many rows should your pyramid have?");
        int numberOfRows = scanner.nextInt();

        if (numberOfRows % 2 == 0){
            for (int i = 0; i < numberOfRows; i++) {
                if (i < numberOfRows / 2){
                    //PYRAMID
                } else if (i == numberOfRows / 2 +1) {
                    //MID
                } else {
                    //REVERSE PYRAMID
                }
            }
        } else {
            for (int i = 0; i < numberOfRows; i++) {
                if (i < numberOfRows/2+1) {
                    //PYRAMID
                } else {
                    //REVERSE PYRAMID
                }
            }
        }
    }
}