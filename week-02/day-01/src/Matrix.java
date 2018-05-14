import java.lang.reflect.Array;
import java.util.Arrays;

public class Matrix {
  public static void main(String[] args) {
    int[][] matrix = new int[4][4];
    int number = 4;
    for (int i = 0; i < number; i++) {
      for (int j = 0; j < number; j++) {
        if (i == j){
          matrix[i][j] = 1;
        } else {
          matrix[i][j] = 0;
        }
      }
    }
    int i = 0;
    for (int[] array : matrix) {
      System.out.println(Arrays.toString(matrix[i]));
      i++;
    }
  }
}
