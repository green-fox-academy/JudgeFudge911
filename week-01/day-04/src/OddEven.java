import java.util.Scanner;

public class OddEven {
    public static void main(String[] args) {
        // Write a program that reads a number from the standard input,
        // Then prints "Odd" if the number is odd, or "Even" if it is even.
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a number!");

        int number = scanner.nextInt();

        String print = (number % 2 == 0) ? "This is an even number" : "This is an odd number";

        System.out.println(print);
    }
}
