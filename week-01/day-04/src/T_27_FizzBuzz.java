public class T_27_FizzBuzz {
  public static void main(String[] args) {
    // Write a program that prints the numbers from 1 to 100.
    // But for multiples of three print “Fizz” instead of the number
    // and for the multiples of five print “Buzz”.
    // For numbers which are multiples of both three and five print “FizzBuzz”.
    int startNumber = 1;
    int endNumber = 100;

    while (startNumber < endNumber + 1) {
      if (startNumber % 3 == 0 && startNumber % 5 == 0) {
        System.out.println("FizzBuzz");
      } else if (startNumber % 3 == 0) {
        System.out.println("Fizz");
      } else if (startNumber % 5 == 0) {
        System.out.println("Buzz");
      } else {
        System.out.println(startNumber);
      }
      startNumber++;
    }
  }
}
