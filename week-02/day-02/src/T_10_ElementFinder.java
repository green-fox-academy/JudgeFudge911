import java.util.ArrayList;
import java.util.Arrays;

public class T_10_ElementFinder {
  public static void main(String[] args) {
    ArrayList<Integer> arrayList = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));

    System.out.println(containsSeven(arrayList));
    System.out.println(containsSevenSecondSolution(arrayList));
  }

  public static String containsSevenSecondSolution(ArrayList list) {
    if (list.indexOf(7) != -1) {
      return "Hooray";
    } else {
      return "Nooooo";
    }
  }

  public static String containsSeven(ArrayList list) {
    if (list.contains(7) == true) {
      return "Hooray";
    } else {
      return "Nooooo";
    }
  }
}
