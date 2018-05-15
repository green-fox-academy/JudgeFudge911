public class TodoPrint {
  public static void main(String[] args) {
    String todoText = " - Buy milk\n";

    todoText = "My todo:\n".concat(todoText).concat(" - Donload games\n    - Diabolo");

    System.out.println(todoText);

  }
}