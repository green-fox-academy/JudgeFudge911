import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;

public class PrintEachLine {
  public static void main(String[] args) throws IOException {
    Path path = Paths.get("my-file.txt");

    try {
      System.out.println(Files.readAllLines(path));
    } catch (IOException e) {
      System.out.println("Unable to read file: " + path);
    }
  }
}
