import javax.swing.*;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class SuperHexagonShiny {

  public static final int WIDTH = 400;
  public static final int HEIGHT = 462;

  public static final int NUMBEROFELEMENTSPERSIDE = 4;
  public static final int NUMBEROFELEMENTSPERHEIGHT = 2 * NUMBEROFELEMENTSPERSIDE - 1;
  public static final int HEXAGONHEIGHT = HEIGHT / NUMBEROFELEMENTSPERHEIGHT;
  public static final int HEXAGONWIDTH = WIDTH / NUMBEROFELEMENTSPERSIDE;

  private static Graphics canvas;

  public static void mainDraw() {


    ArrayList<Integer> matrix = new ArrayList<>();

    initializeMatrix(matrix);

    for (int i = 0; i < matrix.size(); i += 2) {
      drawHexagon(matrix.get(i), matrix.get(i + 1));
    }

  }

  public static void drawHexagon(int xZero, int yZero) {

    int[] x = {xZero, xZero + HEXAGONWIDTH / 4, xZero + (int) (0.75 * HEXAGONWIDTH), xZero + HEXAGONWIDTH, xZero + (int) (0.75 * HEXAGONWIDTH), xZero + HEXAGONWIDTH / 4};

    int[] y = {yZero + HEXAGONHEIGHT / 2, yZero, yZero, yZero + HEXAGONHEIGHT / 2, yZero + HEXAGONHEIGHT, yZero + HEXAGONHEIGHT};

    int nPoints = 6;

    canvas.drawPolygon(x, y, nPoints);

  }

  public static void initializeMatrix (List matrix){

    for (int i = 0; i < NUMBEROFELEMENTSPERHEIGHT; i++) {
      for (int j = 0; j < NUMBEROFELEMENTSPERHEIGHT; j++) {

        if (j % 2 == 0) {
          matrix.add((int) (j * HEXAGONWIDTH * 0.75));
          matrix.add(i * HEXAGONHEIGHT);
        } else {
          matrix.add((int) (j * HEXAGONWIDTH * 0.75));
          matrix.add(i * HEXAGONHEIGHT + HEXAGONHEIGHT / 2);
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