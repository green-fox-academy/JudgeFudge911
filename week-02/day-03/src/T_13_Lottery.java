import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class T_13_Lottery {
  public static void main(String[] args) {
    // Create a method that find the 5 most common lottery numbers in lottery.csv

    HashMap<Integer, Integer> lotteryNumbers = new HashMap<>();

    try {
      /* Path path = Paths.get("lottery.txt");*/

      Scanner isItOver = new Scanner(new File("lottery.txt"));

      String[] currentLine;

      Integer currentNumber;

      while (isItOver.hasNext()) {

        currentLine = isItOver.nextLine().split(";");

        for (int i = 0; i < 5; i++) {

          currentNumber = Integer.parseInt(currentLine[currentLine.length - i - 1]);

          lotteryNumbers.merge(currentNumber, 1, Integer::sum);

        }

      }

      Map.Entry<Integer, Integer> maxEntry = null;

      int[] mostCommonNumbers = new int[5];

      for (int i = 0; i < 5; i++) {
        for (Map.Entry<Integer, Integer> entry : lotteryNumbers.entrySet()) {
          if (maxEntry == null || entry.getValue().compareTo(maxEntry.getValue()) > 0) {
            maxEntry = entry;
          }
        }
        mostCommonNumbers[i] = maxEntry.getKey();
        System.out.println(lotteryNumbers.get(maxEntry.getKey()));


        lotteryNumbers.remove(maxEntry.getKey());

      }

      System.out.println(mostCommonNumbers[3]);


    } catch (
            IOException e)

    {
      System.out.println("Oh no");
    }

  }

}
