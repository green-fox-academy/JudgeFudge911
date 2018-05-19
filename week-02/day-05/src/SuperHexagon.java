import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class SuperHexagon {
  public static void mainDraw(Graphics graphics) {

    int elemenntsPerSide = 4;

    int elementsPerHeight = 2 * elemenntsPerSide - 1;

    int hexagonHeight = HEIGHT / elementsPerHeight;

    double temp = (hexagonHeight / Math.sqrt(3) - (int) (hexagonHeight / Math.sqrt(3)));

    int hexagonSide = 0;

    if (temp > 0.5) {
      hexagonSide = (int) (hexagonHeight / Math.sqrt(3)) + 1;
    } else {
      hexagonSide = (int) (hexagonHeight / Math.sqrt(3));
    }

    int hexagonWidth = hexagonSide * 2;

    int zeroPoint = 100;


    int[] xPoints = {zeroPoint, zeroPoint + hexagonSide, zeroPoint + (int)(1.5 * hexagonSide), zeroPoint + hexagonSide, zeroPoint, zeroPoint + (-1 * hexagonSide/2)};

    int[] yPoints = {zeroPoint, zeroPoint, zeroPoint+hexagonHeight / 2, zeroPoint+hexagonHeight, zeroPoint+hexagonHeight, zeroPoint+hexagonHeight / 2};

    graphics.drawPolygon(xPoints, yPoints, 6);

    /*    for (int i = 1; i < HEIGHT / hexagonHeight+1; i++) {
    graphics.drawPolygon(0);
    }*/


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
