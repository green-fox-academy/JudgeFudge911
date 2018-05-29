public class Aircraft {

  int ammoStore;
  int maxAmmo;
  int baseDamage;

  public Aircraft() {
    ammoStore = 0;
  }

  public int fight() {
    int damage = ammoStore * baseDamage;

    ammoStore = 0;

    return damage;
  }

  public int refill(int ammo) {
    if (ammoStore + ammo < maxAmmo) {
      ammoStore += ammo;
      return 0;
    } else {
      int remainingAmmo = ammo-(maxAmmo-ammoStore);
      ammoStore = maxAmmo;
      return remainingAmmo;
    }

  }

}