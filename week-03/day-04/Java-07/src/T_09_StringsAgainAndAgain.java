public class T_09_StringsAgainAndAgain {
  public static void main(String[] args) {
    // Given a string, compute recursively a new string where all the
    // adjacent chars are now separated by a "*".

    System.out.println(separate("abcdefg"));
  }

  public static String separate(String text){

   if(text.length() == 1){
     return text;
   } else {
     String call = text.substring(1);
     return text.substring(0,1) + "*" + separate(call);
   }

  }

}
