import java.util.ArrayList;
import java.util.List;

public class Carrier {

  List<Aircraft> aircrafts;
  int storeOfAmmo;
  int healthPoints;

  public Carrier(int storeOfAmmo, int healthPoints) {
    aircrafts = new ArrayList<>();
    this.storeOfAmmo = storeOfAmmo;
    this.healthPoints = healthPoints;
  }

  public void add(Aircraft aircraft){
    aircrafts.add(aircraft);
  }
}
