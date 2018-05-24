public class T_08_StringsAgain {
  public static void main(String[] args) {
    // Given a string, compute recursively a new string where all the 'x' chars have been removed.



  }

  public static String removeX(String text){

    if (!text.contains("x")){
      return text;
    } else {
      return removeX(text.replace("x","y"));
    }

  }

}
