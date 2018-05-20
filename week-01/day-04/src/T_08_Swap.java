public class T_08_Swap {
  public static void main(String[] args) {
    // SwaP the values of the variables

    int a = 123;
    int b = 526;

    System.out.println("BEFORE: This is the first variable: " + a + " and this is the second variable: " + b);

    int temp = b;

    b = a;
    a = temp;

    System.out.println("AFTER: This is the first variable: " + a + " and this is the second variable: " + b);
  }
}