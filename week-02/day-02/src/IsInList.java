import java.util.ArrayList;
import java.util.Arrays;

public class IsInList {
  public static void main(String[] args) {
    ArrayList<Integer> list = new ArrayList<>(Arrays.asList(2, 4, 6, 8, 10, 12, 14, 16));
    System.out.println(checkNums(list));
  }

  public static boolean checkNums(ArrayList list) {
    Integer[] numberList = {4, 8, 12, 16};

    if (list.containsAll(Arrays.asList(numberList)) == true) {
      return true;
    } else {
      return false;
    }
  }
}
