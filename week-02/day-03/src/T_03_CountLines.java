import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class T_03_CountLines {
  public static void main(String[] args) {
    System.out.println(numberOfLines("text.txt"));

  }
  public static int numberOfLines (String fileName) {

    Path path = Paths.get(fileName);

    try {
      return Files.readAllLines(path).size();
    } catch (Exception e){
      return 0;
    }

  }
}
