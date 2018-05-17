import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class EverythingGoesToCenter {
  public static void mainDraw(Graphics graphics) {
    // Create a line drawing function that takes 2 parameters:
    // The x and y coordinates of the line's starting point
    // and draws a line from that point to the center of the canvas.
    // Fill the canvas with lines from the edges, every 20 px, to the center.
      int gapBetweenRows = 20;
      int start = 0;
      int end = 0;
      for (int j = 0; j < HEIGHT / gapBetweenRows; j++) {
        drawLine(graphics, start, end);
        start += gapBetweenRows;
      }
    gapBetweenRows = 20;
    start = 0;
    end = 0;
      for (int j = 0; j < HEIGHT / gapBetweenRows; j++) {
        drawLine(graphics, start, end);
        end += gapBetweenRows;
      }
    gapBetweenRows = 20;
    start = HEIGHT;
    end = HEIGHT;
    for (int j = 0; j < HEIGHT / gapBetweenRows+1; j++) {
      drawLine(graphics, start, end);
      start -= gapBetweenRows;
    }
    gapBetweenRows = 20;
    start = HEIGHT;
    end = HEIGHT;
    for (int j = 0; j < HEIGHT / gapBetweenRows+1; j++) {
      drawLine(graphics, start, end);
      end -= gapBetweenRows;
    }
  }

  public static void drawLine(Graphics graphics, int x, int y) {

    graphics.drawLine(x, y, WIDTH / 2, HEIGHT / 2);

  }

  // Don't touch the code below
  static int WIDTH = 320;
  static int HEIGHT = 320;

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
