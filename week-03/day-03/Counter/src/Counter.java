public class Counter {

  static int counter;
  static int reset;


  public Counter() {
    counter = 0;
    reset = 0;
  }

  public Counter(int number) {
    counter = number;
    reset = number;
  }

  public void add (){
    counter++;
  }

  public void add (int number){
    counter += number;
  }

  public int get(){
    return counter;
  }

  public void reset(){
    counter = reset;
  }

}
