import javax.swing.*;

import java.awt.*;
import java.lang.reflect.Array;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class FourRectangles {

  public static void mainDraw(Graphics graphics){
    // draw four different size and color rectangles.
    // avoid code duplication.
    graphics.drawRect(100,100,200,200);

    graphics.setColor(Color.red);
    graphics.fillRect(0,0,120,120);

    graphics.drawRoundRect(120,120,80,80,10,10);

    int[] polyX = {10, 100, 100, 10};
    int[] polyY = {100, 100, 10, 10};
    graphics.setColor(Color.white);
    graphics.drawPolygon(polyX, polyY, 4);
  }

  //    Don't touch the code below
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
  static class ImagePanel extends JPanel{
    @Override
    protected void paintComponent(Graphics graphics) {
      super.paintComponent(graphics);
      mainDraw(graphics);

    }
  }

}
