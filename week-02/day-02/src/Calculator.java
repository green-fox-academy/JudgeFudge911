import java.util.ArrayList;
import java.util.Scanner;

public class Calculator {
  public static void main(String[] args) {

    ArrayList<String> expression = new ArrayList<>();

    getUserInput(expression);


  }
  public static void getUserInput(ArrayList expression){
    Scanner scanner = new Scanner(System.in);

    System.out.println("Gimme operation!");
    String operation = scanner.next();
    System.out.println("Gimme operand1!");
    String operand1 = scanner.next();
    System.out.println("Gimme operand2!");
    String operand2 = scanner.next();

    expression.add(operation);
    expression.add(operand1);
    expression.add(operand2);

    System.out.println(expression);


    }

  }
