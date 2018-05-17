import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class CenteredBoxFunction {

  public static void mainDraw(Graphics graphics) {
    // create a square drawing function that takes 1 parameter:
    // the square size
    // and draws a square of that size to the center of the canvas.
    // draw 3 squares with that function.
    // avoid code duplication.
    int numberOfSquares = 3;

    for (int i = 0; i < numberOfSquares; i++) {
      int size = (int) (Math.random() * 500);
      drawSquare(graphics, size);
    }

  }

  public static void drawSquare(Graphics graphics, int size) {
    int x = WIDTH / 2 - size / 2;
    int y = HEIGHT / 2 - size / 2;

    graphics.drawRect(x, y, size, size);

  }

  //    Don't touch the code below
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