import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class T_12_SquareRecursion {

  private static Graphics canvas;

  public static void mainDraw() {

    recursiveSquares(4);


  }

  public static int recursiveSquares(int n) {

    if (n == 1) {
      canvas.drawRect(0,0,WIDTH,HEIGHT);
      return 3;
    } else {

      int ratio = recursiveSquares(n - 1);

      canvas.drawRect(WIDTH/ratio, 0, WIDTH / ratio, HEIGHT / ratio);

      canvas.drawRect(WIDTH/ratio, 2*HEIGHT/ratio, WIDTH / ratio, HEIGHT / ratio);

      canvas.drawRect(0, HEIGHT/ratio, WIDTH / ratio, HEIGHT / ratio);

      canvas.drawRect(2*WIDTH/ratio, HEIGHT/ratio, WIDTH / ratio, HEIGHT / ratio);

      return (int)(Math.pow(3,n));
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
      canvas = graphics;
      mainDraw();
    }
  }
}
