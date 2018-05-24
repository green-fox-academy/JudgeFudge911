public class T_11_Refactorio {
  public static void main(String[] args) {
    // Create a recursive function called `refactorio`
    // that returns it's input's factorial
    System.out.println(refactorio(3));

  }

  public static int refactorio(int input) {

    if (input == 0) {
      return 0;
    } else if (input == 1) {
      return 1;
    } else {
      return input * refactorio(input - 1);
    }
  }
}
