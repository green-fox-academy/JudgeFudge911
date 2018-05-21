public class T_01_DivideByZero {
  public static void main(String[] args) {

    int number = 0;

    divideTen(number);
  }
  public static void divideTen(int number) {
    try {
      System.out.println(10 / number);
    } catch (ArithmeticException e) {
      System.out.println("fail");
    }

  }
}
