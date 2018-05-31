import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.*;

public class SumTest {

  @Test
  public void sumOfElements() {

    Sum sum = new Sum();

    ArrayList<Integer> numbers = new ArrayList<>();
    for (int i = 0; i < 3; i++) {
      numbers.add(i);
    }

    int result = 3;

    assertEquals(result, sum.sumOfElements(numbers));

  }
}