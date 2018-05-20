public class T_09_Bmi {
  public static void main(String[] args) {
    // Print the Body mass index (BMI) based on these values

    double massInKilograms = 81.2;
    double heightInMeters = 1.78;

    System.out.println("BMI = " + Math.round(massInKilograms / (Math.pow(heightInMeters, 2))));
  }
}