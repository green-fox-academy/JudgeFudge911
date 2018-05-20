public class T_24_PrintEven {
  public static void main(String[] args) {
    // Create a program that prints all the even numbers between 0 and 500
    int firstNumber = 0;
    int lastNumber = 500;

    for (int i = firstNumber; i < lastNumber; i++) {
      if (i % 2 == 0) {
        System.out.println(i);
      }
    }
  }
}
