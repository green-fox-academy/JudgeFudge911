import org.junit.Test;

import static org.junit.Assert.*;

public class SharpieTest {

  @Test
  public void use_should_decreaseInkAmountByOne() {

      Sharpie sharpie = new Sharpie("piros",10);

      int result = 99;

    Sharpie.use(sharpie);

      assertEquals(result, sharpie.inkAmoun, 5);
  }

}