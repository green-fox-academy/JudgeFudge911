import java.util.ArrayList;

public class T_23_PalindromeSearcher {
  public static void main(String[] args) {

    String input = "dog goat dad duck doodle never";

    for (String palindromes :
            searchPalindrome(input)) {
      System.out.println(palindromes);
    }
  }

  public static String[] searchPalindrome(String text) {
    int temp = 3;
    String word;

    ArrayList<String> palindromes = new ArrayList<>();

    while (temp <= text.length()) {
      for (int i = 0; i <= text.length() - temp; i++) {
        word = text.substring(i, i + temp);
        if (isPalindrome(word)) {
          palindromes.add(word);
        }
        word = "";
      }
      temp++;
    }
    return palindromes.toArray(new String[palindromes.size()]);
  }

  public static boolean isPalindrome(String word) {

    String a;
    String b;

    if (word.length() % 2 == 0) {
      int half = (word.length() - 1) / 2 + 1;
      a = word.substring(0, half);
      b = word.substring(half);
    } else {
      int half = (word.length() - 1) / 2;
      a = word.substring(0, half);
      b = word.substring(half + 1);
    }
    String c = "";

    for (int i = b.length() - 1; i >= 0; i--) {
      c += b.substring(i, i + 1);
    }


    if (a.equals(c)) {
      return true;
    } else {
      return false;
    }
  }
}