import java.util.ArrayList;
import java.util.Arrays;

public class T_07_Matchmaking {
  public static void main(String[] args) {
    ArrayList<String> girls = new ArrayList<>(Arrays.asList("Eve", "Ashley", "Bözsi", "Kat", "Jane"));
    ArrayList<String> boys = new ArrayList<>(Arrays.asList("Joe", "Fred", "Béla", "Todd", "Neef", "Jeff"));
    System.out.println(makingMatches(girls, boys));

  }

  public static ArrayList makingMatches(ArrayList a, ArrayList b) {
    ArrayList<String> c = new ArrayList<>();

    int iterations;

    if (a.size() > b.size()) {
      iterations = b.size();
    } else {
      iterations = a.size();
    }

    for (int i = 0; i < iterations; i++) {
      c.add(a.get(i).toString());
      c.add(b.get(i).toString());
    }

    return c;
  }
}
