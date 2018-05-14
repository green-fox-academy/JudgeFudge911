import java.util.Arrays;

public class Colors {
  public static void main(String[] args) {
    String[][] colors = {{"lime", "forest green", "olive", "pale green", "spring green"}, {"orange red", "red", "tomato"}, {"orchid", "violet", "pink", "hot ping"}};
    for (String[] index : colors) {

    }

    String print = "";
    for (int i = 0; i < colors.length; i++) {
      print += Arrays.toString(colors[i]);
    }

    System.out.println(print);
  }
}
