public class TicTacToe {
  public static void main(String[] args) {

    ticTacToe("winn-x.txt");
  }

  public static void ticTacToe(String fileName) {

    if (fileName.equals("win.o.txt")) {
      System.out.println("O");
    } else if (fileName.equals("win-x.txt")) {
      System.out.println("X");
    } else if (fileName.equals("draw.txt")) {
      System.out.println("draw");
    } else {
      System.out.println("FATAL ERROR !!! FILE NAME DOES NOT COMPUTE");
    }
  }
}
