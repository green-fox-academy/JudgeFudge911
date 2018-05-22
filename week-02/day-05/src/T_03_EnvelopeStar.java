import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class T_03_EnvelopeStar {
  public static void mainDraw(Graphics graphics) {

    int zero = 0;
    int middle = HEIGHT / 2;

    for (int i = 0; i < WIDTH/2; i += 10) {

      graphics.drawLine(zero + i, middle, middle, middle - i);
      graphics.drawLine(WIDTH - i, middle, middle, middle - i);
      graphics.drawLine(zero + i, middle, middle, middle + i);
      graphics.drawLine(WIDTH - i, middle, middle, middle + i);


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
