import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class T_13_Checkerboard {
  public static void mainDraw(Graphics graphics) {
    // Fill the canvas with a checkerboard pattern.
    int checkboardRows = 8;
    int topLeftCorner = 0;
    int xStart = topLeftCorner;
    int yStart = 0;
    int sizeOfSquare = WIDTH/checkboardRows;

    for (int i = 0; i < checkboardRows; i++) {
      for (int j = 0; j < checkboardRows; j++) {
        if (j % 2 == 0) {
          if (i % 2 == 0) {
            graphics.setColor(Color.WHITE);
          } else {
            graphics.setColor(Color.BLACK);
          }
        } else {
          if (i % 2 == 0) {
            graphics.setColor(Color.BLACK);
          } else {
            graphics.setColor(Color.WHITE);
          }
        }

        graphics.fillRect(xStart, yStart, sizeOfSquare, sizeOfSquare);
        xStart += sizeOfSquare;

      }
      yStart += sizeOfSquare;
      xStart = topLeftCorner;

    }


  }

  // Don't touch the code below
  static int WIDTH = 320;
  static int HEIGHT = 343;

  public static void main(String[] args) {
    JFrame jFrame = new JFrame("Drawing");
    jFrame.setSize(new Dimension(WIDTH, HEIGHT));
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