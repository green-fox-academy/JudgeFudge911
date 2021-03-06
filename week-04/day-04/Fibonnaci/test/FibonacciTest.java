import org.junit.Test;

import static org.junit.Assert.*;

public class FibonacciTest {

  @Test
  public void should_returnFibonacciNumberAtGivenIndex_when_intAsInput() {

    int input = 3;

    int result = 1;

    assertEquals(result,Fibonacci.fibonacciNumber(input));

  }

  @Test
  public void should_returnMinus1_when_negativeInput() {

    int input = -10;

    int result = -1;

    assertEquals(result,Fibonacci.fibonacciNumber(input));

  }

}