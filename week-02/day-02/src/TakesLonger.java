public class TakesLonger {
  public static void main(String[] args) {
    String quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.";

    String quote1 = quote.substring(0, quote.indexOf("you"));

    String quote2 = "always takes longer than ";

    String quote3 = quote.substring(quote.indexOf("you"));;

    quote = quote1.concat(quote2.concat(quote3));
    System.out.println(quote);
  }
}
