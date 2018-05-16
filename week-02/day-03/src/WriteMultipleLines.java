import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class WriteMultipleLines {
  public static void main(String[] args) {

    writeMultipleLines("text.txt", "alma", 5);
  }

  public static void writeMultipleLines(String path, String word, int number) {
    Path filePath = Paths.get(path);


    try {
      List<String> content = Files.readAllLines(filePath);

      for (int i = 0; i < number; i++) {
        content.add(word);
        Files.write(filePath, content);
      }
      System.out.println("done");
    } catch (IOException e) {
      System.out.println("nyet");
    }
  }
}
