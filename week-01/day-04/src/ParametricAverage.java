import java.util.Scanner;

public class ParametricAverage {
    public static void main(String[] args) {
        // Write a program that asks for a number.
        // It would ask this many times to enter an integer,
        // if all the integers are entered, it should print the sum and average of these
        // integers like:
        //
        // Sum: 22, Average: 4.4
        Scanner scanner = new Scanner(System.in);

        int thisMany = 3;

        for (int i = 0; i < thisMany; i++) {
            if (i != 0) {
                System.out.println("Enter another number.");
                int number = scanner.nextInt();
            } else {
                System.out.println("Enter a number.");
                int number = scanner.nextInt();
            }
        }
    }
}
