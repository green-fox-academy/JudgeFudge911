public class Aircraft {

  int ammoStore;
  int maxAmmo;
  int baseDamage;

  public Aircraft() {
    ammoStore = 0;
  }

  public int fight() {
    int damage = allDamage();

    ammoStore = 0;

    return damage;
  }

  public int refill(int ammo) {
    if (ammoStore + ammo < maxAmmo) {
      ammoStore += ammo;
      return 0;
    } else {
      ammo -= (maxAmmo - ammoStore);
      ammoStore = maxAmmo;
      return ammo;
    }
  }

  public String getType() {
    if (this instanceof F16) {
      return "F16";
    } else {
      return "F35";
    }
  }

  public String getStatus() {
    String status = "Type " + getType() + ", Ammo: " + ammoStore + ", Base Damage: " + baseDamage + ", All Damage: " + allDamage();
    return status;
  }

  public int allDamage() {
    return ammoStore * baseDamage;
  }

  public boolean isPriority(){
    if (getType().equals("F35")){
      return true;
    } else {
      return false;
    }
  }

}