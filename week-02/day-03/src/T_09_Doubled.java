import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class T_09_Doubled {
  public static void main(String[] args) {

    decryptor("doubled.txt");
  }

  public static void decryptor(String file) {
    Path path = Paths.get(file);

    try {

      List<String> lines = Files.readAllLines(path);

      String print = "";

      for (String s :
              lines) {
        for (int i = 0; i < s.length(); i += 2) {
          print +=(s.substring(i,i+1));
        }
        print += "\n";
      }
      System.out.println(print);

    } catch (Exception e) {

    }
  }
}
