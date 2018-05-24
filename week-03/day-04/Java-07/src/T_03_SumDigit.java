public class T_03_SumDigit {
  public static void main(String[] args) {
    // Given a non-negative int n, return the sum of its digits recursively (no loops).
    // Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while
    // divide (/) by 10 removes the rightmost digit (126 / 10 is 12).
    System.out.println(sumDigits(126));
  }

  public static int sumDigits(int number){

    int sum = 0;

    if(number < 1){
      return number;
    } else {
      sum += number % 10 + sumDigits(number/10);
      return sum;
    }

  }



}
