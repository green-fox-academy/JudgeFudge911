import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

public class T_08_Logs {
  public static void main(String[] args) {
    System.out.println("These are the unique IP addresses " + getIP("log.txt"));

    System.out.println("Here is the GET/POST ratio: " + getPostRatio("log.txt"));
  }

  public static List<String> getIP(String file) {
    try {
      Path path = Paths.get(file);
      List<String> logList = Files.readAllLines(path);

      List<String> ipAddresses = new ArrayList<>();

      for (String s :
              logList) {
        ipAddresses.add(s.split("   ")[1]);
      }

      Collections.sort(ipAddresses);

      List<String> print = new ArrayList<>();

      for (int i = 0; i < ipAddresses.size() - 1; i++) {
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

  public static double getPostRatio(String file) {
    Path path = Paths.get(file);

    try {
      List<String> logList = Files.readAllLines(path);

      List<String> requests = new ArrayList<>();

      for (String s :
              logList) {
        requests.add(s.split("   ")[2]);
      }

      int posts = 0;

      int gets = 0;

      for (String s :
              requests) {
        if (s.startsWith("P")) {
          posts++;
        } else {
          gets++;
        }
      }

      return (double) gets / posts;

    } catch (Exception e) {
      List<String> log = new ArrayList<>();

      return log.size();
    }
  }

}
