import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class KochLine {
  private static Graphics canvas;
  int[] start;
  int[] end;

  KochLine(int[] start, int[] end) {
    this.start = start;
    this.end = end;
  }

  public void display() {
    canvas.drawLine(start[0], start[1], end[0], end[1]);
  }

  public int[] kochA(){
    return start;
  }
  public int[] kochB(){

  }
  public int[] kochC(){

  }
  public int[] kochD(){

  }
  public int[] kochE(){
    return end;
  }

  public void generate(ArrayList<KochLine> lines) {

    ArrayList<KochLine> next = new ArrayList<>();

    for (KochLine element : lines) {
      next.add(new KochLine(element.kochA(), element.kochB()));
      next.add(new KochLine(element.kochB(), element.kochC()));
      next.add(new KochLine(element.kochC(), element.kochD()));
      next.add(new KochLine(element.kochD(), element.kochE()));
    }

    lines = next;

  }

  private static void mainDraw() {

    ArrayList<KochLine> lines = new ArrayList<>();

    int[] start = {50, 200};
    int[] end = {350, 200};

    lines.add(new KochLine(start, end));

    for (KochLine element : lines) {
      element.display();
    }

  }

  public static void main(String[] args) {
    final int WIDTH = 400;
    final int HEIGHT = 400;
    JFrame jFrame = new JFrame("Drawing");
    jFrame.setSize(new Dimension(WIDTH, HEIGHT + 23));
    jFrame.setDefaultCloseOperation(EXIT_ON_CLOSE);
    jFrame.add(new ImagePanel());
    jFrame.setLocationRelativeTo(null);
    jFrame.setVisible(true);
  }

  static class ImagePanel extends JPanel {
    @Override
    protected void paintComponent(Graphics graphics) {
      super.paintComponent(graphics);
      canvas = graphics;
      mainDraw();
    }
  }
}


