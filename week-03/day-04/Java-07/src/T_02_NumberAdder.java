public class T_02_NumberAdder {
  public static void main(String[] args) {
    // Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

    System.out.println(countTo(10));

  }

  private static int countTo(int numberTo) {

    if (numberTo == 1) {
      return 1;
    } else {
      return numberTo + countTo(numberTo - 1);
    }

  }
}
