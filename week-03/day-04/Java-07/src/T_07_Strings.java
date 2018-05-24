public class T_07_Strings {
  public static void main(String[] args) {
    // Given a string, compute recursively (no loops) a new string where all the
    // lowercase 'x' chars have been changed to 'y' chars.

    System.out.println(xToY("xxxsyyyyxxxasdasdxx"));

  }

  public static String xToY(String text){

    if (!text.contains("x")){
      return text;
    } else {
      return xToY(text.replace("x","y"));
    }

  }
}
