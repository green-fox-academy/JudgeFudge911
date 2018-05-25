import javax.swing.*;
import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class Circles {
  public static final int WIDTH = 400;
  public static final int HEIGHT = 400;

  private static Graphics canvas;

  private static void mainDraw() {

    drawCircle(0, 0, WIDTH);

  }

  public static void drawCircle(int x, int y, int size) {
    canvas.drawOval(x, y, size, size);
    if (size > 20) {
      drawCircle(x + size / 4, y, size / 2);
      drawCircle(x, y + size / 3, size / 2);
      drawCircle(x + size/2, y + size / 3, size / 2);
    }
  }

  public static void main(String[] args) {

    JFrame jFrame = new JFrame("Drawing");
    jFrame.setSize(new Dimension(WIDTH, HEIGHT + 23));
    jFrame.setDefaultCloseOperation(EXIT_ON_CLOSE);
    jFrame.add(new Hexagon.ImagePanel());
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
