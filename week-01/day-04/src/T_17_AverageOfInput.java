import java.util.Scanner;

public class T_17_AverageOfInput {
  public static void main(String[] args) {
// Write a program that asks for 5 integers in a row,
// then it should print the sum and the average of these numbers like:
//
// Sum: 22, Average: 4.4

    Scanner scanner = new Scanner(System.in);

    int numberOfNumbers = 5;

    System.out.println("You shall enter " + numberOfNumbers + " integers!");

    int input = 0;

    for (int i = 0; i < numberOfNumbers; i++) {
      input += scanner.nextInt();
    }

    System.out.println("Sum: " + input + ", Average: " + input / numberOfNumbers);

  }
}
