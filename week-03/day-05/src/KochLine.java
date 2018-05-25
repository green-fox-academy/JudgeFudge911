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

  public int[] kochA() {
    return start;
  }

  public int[] kochB() {
    int[] lineEnd = new int[2];

    lineEnd[0] = end[0] / 3;

    lineEnd[1] = end[1];

    return lineEnd;
  }

  public int[] kochC() {
    int[] lineMiddle = new int[2];

    lineMiddle[0] = end[0]/ 2;

    lineMiddle[1] = end[0] / 2;

    return lineMiddle;
  }

  public int[] kochD() {
    int[] lineStart = new int[2];

    lineStart[0] = (end[0] / 3) * 2;

    lineStart[1] = end[1];

    return lineStart;
  }

  public int[] kochE() {
    return end;
  }

  public static ArrayList<KochLine> generate(ArrayList<KochLine> lines) {

    ArrayList<KochLine> next = new ArrayList<>();

    for (KochLine element : lines) {
      next.add(new KochLine(element.kochA(), element.kochB()));
      next.add(new KochLine(element.kochB(), element.kochC()));
      next.add(new KochLine(element.kochC(), element.kochD()));
      next.add(new KochLine(element.kochD(), element.kochE()));
    }

    return next;

  }

  private static void mainDraw() {

    ArrayList<KochLine> lines = new ArrayList<>();

    int[] start = {50, 200};
    int[] end = {100, 200};
    int repetition = 2;

    lines.add(new KochLine(start, end));

    for (int i = 0; i < repetition; i++) {
      for (KochLine element : lines) {
        element.display();
      }
      lines = generate(lines);
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


