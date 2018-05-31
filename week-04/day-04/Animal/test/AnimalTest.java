import org.junit.Test;

import static org.junit.Assert.*;

public class AnimalTest {

  @Test
  public void eat_should_decreaseHungerBy1_when_animalInput() {
    Animal animal = new Animal();

    Animal.eat(animal);

    int result = 49;
    assertEquals(result,animal.hunger);
  }

  @Test
  public void drink() {
    Animal animal = new Animal();

    Animal.drink(animal);

    int result = 49;
    assertEquals(result,animal.thirst);
  }

  @Test
  public void play() {
    Animal animal = new Animal();

    Animal.play(animal);

    int result = 51;

    boolean hungerAndThirst = (result == animal.hunger && result ==animal.thirst);

    assertTrue(hungerAndThirst);

  }
}