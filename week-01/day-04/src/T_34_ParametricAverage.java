import java.util.Scanner;

public class T_34_ParametricAverage {
  public static void main(String[] args) {
    // Write a program that asks for a number.
    // It would ask this many times to enter an integer,
    // if all the integers are entered, it should print the sum and average of these
    // integers like:
    //
    // Sum: 22, Average: 4.4
    Scanner scanner = new Scanner(System.in);

    int thisMany = 3;
    int sum = 0;
    int average = 0;

    for (int i = 0; i < thisMany; i++) {
        System.out.println("Enter a number.");
        int number = scanner.nextInt();
        sum += number;
        average++;
    }
    System.out.println("Sum: " + sum + ", Average: " + sum / average);
  }
}
