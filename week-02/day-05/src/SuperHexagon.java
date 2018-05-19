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

    int zeroPoint = 0;


    int[] xPoints = {zeroPoint, zeroPoint + hexagonWidth / 4, zeroPoint + (int) (0.75 * hexagonWidth), zeroPoint + hexagonWidth, zeroPoint + (int) (0.75 * hexagonWidth), zeroPoint + hexagonWidth / 4};

    int[] yPoints = {zeroPoint + hexagonHeight / 2, zeroPoint, zeroPoint, zeroPoint + hexagonHeight / 2, zeroPoint + hexagonHeight, zeroPoint + hexagonHeight};

    for (int i = 0; i < HEIGHT / hexagonHeight; i++) {
      graphics.setColor(new Color((int) (Math.random() * 256), (int) (Math.random() * 256), (int) (Math.random() * 256)));
      for (int j = 0; j < WIDTH / hexagonWidth; j++) {
        graphics.fillPolygon(xPoints, yPoints, 6);
        for (int k = 0; k < 6; k++) {
          xPoints[k] += hexagonWidth;
        }
      }
      for (int k = 0; k < 6; k++) {
        yPoints[k] += hexagonHeight;
        xPoints[k] -= 6 * hexagonWidth;
      }
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
