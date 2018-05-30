public class Gnirts implements CharSequence {

  private String text;

  public Gnirts(String text){
    this.text = text;
  }


  @Override
  public int length() {
    return getText().length();
  }

  @Override
  public char charAt(int index) {
    return getText().charAt(length()-index-1);
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

}
