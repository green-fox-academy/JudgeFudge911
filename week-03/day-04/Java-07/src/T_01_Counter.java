public class T_01_Counter {
  public static void main(String[] args) {
    // Write a recursive function that takes one parameter: n and counts down from n.

    countToZero(10);
  }

  public static int countToZero(int from) {

  if (from == 0){
    System.out.println(0);
    return 0;
  } else {
    System.out.println(from);
    return countToZero(from-1);
  }

  }
}
