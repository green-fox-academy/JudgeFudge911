import java.util.Arrays;

public class T_08_CompareLength {

  public static void main(String[] args) {
    int[] p1 = {1, 2, 3};

    int[] p2 = {4, 5};

    if (p2.length > p1.length) {
      System.out.println(Arrays.toString(p2));
    } else {
      System.out.println(Arrays.toString(p1));
    }
  }
}
