import java.util.ArrayList;

public class Sum {

  public int sumOfElements(ArrayList<Integer> numbers) {

    int sum = 0;
    for (Integer number : numbers) {
      sum += number;
    }
    return sum;
  }

}
