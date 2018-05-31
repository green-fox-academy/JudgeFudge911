import org.junit.Test;

import static org.junit.Assert.*;

public class CountersTest {

  @Test
  public void should_returnHashmapWithLettersAsKeysAndRepetitionsAsIntegers_whenSentenceInput() {

    Counters counters = new Counters();

    String text = "Well hello there";

    Integer result = 4;
    assertEquals(result, counters.countLetters(text).get("e"));

  }

  @Test
  public void should_returnNull_whenBlankInput() {

    Counters counters = new Counters();

    String text = "Well hello there";

    Integer result = null;
    assertEquals(result, counters.countLetters(text).get(" "));

  }
}