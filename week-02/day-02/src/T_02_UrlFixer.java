public class T_02_UrlFixer {
  public static void main(String[] args) {
    String url = "https//www.reddit.com/r/nevertellmethebots";
    url = url.replaceFirst("/", ":/");
    url = url.replace("bots", "odds");

    System.out.println(url);
  }
}
