import java.util.ArrayList;

public class Sum {

  public int sumOfElements(ArrayList<Integer> numbers) {
    if (numbers == null) {
      return 0;
    }
    int sum = 0;
    for (Integer number : numbers) {
      sum += number;
    }
    return sum;
  }

}
