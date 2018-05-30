public class Gnirts implements CharSequence {

  private String dunnoYet;

  public Gnirts(String dunnoYet){
    this.dunnoYet = dunnoYet;
  }


  @Override
  public int length() {
    return 0;
  }

  @Override
  public char charAt(int index) {
    return 0;
  }

  @Override
  public CharSequence subSequence(int start, int end) {
    return null;

  }

  public String getDunnoYet() {
    return dunnoYet;
  }

  public void setDunnoYet(String dunnoYet) {
    this.dunnoYet = dunnoYet;
  }

  public static void main(String[] args) {

  }
}
