import javax.swing.*;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class SuperHexagonShiny {

  private static final int WIDTH = 400;
  private static final int HEIGHT = 462;

  private static final int NUMBEROFELEMENTSPERSIDE = 4;
  private static final int NUMBEROFELEMENTSPERHEIGHT = 2 * NUMBEROFELEMENTSPERSIDE - 1;
  private static final int HEXAGONHEIGHT = HEIGHT / NUMBEROFELEMENTSPERHEIGHT;
  private static final int HEXAGONWIDTH = WIDTH / NUMBEROFELEMENTSPERSIDE;

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

      int[] x = {xZero, xZero + HEXAGONWIDTH / 4, xZero + (int) Math.round(0.75 * HEXAGONWIDTH), xZero + HEXAGONWIDTH, xZero + (int) Math.round(0.75 * HEXAGONWIDTH), xZero + HEXAGONWIDTH / 4};

      int[] y = {yZero + HEXAGONHEIGHT / 2, yZero, yZero, yZero + HEXAGONHEIGHT / 2, yZero + HEXAGONHEIGHT, yZero + HEXAGONHEIGHT};

      int nPoints = 6;

      canvas.drawPolygon(x, y, nPoints);
    }
  }

  public static void initialize(List matrix) {

    for (int i = 0; i < NUMBEROFELEMENTSPERHEIGHT; i++) {
      for (int j = 0; j < NUMBEROFELEMENTSPERHEIGHT; j++) {
        if (j % 2 == 0) {
          if (j == NUMBEROFELEMENTSPERHEIGHT / 2) {
            int[] xYPoints = {(int) Math.round(j * HEXAGONWIDTH * 0.75), i * HEXAGONHEIGHT};
            matrix.add(xYPoints);
          } else {
            int[] empty = {-1, -1};
            matrix.add(empty);
          }
        } else {
          int[] xYPoints = {(int) Math.round(j * HEXAGONWIDTH * 0.75), i * HEXAGONHEIGHT + HEXAGONHEIGHT / 2};
          matrix.add(xYPoints);
        }
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