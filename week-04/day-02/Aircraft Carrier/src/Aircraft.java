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

  public String getType(){
    if(this instanceof F16){
      return "F16";
    } else {
      return "F35";
    }
  }

  public String getStatus(){
    String status = "Type " + getType() + ", Ammo: " + ammoStore + ", Base Damage: " + baseDamage + ", All Damage: " + allDamage();
  }

  private int allDamage() {


  }

}