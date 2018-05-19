import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class SuperHexagon {
  public static void mainDraw(Graphics graphics) {

    int elemenntsPerSide = 4;

    int elementsPerHeight = 2 * elemenntsPerSide - 1;

    int hexagonHeight = HEIGHT / elementsPerHeight;

    double temp = (hexagonHeight/ Math.sqrt(3) - (int)(hexagonHeight/ Math.sqrt(3)));

    int hexagonSide = 0;

    if (temp > 0.5){
      hexagonSide = (int) (hexagonHeight/ Math.sqrt(3)) + 1;
    } else {
      hexagonSide = (int) (hexagonHeight/ Math.sqrt(3));
    }

    int hexagonWidth = hexagonSide * 2;

    for (int i = 1; i < HEIGHT / hexagonHeight+1; i++) {
      graphics.drawLine(WIDTH / 2 - i * hexagonSide, i * hexagonHeight / 2, WIDTH / 2 + i * hexagonSide, i * hexagonHeight / 2);

      graphics.drawLine(WIDTH - i * 2 * hexagonSide, HEIGHT / 2, WIDTH - hexagonSide * i, HEIGHT / 2 - hexagonHeight * i);

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
