import javax.swing.*;

import java.awt.*;
import java.lang.reflect.Array;
import java.util.ArrayList;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class ConnectTheDots {
  public static void mainDraw(Graphics graphics) {
    // Create a function that takes 1 parameter:
    // An array of {x, y} points
    // and connects them with green lines.
    // Connect these to get a box: {{10, 10}, {290,  10}, {290, 290}, {10, 290}}
    // Connect these: {{50, 100}, {70, 70}, {80, 90}, {90, 90}, {100, 70},
    // {120, 100}, {85, 130}, {50, 100}}
    int [][] box = {{10, 10}, {290,  10}, {290, 290}, {10, 290}};
    int [][] wut = {{50, 100}, {70, 70}, {80, 90}, {90, 90}, {100, 70}, {120, 100}, {85, 130}, {50, 100}};

    connectTheDots(graphics, box);
    connectTheDots(graphics, wut);

  }

  public static void connectTheDots(Graphics graphics, int[][] dots) {

    int[] x = new int[dots.length];
    int[] y = new int[dots.length];

    for (int i = 0; i < dots.length; i++) {
      for (int j = 0; j < dots[i].length; j++) {
       if (j % 2 == 0) {
         x[i] = dots[i][j];
       } else {
         y[i] = dots[i][j];
       }
      }
    }

    graphics.drawPolygon(x,y,x.length);
  }

  // Don't touch the code below
  static int WIDTH = 300;
  static int HEIGHT = 300;

  public static void main(String[] args) {
    JFrame jFrame = new JFrame("Drawing");
    jFrame.setSize(new Dimension(WIDTH, HEIGHT+23));
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


// create a 300x300 canvas.