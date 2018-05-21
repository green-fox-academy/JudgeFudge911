import java.util.Arrays;
import java.util.List;

public class T_08_AppendLetter {
  public static void main(String[] args) {
    List<String> far = Arrays.asList("kuty", "macsk", "kacs", "rók", "halacsk");

    System.out.println(appendA(far));
  }

  public static List appendA(List name) {


    for (Object word :
            name) {

      name.set(name.indexOf(word), word + "a");
    }
    return name;

  }
}
