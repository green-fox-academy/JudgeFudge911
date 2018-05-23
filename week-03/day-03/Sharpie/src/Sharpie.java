public class Sharpie {

  String color;
  float width;
  float inkAmoun;

  public Sharpie(String color, float width) {
    this.color = color;
    this.width = width;
    inkAmoun = 100;
  }

  public static void use(Sharpie sharpie){
    sharpie.inkAmoun--;
  }
}
