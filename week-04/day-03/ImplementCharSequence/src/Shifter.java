public class Shifter implements CharSequence {

  private String text;
  private int shift;

  public Shifter(String text, int shift) {
    this.text = text;
    this.shift = shift;
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

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public int getShift() {
    return shift;
  }

  public void setShift(int shift) {
    this.shift = shift;
  }
}
