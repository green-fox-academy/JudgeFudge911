import java.util.Arrays;

public class Reverse {
  public static void main(String[] args) {
    int[] aj = {3, 4, 5, 6, 7};
    int temp = aj.length-1;
    int[] ja = new int[aj.length];

    for (int num :
            aj) {
      ja[temp] = num;
      temp--;
    }
    System.out.println(Arrays.toString(ja));
  }
}
