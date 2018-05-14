public class PalindromeBuilder {
  public static void main(String[] args) {

    String word = "aaaa";

    System.out.println(createPalindrome(word));

  }

  public static String createPalindrome(String word) {

    int half = (word.length()-1)/2 + 1;

    String a = word.substring(0, half);
    String b = word.substring(half, word.length());

    if (word.length() % 2 == 0 && a.equals(b)) {
      return word;
    } else {
      String otherHalf = "";

      for (int i = word.length() - 1; i >= 0; i--) {
        otherHalf += word.substring(i, i + 1);
      }

      return word + otherHalf;
    }
  }
}
