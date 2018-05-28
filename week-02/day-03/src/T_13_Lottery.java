import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class T_13_Lottery {
  public static void main(String[] args) {
    // Create a method that find the 5 most common lottery numbers in lottery.csv

    printOutMostCommon("lottery.txt");

    //OR

    /*HashMap<Integer, Integer> lotteryNumbers = readNumbers("lottery.txt");

    int[] mostCommonNumbers = findMostCommon(lotteryNumbers);

    printOutMostCommon(mostCommonNumbers);*/

  }

  public static HashMap<Integer, Integer> readNumbers(String fileName) {
    try {
      Scanner fileScanner = new Scanner(new File(fileName));
      String[] currentLine;
      Integer currentNumber;

      HashMap<Integer, Integer> lotteryNumbers = new HashMap<>();

      while (fileScanner.hasNext()) {
        currentLine = fileScanner.nextLine().split(";");
        for (int i = 0; i < 5; i++) {
          currentNumber = Integer.parseInt(currentLine[currentLine.length - i - 1]);
          lotteryNumbers.merge(currentNumber, 1, Integer::sum);
        }
      }
      return lotteryNumbers;
    } catch (IOException e) {
      System.out.println("Couldn't read file");
      return null;
    }
  }

  public static int[] findMostCommon(HashMap<Integer, Integer> list) {

    int numberOfElements = 5;

    int[] mostCommonNumbers = new int[numberOfElements];

    for (int i = 0; i < 5; i++) {
      Map.Entry<Integer, Integer> maxEntry = null;
      for (Map.Entry<Integer, Integer> entry : list.entrySet()) {
        if (maxEntry == null || entry.getValue().compareTo(maxEntry.getValue()) > 0) {
          maxEntry = entry;
        }
      }
      mostCommonNumbers[i] = maxEntry.getKey();
      list.remove(maxEntry.getKey(), maxEntry.getValue());
    }

    return mostCommonNumbers;
  }

  public static void printOutMostCommon(String fileName) {
    int[] mostCommonNumbers = findMostCommon(readNumbers(fileName));

    System.out.print("These are the 5 most common lottery numbers: ");
    for (int i = 0; i < mostCommonNumbers.length; i++) {
      if (i == mostCommonNumbers.length - 1) {
        System.out.print(mostCommonNumbers[i] + ".");
      } else {
        System.out.print(mostCommonNumbers[i] + ", ");
      }
    }
  }
}
