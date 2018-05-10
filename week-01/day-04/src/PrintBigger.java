import java.util.Scanner;

public class PrintBigger {
    public static void main(String[] args) {
        // Write a program that asks for two numbers and prints the bigger one
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter two numbers.");

        int numberOne = scanner.nextInt();
        int numberTwo = scanner.nextInt();

        if (numberOne < numberTwo) {
            System.out.println(numberTwo);
        } else {
            System.out.println(numberOne);
        }

    }
}
