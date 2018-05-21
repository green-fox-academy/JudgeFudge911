import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class T_06_SquareInTheCenter {

  public static void mainDraw(Graphics graphics) {
    // Draw a green 10x10 square to the canvas' center.

    int squareWidth = 200;

    int xPos = WIDTH / 2 - squareWidth / 2;
    int yPos = HEIGHT / 2 - squareWidth / 2;

    graphics.setColor(Color.green);
    graphics.drawRect(xPos, yPos, squareWidth, squareWidth);


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