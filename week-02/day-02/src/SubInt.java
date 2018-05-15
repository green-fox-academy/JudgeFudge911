import java.util.ArrayList;

public class SubInt {
  public static void main(String[] args) {
    //  Create a function that takes a number and a list of numbers as a parameter
    //  Returns the indexes of the numbers in the list where the first number is part of
    //  Returns an empty list if the number is not part any of the numbers in the list

    //  Example:
    System.out.println(subInt(1, new int[] {1, 11, 34, 52, 61}));
    //  should print: `[0, 1, 4]`
    System.out.println(subInt(9, new int[] {1, 11, 34, 52, 61}));
    //  should print: '[]'
  }

  public static ArrayList<Integer> subInt(int number, int[] list){

    ArrayList<Integer> indexes = new ArrayList<>();

    int temp = 0;

    for (int i = 0; i < list.length; i++) {
      if (String.valueOf(list[i]).contains(String.valueOf(number))){
        indexes.add(i);
    }

    /*for (int element :
            list) {
      if (String.valueOf(element).contains(String.valueOf(number)){
        indexes.add(list[temp];
      */
    }
    return indexes;
  }
}
