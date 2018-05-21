import com.sun.deploy.util.ArrayUtil;

import java.util.ArrayList;
import java.util.Arrays;

public class T_06_SolarSystem {
  public static void main(String[] args) {
    ArrayList<String> planetList = new ArrayList<String>(Arrays.asList("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune"));

    System.out.println(putSaturn(planetList));
  }

  public static ArrayList putSaturn(ArrayList before) {

    before.add("Saturn");

    return before;

  }
}
