public class PostIt {
  String background;
  String text;
  String textColor;

  PostIt(String background, String text, String textColor) {
    this.background = background;
    this.text = text;
    this.textColor = textColor;
  }

  public static void main(String[] args) {

    PostIt obj = new PostIt("orange", "Idea 1", "blue");
    PostIt obj1 = new PostIt("pink", "Awesome", "black");
    PostIt obj2 = new PostIt("yellow", "Suberb!", "greens");

  }
}
