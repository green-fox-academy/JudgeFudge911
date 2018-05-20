import java.util.Scanner;

public class SubStr {
  public static void main(String[] args) {
    //  Create a function that takes two strings as a parameter
    //  Returns the starting index where the second one is starting in the first one
    //  Returns `-1` if the second string is not in the first one

    Scanner scanner = new Scanner(System.in);

    System.out.println("Enter two strings!");
    String input = scanner.nextLine();
    String q = scanner.nextLine();

    //  Example:
    System.out.println(subStr("this is what I'm searching in", "searching"));
    //  should print: `17`
    System.out.println(subStr("this is what I'm searching in", "not"));
    //  should print: `-1`
    System.out.println(subStr(input, q));
  }

  public static int subStr(String input, String q) {
    return input.indexOf(q);
  }
}

