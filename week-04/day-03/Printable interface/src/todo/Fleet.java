package todo;

import java.util.ArrayList;

public class Fleet {
  private ArrayList<Thing> things;

  public ArrayList<Thing> getThings() {
    return things;
  }

  public Fleet() {
    things = new ArrayList<>();
  }

  public void add(Thing... lotOfThings) {
    for (Thing thing :
            lotOfThings) {
      things.add(thing);
    }
  }

  @Override
  public String toString() {
    String result = "";
    for (int i = 0; i < things.size(); i++) {
      result += (i + 1) + ". " + things.get(i) + "\n";
    }
    return result;
  }
}