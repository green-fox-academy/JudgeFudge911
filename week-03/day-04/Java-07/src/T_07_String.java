public class T_07_String {
  public static void main(String[] args) {
    // Given a string, compute recursively (no loops) a new string where all the
    // lowercase 'x' chars have been changed to 'y' chars.

    System.out.println(xToy("xxxsy"));

  }

  public static String xToy (String text){

    if (!text.contains("x")){
      return text;
    } else {
      return xToy(text.replace("x","y"));
    }

  }
}
