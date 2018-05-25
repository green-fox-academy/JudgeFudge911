import javax.swing.*;
import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class Hexagon {
  public static final int WIDTH = 462;
  public static final int HEIGHT = 400;

  private static Graphics canvas;

  private static void mainDraw() {

    drawHexagon(0, 0, WIDTH, HEIGHT);

  }

  public static void drawHexagon(int x, int y, int width, int height) {

    int[] xPoints = {x, x + width / 4, x + (int) Math.round(0.75 * width), x + width, x + (int) Math.round(0.75 * width), x + width / 4};

    int[] yPoints = {y + height / 2, y, y, y + height / 2, y + height, y + height};

    int nPoints = xPoints.length;

    canvas.drawPolygon(xPoints, yPoints, nPoints);
    if (width > 200) {
      drawHexagon(x+width/4,y,width/4,height/4);
      drawHexagon(x+width/2,y,width/4,height/4);
      drawHexagon(x+width/4,y+height*3/4,width/4,height/4);
      drawHexagon(x+width/2,y+height*3/4,width/4,height/4);
      drawHexagon(x,y+height/3,width/4,height/4);
      drawHexagon(x+width*3/4,y+height/3,width/4,height/4);
    }
  }

  public static void main(String[] args) {

    JFrame jFrame = new JFrame("Drawing");
    jFrame.setSize(new Dimension(WIDTH, HEIGHT + 23));
    jFrame.setDefaultCloseOperation(EXIT_ON_CLOSE);
    jFrame.add(new Hexagon.ImagePanel());
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