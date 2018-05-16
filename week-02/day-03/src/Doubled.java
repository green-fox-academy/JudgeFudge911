import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class Doubled {
  public static void main(String[] args) {

    decryptor("doubled.txt");
  }

  public static void decryptor(String file) {
    Path path = Paths.get(file);

    try {

      List<String> lines = Files.readAllLines(path);

      List<String> print = new ArrayList<>();

      for {
        for (int i = 0; i < s.length(); i =+ 2) {
          print.add(s.substring(i,i+1));
        }
        System.out.println(print);


      }

    } catch (Exception e) {

    }
  }
}
