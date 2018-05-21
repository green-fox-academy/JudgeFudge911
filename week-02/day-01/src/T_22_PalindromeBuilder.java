public class T_22_PalindromeBuilder {
  public static void main(String[] args) {

    String word = "racecar";

    System.out.println(createPalindrome(word));

  }

  public static String createPalindrome(String word) {

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
