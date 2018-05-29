import java.util.ArrayList;
import java.util.List;

public class Carrier {

  List<Aircraft> aircrafts;
  int storeOfAmmo;

  public Carrier(int storeOfAmmo) {
    aircrafts = new ArrayList<>();
    this.storeOfAmmo = storeOfAmmo;
  }
}
