import java.util.Scanner;

public class T_16_AnimalsAndLegs {
  public static void main(String[] args) {
    // Write a program that asks for two integers
    // The first represents the number of chickens the farmer has
    // The second represents the number of pigs owned by the farmer
    // It should print how many legs all the animals have

    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter the number of chickens you peasant!");
    int numberOfChickens = scanner.nextInt();

    System.out.println("Enter the number of pigs you peasant!");
    int numberOfPigs = scanner.nextInt();

    System.out.println("They have a total of " + (numberOfPigs * 4 + numberOfChickens * 2) + " legs!");

  }
}