public class T_04_Power {
  public static void main(String[] args) {
    // Given base and n that are both 1 or more, compute recursively (no loops)
    // the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

    System.out.println(powerOf(3, 2));

  }

  public static int powerOf (int base, int n){

    if (n == 0){
      return 1;
    } else {
      return base * powerOf(base,n-1);
    }



  }

}
