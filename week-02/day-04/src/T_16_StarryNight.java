import com.sun.javaws.util.JfxHelper;

import javax.swing.*;

import java.awt.*;

import static java.awt.Frame.getFrames;
import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class T_16_StarryNight {
  public static void mainDraw(Graphics graphics) {
    // Draw the night sky:
    //  - The background should be black
    //  - The stars can be small squares
    //  - The stars should have random positions on the canvas
    //  - The stars should have random color (some shade of grey)



    int numberOfStars = 100;

    for (int i = 0; i < numberOfStars; i++) {
      int size = (int) (Math.random() * 20);
      int color = (int) (Math.random() * 255);
      drawStar(graphics, size, color);
    }

  }

  public static void drawStar(Graphics graphics, int size, int color) {

    int xPos = (int) (Math.random() * 320);
    int yPos = (int) (Math.random() * 320);
    graphics.setColor(new Color(color, color, color));
    graphics.fillRect(xPos, yPos, size, size);

  }

  // Don't touch the code below
  static int WIDTH = 320;
  static int HEIGHT = 320;

  public static void main(String[] args) {
    JFrame jFrame = new JFrame("Drawing");
    jFrame.setSize(new Dimension(WIDTH, HEIGHT+23));
    jFrame.setDefaultCloseOperation(EXIT_ON_CLOSE);
    jFrame.add(new ImagePanel()).setBackground(Color.black);
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
