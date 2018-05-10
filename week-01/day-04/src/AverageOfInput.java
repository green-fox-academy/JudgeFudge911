import java.util.Scanner;

public class AverageOfInput {
    public static void main(String[] args) {
// Write a program that asks for 5 integers in a row,
// then it should print the sum and the average of these numbers like:
//
// Sum: 22, Average: 4.4
        Scanner scanner = new Scanner(System.in);

        System.out.println("You shall enter 5 integers!");

        int inputOne = scanner.nextInt();
        inputOne += scanner.nextInt();
        inputOne += scanner.nextInt();
        inputOne += scanner.nextInt();
        inputOne += scanner.nextInt();

        System.out.println("Sum: " + inputOne + ", Average: " + inputOne/5 );

    }
}
