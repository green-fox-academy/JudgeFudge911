import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class ReversedOrder {
  public static void main(String[] args) {

    reverseOrder("reversed-order.txt");

  }

  public static void reverseOrder(String file) {

    Path path = Paths.get(file);
    try {
      List<String> lines = Files.readAllLines(path);

      for (int i = 0; i < lines.size(); i++) {
        System.out.println(lines.get(lines.size()-i-1));
      }

    } catch (Exception e) {
    }
  }
}
