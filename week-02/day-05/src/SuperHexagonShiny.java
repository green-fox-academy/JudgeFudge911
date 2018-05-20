import javax.swing.*;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class SuperHexagonShiny {

  private static final int WIDTH = 400;
  private static final int HEIGHT = 462;

  private static final int NUMBER_OF_ELEMENTS_PER_SIDE = 4;
  private static final int NUMBER_OF_ELEMENTS_PER_HEIGHT = 2 * NUMBER_OF_ELEMENTS_PER_SIDE - 1;
  private static final int HEXAGON_HEIGHT = HEIGHT / NUMBER_OF_ELEMENTS_PER_HEIGHT;
  private static final int HEXAGON_WIDTH = WIDTH / NUMBER_OF_ELEMENTS_PER_SIDE;

  private static Graphics canvas;

  private static void mainDraw() {


    ArrayList<int[]> matrix = new ArrayList<>();

    initialize(matrix);

    for (int i = 0; i < matrix.size(); i += 1) {
      drawHexagon(matrix.get(i)[0], matrix.get(i)[1]);
    }

  }

  public static void drawHexagon(int xZero, int yZero) {

    if (xZero == -1 || yZero == -1) {
      return;
    } else {

      int[] x = {xZero, xZero + HEXAGON_WIDTH / 4, xZero + (int) Math.round(0.75 * HEXAGON_WIDTH), xZero + HEXAGON_WIDTH, xZero + (int) Math.round(0.75 * HEXAGON_WIDTH), xZero + HEXAGON_WIDTH / 4};

      int[] y = {yZero + HEXAGON_HEIGHT / 2, yZero, yZero, yZero + HEXAGON_HEIGHT / 2, yZero + HEXAGON_HEIGHT, yZero + HEXAGON_HEIGHT};

      int nPoints = 6;

      canvas.drawPolygon(x, y, nPoints);
    }
  }

  public static void initialize(List matrix) {

    int emptyPerRow = 0;

    if (NUMBER_OF_ELEMENTS_PER_SIDE % 2 == 0) {
      emptyPerRow = NUMBER_OF_ELEMENTS_PER_HEIGHT / 2;
    } else {
      emptyPerRow = NUMBER_OF_ELEMENTS_PER_HEIGHT / 2 - 1;
    }

    int[] empty = {-1, -1};

    for (int i = 0; i < NUMBER_OF_ELEMENTS_PER_HEIGHT; i++) {
      for (int j = 0; j < NUMBER_OF_ELEMENTS_PER_HEIGHT; j++) {
        if (emptyPerRow > j || NUMBER_OF_ELEMENTS_PER_HEIGHT - 1 - emptyPerRow < j) {
          matrix.add(empty);
        } else {
          if (j % 2 == 0) {
            int[] xYPoints = {(int) Math.round(j * HEXAGON_WIDTH * 0.75), i * HEXAGON_HEIGHT};
            matrix.add(xYPoints);
          } else {
            int[] xYPoints = {(int) Math.round(j * HEXAGON_WIDTH * 0.75), i * HEXAGON_HEIGHT + HEXAGON_HEIGHT / 2};
            matrix.add(xYPoints);
          }
        }
      }
      if (i < NUMBER_OF_ELEMENTS_PER_HEIGHT / 2) {
        emptyPerRow -= 2;
      } else if (i == NUMBER_OF_ELEMENTS_PER_HEIGHT / 2) {
        if (NUMBER_OF_ELEMENTS_PER_SIDE % 2 == 0) {
          emptyPerRow += 1;
        } else {
          emptyPerRow += 3;
        }
      } else {
        emptyPerRow += 2;
      }
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