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

        System.out.println("How many rows should your triangle have?");
        int numberOfLines = scanner.nextInt();

        String pattern = "*";
        int spaceIncrement = 0;
        String space = "  ";
        while (spaceIncrement < numberOfLines){
         space += " ";
         spaceIncrement++;
        }
        int increment = 0;

        while (increment < numberOfLines) {
            System.out.println(space.substring(0,space.length()/2+1) + pattern + space.substring(0,space.length()/2+1));
            pattern += "**";
            space = space.substring(0,numberOfLines-increment-1);
            increment++;
        }

    }
}
