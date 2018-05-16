import java.lang.reflect.Array;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

public class Logs {
  public static void main(String[] args) {
    System.out.println(getIP("log.txt"));
  }

  public static List<String> getIP(String file) {
    try {
      Path path = Paths.get(file);
      List<String> logList = Files.readAllLines(path);

      List<String> ipAddresses = new ArrayList<>();

      for (String s :
              logList) {
        /*s.replace("   "," ");
        s.replace(" "," ");*/
        ipAddresses.add(s.split("   ")[1]);
      }

      Collections.sort(ipAddresses);

      List<String> print = new ArrayList<>();

      for (int i = 0; i < ipAddresses.size()-1; i++) {
        if (!ipAddresses.get(i).equals(ipAddresses.get(i + 1))) {
          print.add(ipAddresses.get(i));
        }
      }

      return print;

    } catch (Exception e) {
      List<String> log = new ArrayList<>();

      return log;
    }
  }
  }
