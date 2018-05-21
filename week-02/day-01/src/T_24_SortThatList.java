import java.util.Arrays;

public class T_24_SortThatList {
  public static void main(String[] args) {
    //  Create a function that takes a list of numbers as parameter
    //  Returns a list where the elements are sorted in ascending numerical order
    //  Make a second boolean parameter, if it's `True` sort that list descending

    //  Example:
    System.out.println(Arrays.toString(advancedBubble(new int[]{34, 12, 24, 9, 5}, true)));
    //  should print [34, 24, 12, 9, 5]
  }

  public static int[] advancedBubble(int[] list, boolean order) {

    Arrays.sort(list);

    if (order == true) {
      int temp = list.length - 1;
      int[] reverseList = new int[list.length];
      for (int num :
              list) {
        reverseList[temp] = num;
        temp--;
      }
      return reverseList;
    } else {
      return list;
    }
  }
}