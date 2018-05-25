import sun.nio.cs.KOI8_R;

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

  private static void mainDraw() {

    ArrayList<KochLine> lines = new ArrayList<>();

    int[] start = {0, 200};
    int[] end = {200, 200};

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


