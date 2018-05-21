import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class T_06_CopyFile {
  public static void main(String[] args) {

    System.out.println(copyFileToAnother("alma.txt", "banana.txt"));

  }

  public static boolean copyFileToAnother(String fileFrom, String fileTo) {

    Path fileFromPath = Paths.get(fileFrom);

    Path fileToPath = Paths.get(fileTo);

    try {

      Files.copy(fileFromPath,fileToPath);

      return true;
    } catch (Exception e ) {
      return false;
    }


  }
}
