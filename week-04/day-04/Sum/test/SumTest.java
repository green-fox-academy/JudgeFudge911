import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.*;

public class SumTest {

  Sum sum = new Sum();

  @Test
  public void sumOfElements() {
    ArrayList<Integer> numbers = new ArrayList<>();

    for (int i = 0; i < 3; i++) {
      numbers.add(i);
    }

    int result = 3;

    assertEquals(result, sum.sumOfElements(numbers));

  }

  @Test
  public void should_return0_when_emptyListInput() {
    ArrayList<Integer> numbers = new ArrayList<>();

    int result = 0;

    assertEquals(result, sum.sumOfElements(numbers));

  }

  @Test
  public void should_returnElement_when_oneElementInput() {
    ArrayList<Integer> numbers = new ArrayList<>();

    int result = 7;

    numbers.add(result);

    assertEquals(result, sum.sumOfElements(numbers));

  }
}