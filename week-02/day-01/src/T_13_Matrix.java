public class T_13_Matrix {
  public static void main(String[] args) {
    int elementsPerSide = 4;
    int[][] matrix = new int[elementsPerSide][elementsPerSide];
    for (int i = 0; i < elementsPerSide; i++) {
      for (int j = 0; j < elementsPerSide; j++) {
        if (i == j) {
          matrix[i][j] = 1;
        } else {
          matrix[i][j] = 0;
        }
      }
    }
    for (int i = 0; i < matrix.length; i++) {
      for (int j = 0; j < matrix.length; j++) {
        System.out.print(matrix[i][j]);
      }
      System.out.println();
    }
  }
}
