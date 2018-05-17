import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class StarryNight {
  public static void mainDraw(Graphics graphics) {
    // Draw the night sky:
    //  - The background should be black
    //  - The stars can be small squares
    //  - The stars should have random positions on the canvas
    //  - The stars should have random color (some shade of grey)

    int numberOfStars = 10;

    for (int i = 0; i < numberOfStars; i++) {
      int size = (int) (Math.random() * 100);
      int color = (int) (Math.random() * 256);
      drawStar(graphics, size, color);
    }

  }

  public static void drawStar(Graphics graphics, int size, int color) {

    int xPos = (int) (Math.random() * 100);
    int yPos = (int) (Math.random() * 100);
    graphics.setColor(new Color(color, color, color));
    graphics.fillRect(xPos, yPos, size, size);

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
