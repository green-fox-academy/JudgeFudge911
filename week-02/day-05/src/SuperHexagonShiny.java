import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class SuperHexagonShiny {
  public static void mainDraw(Graphics graphics) {

    int elementsPerSide = 4;

    int elementsPerHeight = 2 * elementsPerSide - 1;

    int hexagonWidth = 0;

    int hexagonHeight = 0;

    drawHexagon(graphics,100,100,true);


  }

  public static void drawHexagon(Graphics graphics, int xZero, int yZero, boolean evenColumn) {

    int hexagonWidth = 20;

    int hexagonHeight = 17;


    if (evenColumn) {

      int[] x = {xZero, xZero + hexagonWidth / 4, xZero + (int) (0.75 * hexagonWidth), xZero + hexagonWidth, xZero + (int) (0.75 * hexagonWidth), xZero + hexagonWidth / 4};

      int[] y = {yZero, yZero - hexagonHeight / 2, yZero - hexagonHeight / 2, yZero, yZero + hexagonHeight / 2, yZero + hexagonHeight / 2};

      int nPoints = 6;

      graphics.drawPolygon(x, y, nPoints);
    } else {

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