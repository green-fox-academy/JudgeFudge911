
import com.sun.deploy.util.ArrayUtil;


import java.util.Arrays;

public class Unique {
  public static void main(String[] args) {
    int[] alma = {7, 2, 2, 3, 1};
    System.out.println(Arrays.toString(unique(alma)));


  }

  public static int[] unique(int[] listOfNumbers) {

    Arrays.sort(listOfNumbers, 0, listOfNumbers.length);
    int[] uniqueList = new int[listOfNumbers.length];
    int temp = 0;
    for (int i = 0; i < listOfNumbers.length; i++) {
      if (i == listOfNumbers.length - 1) {
        uniqueList[temp] = listOfNumbers[i];
      } else if (listOfNumbers[i] != listOfNumbers[i + 1]) {
        uniqueList[temp] = listOfNumbers[i];
        temp++;
      }
    }
    return uniqueList;
  }
}
