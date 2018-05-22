import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class T_01_LinePlay {
  public static void mainDraw(Graphics graphics) {

    int zeroPoint = 0;
    int endPoint = HEIGHT;

    for (int i = 0; i < endPoint; i += 10) {
      graphics.setColor(Color.green);
      graphics.drawLine(zeroPoint, zeroPoint + i, zeroPoint + i, endPoint);
      graphics.setColor(Color.red);
      graphics.drawLine(endPoint, endPoint - i, endPoint - i, zeroPoint);
    }

  }

  static int WIDTH = 400;
  static int HEIGHT = 400;

  public static void main(String[] args) {
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
      mainDraw(graphics);
    }
  }
}
