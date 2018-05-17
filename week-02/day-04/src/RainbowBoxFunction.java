import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class RainbowBoxFunction {
  public static void mainDraw(Graphics graphics) {
    // Create a square drawing function that takes 2 parameters:
    // The square size, and the fill color,
    // and draws a square of that size and color to the center of the canvas.
    // Create a loop that fills the canvas with rainbow colored squares.
    int numberOfSquares = 3;

    for (int i = 0; i < numberOfSquares; i++) {
      int size = (int) (Math.random() * 100);
      int[] color = {(int) (Math.random() * 256), (int) (Math.random() * 256), (int) (Math.random() * 256)};
      drawSquare(graphics, size, color);
    }

  }

  public static void drawSquare(Graphics graphics, int size, int[] color) {

    int xPos = (int) (Math.random() * 100);
    int yPos = (int) (Math.random() * 100);
    graphics.setColor(new Color(color[0], color[1], color[2]));
    graphics.drawRect(xPos, yPos, size, size);


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
