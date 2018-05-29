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

  public void add(Aircraft aircraft) {
    aircrafts.add(aircraft);
  }

  public void fill() {
    if (checkAmmoStorage()) {
      for (Aircraft aircraft :
              aircrafts) {
        try {
          aircraft.refill(storeOfAmmo);
        } catch (Exception e) {
          System.out.println("Not enough ammo!");
        }
      }
    } else {
      for (Aircraft aircraft :
              aircrafts) {
        if (aircraft.isPriority()) {
          try {
            aircraft.refill(storeOfAmmo);
          } catch (Exception e) {
            System.out.println("Not enough ammo!");
          }
        }
      }
    }
  }

  public boolean checkAmmoStorage() {
    int ammoNeeded = 0;
    for (Aircraft aircraft :
            aircrafts) {
      ammoNeeded += aircraft.maxAmmo - aircraft.ammoStore
    }
    return ammoNeeded < storeOfAmmo;
  }

  public void fight(Carrier otherCarrier) {
    int totalDamage = 0;
    for (Aircraft aircraft :
            aircrafts) {
      totalDamage += aircraft.fight();
    }
    otherCarrier.healthPoints -= totalDamage;
  }

}