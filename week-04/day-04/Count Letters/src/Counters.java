import java.util.HashMap;

public class Counters {

  public HashMap<String, Integer> countLetters(String text) {
    HashMap<String, Integer> dictionary = new HashMap<>();
    for (int i = 0; i < text.length(); i++) {
      if (!text.split("")[i].equals(" ")) {
        dictionary.merge(text.split("")[i], 1, Integer::sum);
      }
    }
    return dictionary;
  }
}
