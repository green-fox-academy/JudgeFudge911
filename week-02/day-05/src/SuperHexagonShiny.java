import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class SuperHexagonShiny {

  public static final int WIDTH = 400;
  public  static final int HEIGHT = 400;

  private static Graphics canvas;

  public static void mainDraw() {




    int elementsPerSide = 4;

    int elementsPerHeight = 2 * elementsPerSide - 1;

    int hexagonWidth = 0;

    int hexagonHeight = 0;

    drawHexagon(100,100,true);


  }

  public static void drawHexagon(int xZero, int yZero, boolean evenColumn) {

    int hexagonWidth = 20;

    int hexagonHeight = 17;


    if (evenColumn) {

      int[] x = {xZero, xZero + hexagonWidth / 4, xZero + (int) (0.75 * hexagonWidth), xZero + hexagonWidth, xZero + (int) (0.75 * hexagonWidth), xZero + hexagonWidth / 4};

      int[] y = {yZero, yZero - hexagonHeight / 2, yZero - hexagonHeight / 2, yZero, yZero + hexagonHeight / 2, yZero + hexagonHeight / 2};

      int nPoints = 6;

      canvas.drawPolygon(x, y, nPoints);

    } else {

      int[] x = {xZero, xZero + hexagonWidth / 4, xZero + (int) (0.75 * hexagonWidth), xZero + hexagonWidth, xZero + (int) (0.75 * hexagonWidth), xZero + hexagonWidth / 4};

      int[] y = {yZero, yZero - hexagonHeight / 2, yZero - hexagonHeight / 2, yZero, yZero + hexagonHeight / 2, yZero + hexagonHeight / 2};

      int nPoints = 6;

      canvas.drawPolygon(x, y, nPoints);

    }

  }

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
      canvas = graphics;
      mainDraw();
    }
  }
}