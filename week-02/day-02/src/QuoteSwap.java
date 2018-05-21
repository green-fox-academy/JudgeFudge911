import java.util.ArrayList;
import java.util.Arrays;

public class QuoteSwap {
  public static void main(String[] args) {
    ArrayList<String> list = new ArrayList<String>(Arrays.asList("What", "I", "do", "create,", "I", "cannot", "not", "understand."));

    System.out.println(quoteSwap(list));
  }

  public static String quoteSwap(ArrayList quote) {

    Object swap1 = "do";
    Object swap2 = "cannot";

    Object temp = quote.get(quote.indexOf(swap2));

    quote.set(quote.indexOf(swap2), quote.get(quote.indexOf(swap1)));
    quote.set(quote.indexOf(swap1), temp);

    String print = "";
    for (int i = 0; i < quote.size(); i++) {
      quote.set(i, quote.get(i).toString().concat(" "));
      print += quote.get(i);
    }

    return print;
  }
}
