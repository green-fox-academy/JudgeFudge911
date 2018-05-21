import java.util.Arrays;

public class T_06_PrintArguments {
  public static void main(String[] args) {
    printParams("first");
    printParams("first", "second");
    printParams("first", "second", "third");
  }

  public static void printParams(String... text) {
    System.out.println(Arrays.toString(text));
  }
}

