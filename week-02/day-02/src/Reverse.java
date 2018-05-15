public class Reverse {
  public static void main(String[] args) {
    String reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";

    System.out.println(reverse(reversed));
  }

  public static String reverse(String sentence) {

    String print = "";

    for (int i = 0; i < sentence.length(); i++) {

      print += sentence.charAt(sentence.length()-i-1);

    }
    return print;
  }
}
