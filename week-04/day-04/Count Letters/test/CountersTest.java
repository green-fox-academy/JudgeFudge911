import org.junit.Test;

import static org.junit.Assert.*;

public class CountersTest {

  @Test
  public void should_countLetters_whenSentenceInput() {

    Counters counters = new Counters();

    String text = "Well hello there";

    Integer result = 4;
    assertEquals(result, counters.countLetters(text).get("e"));

  }
}