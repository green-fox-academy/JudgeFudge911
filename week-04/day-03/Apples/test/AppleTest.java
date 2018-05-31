import org.junit.Test;

import static org.junit.Assert.*;

public class AppleTest {

  @Test
  public void getApple() {

    Apple apple = new Apple();

    String message = "appsle";

    assertEquals(message, apple.getApple());

  }
}