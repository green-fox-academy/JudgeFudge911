public class Fibonacci {


  public static int fibonacciNumber(int n) {
    if (n <= 1) {
      return 0;
    } else if (n <= 3) {
      return 1;
    } else {
      return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
    }

  }
}
