import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class T_04_Triangles {
  public static void mainDraw(Graphics graphics) {

    int numberOfRows = 40;
    int heightOfTriangle = HEIGHT/numberOfRows;
    int sideOfTriangle = HEIGHT/numberOfRows;
    int halfSideOfTriangle = sideOfTriangle/2;


    for (int i = 0; i < numberOfRows+1; i++) {

      graphics.drawLine(WIDTH-(sideOfTriangle*i), HEIGHT, WIDTH-(halfSideOfTriangle*i),HEIGHT-(heightOfTriangle*i));
      graphics.drawLine(sideOfTriangle*i, HEIGHT, (halfSideOfTriangle*i),HEIGHT-(heightOfTriangle*i));
      graphics.drawLine(WIDTH/2 - halfSideOfTriangle*i, heightOfTriangle*i , WIDTH/2 + halfSideOfTriangle*i,heightOfTriangle*i);
    }

  }

  static int WIDTH = 400;
  static int HEIGHT = 400;

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
