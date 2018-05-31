import org.junit.Test;

import static org.junit.Assert.*;

public class AnagramTest {

  @Test
  public void isAnagram() {

    Anagram anagram = new Anagram();

    String word1 = "dog";
    String word2 = "god";

    assertTrue(anagram.isAnagram(word1,word2));

  }
}