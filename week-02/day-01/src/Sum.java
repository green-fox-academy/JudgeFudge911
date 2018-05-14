public class Sum {

//  Create the usual class wrapper
//  and main method on your own.

// - Write a function called `sum` that sum all the numbers
//   until the given parameter and returns with an integer

  public static void main(String[] args) {
    System.out.println(sum(3));
  }

  public static int sum(int number){
    int sum = 0;

    for (int i = 1; i < number+1; i++) {
      sum += i;
    }
    return sum;
  }
}
