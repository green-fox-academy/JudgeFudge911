import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Extension {
  int add(int a, int b) {
    return a + b;
  }

  int maxOfThree(int a, int b, int c) {
    if (a > b && a > c) {
      return a;
    } else if (b > a && b > c) {
      return b;
    } else
      return c;
  }

  int median(List<Integer> pool) {
    if (pool.size() > 0) {
      Collections.sort(pool);
      return pool.get((pool.size() - 1) / 2);
    } else {
      return -1;
    }
  }

  boolean isVowel(char c) {

    c = Character.toLowerCase(c);

    return Arrays.asList('a', 'u', 'o', 'e', 'i').contains(c);
  }

  String translate(String hungarian) {
    String teve = hungarian;
    int length = teve.length();
    for (int i = 0; i < length; i++) {
      char c = teve.charAt(i);
      if (isVowel(c)) {
        teve = String.join(c + "v" + c, teve.split("" + c));
        i += 2;
        length += 2;
      }
    }
    return teve;
  }
}