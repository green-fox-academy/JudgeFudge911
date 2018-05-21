import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class T_12_EncodedLines {
  public static void main(String[] args) {

    try {
      Path path = Paths.get("encodeLines.txt");
      List<String> content = Files.readAllLines(path);

      System.out.println(decrypt(content));

    } catch (IOException e) {
      System.out.println("Oh no");
    }


  }

  public static String decrypt(List<String> encrypted) {
    String text = stringArrayToString(encrypted);

    char[] decryptiedChars = asciiTransformer(stringOrCharTransformer(text));

    return charArrayToString(decryptiedChars);
  }

  public static String stringArrayToString(List<String> list) {
    String text = "";

    for (String element :
            list) {
      text += element;
    }
    return text;
  }

  public static String charArrayToString(char... letter) {
    String sentence = new String(letter);

    return sentence;

  }

  public static char[] stringOrCharTransformer(String sentence) {
    String[] letters;

    letters = (sentence.split(""));


    char[] characters = new char[sentence.length()];

    for (int i = 0; i < letters.length; i++) {
      characters[i] = (letters[i].charAt(0));
    }
    return characters;
  }

  public static char[] asciiTransformer(char[] letters) {
    for (int i = 0; i < letters.length; i++) {
      if (letters[i] != ' ') {
        letters[i] = (char) (((int) letters[i]) - 1);
      }
    }
    return letters;
  }
}
