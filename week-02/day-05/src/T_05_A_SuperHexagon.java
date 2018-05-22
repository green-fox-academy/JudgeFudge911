import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class T_05_A_SuperHexagon {
  public static void mainDraw(Graphics graphics) {

    int elemenntsPerSide = 4;

    int elementsPerHeight = 2 * elemenntsPerSide - 1;

    int hexagonHeight = HEIGHT / elementsPerHeight;

    double temp = (hexagonHeight / Math.sqrt(3) - (int) (hexagonHeight / Math.sqrt(3)));

    int hexagonSide = 0;

    if (temp > 0.5) {
      hexagonSide = (int) (hexagonHeight / Math.sqrt(3)) + 1;
    } else {
      hexagonSide = (int) (hexagonHeight / Math.sqrt(3));
    }

    int hexagonWidth = hexagonSide * 2;

    int zeroPoint = 0;

    int zeroHeightPoint1 = (elemenntsPerSide - 1) * hexagonHeight / 2;

    int zeroHeightPoint2 = HEIGHT - (elemenntsPerSide - 1) * hexagonHeight / 2;

    int[] xPoints1 = {zeroPoint, zeroPoint + hexagonWidth / 4, zeroPoint + (int) (0.75 * hexagonWidth), zeroPoint + hexagonWidth, zeroPoint + (int) (0.75 * hexagonWidth), zeroPoint + hexagonWidth / 4};

    int[] xPoints2 = {WIDTH, WIDTH - hexagonWidth / 4, WIDTH - (int) (0.75 * hexagonWidth), WIDTH - hexagonWidth, WIDTH - (int) (0.75 * hexagonWidth), WIDTH - hexagonWidth / 4};

    int[] xPoints3 = {hexagonWidth, hexagonWidth + hexagonWidth / 4, hexagonWidth + (int) (0.75 * hexagonWidth), 2*hexagonWidth, hexagonWidth + (int) (0.75 * hexagonWidth), hexagonWidth + hexagonWidth / 4};

    int[] xPoints4 = {WIDTH-hexagonWidth, WIDTH - (int)(1.25*hexagonWidth), WIDTH - (int) (1.75 * hexagonWidth), WIDTH - 2*hexagonWidth, WIDTH - (int) (1.75 * hexagonWidth), WIDTH - (int)(1.25*hexagonWidth)};

    int[] yPoints1 = {zeroHeightPoint1 + hexagonHeight / 2, zeroHeightPoint1, zeroHeightPoint1, zeroHeightPoint1 + hexagonHeight / 2, zeroHeightPoint1 + hexagonHeight, zeroHeightPoint1 + hexagonHeight};

    int[] yPoints2 = {zeroHeightPoint2 - hexagonHeight / 2, zeroHeightPoint2, zeroHeightPoint2, zeroHeightPoint2 - hexagonHeight / 2, zeroHeightPoint2 - hexagonHeight, zeroHeightPoint2 - hexagonHeight};

    int[] yPoints3 = {zeroHeightPoint1, zeroHeightPoint1 - hexagonHeight/2, zeroHeightPoint1 - hexagonHeight/2, zeroHeightPoint1, zeroHeightPoint1 + hexagonHeight/2, zeroHeightPoint1 + hexagonHeight/2};

    int[] yPoints4 = {zeroHeightPoint2, zeroHeightPoint2+hexagonHeight/2, zeroHeightPoint2+hexagonHeight/2, zeroHeightPoint2 , zeroHeightPoint2 - hexagonHeight/2, zeroHeightPoint2 - hexagonHeight/2};

    for (int i = 0; i < 2; i++) {
      for (int j = 0; j < elemenntsPerSide; j++) {

        graphics.drawPolygon(xPoints1, yPoints1, 6);

        graphics.drawPolygon(xPoints2, yPoints2, 6);

        for (int k = 0; k < 6; k++) {
          yPoints1[k] += hexagonHeight;
          yPoints2[k] -= hexagonHeight;
        }
      }
      for (int k = 0; k < 6; k++) {
        yPoints1[k] -= (elemenntsPerSide+1)*hexagonHeight;
        yPoints2[k] += (elemenntsPerSide+1)*hexagonHeight;
      }
      for (int k = 0; k < 6; k++) {
        xPoints1[k] += hexagonWidth*2;
        xPoints2[k] -= hexagonWidth*2;
      }
      elemenntsPerSide += 2;

    }

    int elementsperside2 = 5;
    for (int i = 0; i < 2; i++) {
      for (int j = 0; j < elementsperside2; j++) {
        graphics.drawPolygon(xPoints4, yPoints4, 6);
        if (i==0) {
          graphics.drawPolygon(xPoints3, yPoints3, 6);

        }
        for (int k = 0; k < 6; k++) {
          yPoints3[k] += hexagonHeight;
          yPoints4[k] -= hexagonHeight;
        }
      }
      for (int k = 0; k < 6; k++) {
        yPoints3[k] -= 6*hexagonHeight;
        yPoints4[k] += 6*hexagonHeight;
      }
      for (int k = 0; k < 6; k++) {
        xPoints3[k] += hexagonWidth*2;
        xPoints4[k] -= hexagonWidth*2;
      }
      elementsperside2 += 2;
    }
  }


  static int HEIGHT = 400;
  static int WIDTH = (int)(HEIGHT*1.15);

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
