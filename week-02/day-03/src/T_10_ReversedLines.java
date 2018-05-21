import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class T_10_ReversedLines {
  public static void main(String[] args) {

reverse("reversed-line.txt");

  }

  public static void reverse(String file) {

    Path path = Paths.get(file);
    try {
      List<String> lines = Files.readAllLines(path);

      String print = "";

      for (String s :
              lines) {
        for (int i = 0; i < s.length(); i++) {
          print +=(s.substring(s.length()-i-1,s.length()-i));
        }
        print += "\n";
      }
      System.out.println(print);

    } catch (Exception e) {
    }
  }
}
