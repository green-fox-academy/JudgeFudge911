public class T_05_Factorial {
//  Create the usual class wrapper
//  and main method on your own.

// - Create a function called `factorio`
//   that returns it's input's factorial

  public static void main(String[] args) {
    int number = 5;
    System.out.println(factorio(number));
  }

  public static int factorio(int number) {
    int factorial = 1;
    for (int i = 1; i < number + 1; i++) {
      factorial *= i;
    }
    return factorial;
  }

}
