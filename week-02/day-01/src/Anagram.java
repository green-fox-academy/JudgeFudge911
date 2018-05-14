import java.util.Arrays;

public class Anagram {
  public static void main(String[] args) {
  String a = "dog";
  String b = "god";

  String c = "green";
  String d = "fox";

    System.out.println(isAnagram(a,b));
    System.out.println(isAnagram(c,d));

  }
  public static boolean isAnagram (String word1, String word2) {
    if (word1.length() != word2.length()){
      return false;
    } else {

      String[] word1Array = new String[word1.length()];
      String[] word2Array = new String[word1.length()];

      for (int i = 0; i < word1.length(); i++) {
        word1Array[i] = word1.substring(i,i+1);
        word2Array[i] = word2.substring(i,i+1);
      }
      Arrays.sort(word1Array);
      Arrays.sort(word2Array);

      for (int i = 0; i < word1Array.length; i++) {
        if (!word1Array[i].equals(word2Array[i])){
          return false;
        }
      }
      return true;
    }
  }
}
