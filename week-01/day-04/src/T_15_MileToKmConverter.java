import java.util.Scanner;

public class T_15_MileToKmConverter {
  public static void main(String[] args) {
    // Write a program that asks for an integer that is a distance in kilometers,
    // then it converts that value to miles and prints it

    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter the distance in km.");
    int distanceInKiloMeters = scanner.nextInt();

    double distanceInMiles = (distanceInKiloMeters * 1.60934);

    System.out.println(distanceInMiles + "miles");
  }
}