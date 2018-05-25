import javax.swing.*;
import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class Triangles {

  private static Graphics canvas;

  private static void mainDraw() {


    drawTriangle(100,100,100);

  }

  public static void drawTriangle(int x, int y, int size){

    int[] xPoints = {x,x+size,x+size/2};
    int[] yPoints = {y,y,y+size};

    canvas.drawPolygon(xPoints,yPoints,3);

  }

  public static void main(String[] args) {
    final int WIDTH = 400;
    final int HEIGHT = 400;
    JFrame jFrame = new JFrame("Drawing");
    jFrame.setSize(new Dimension(WIDTH, HEIGHT + 23));
    jFrame.setDefaultCloseOperation(EXIT_ON_CLOSE);
    jFrame.add(new Triangles.ImagePanel());
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
