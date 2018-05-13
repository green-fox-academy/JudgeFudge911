package Diamond;

import java.util.Scanner;

import static Diamond.GetBuildingBlock.getBuildingBlock;
import static Diamond.GetNumber.getNumber;

public class ReversePyramid {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String questionRows = "How many rows should your pyramid have?";
        String questionBuildingBlock = "Enter a character for building block.";

        int numberOfRows = getNumber(questionRows);
        String buildingBlock = getBuildingBlock(questionBuildingBlock)

        //PATTERN
        String pattern = buildingBlock;
        String patternIncrement = pattern + pattern;
        for (int i = 0; i < numberOfRows - 1; i++) {
            pattern += patternIncrement;
        }

        //ANTI PATTERN
        String antiPattern = "";
        String antiPatternIncrement = " ";

        for (int i = 0; i < numberOfRows; i++) {

            //RESET STRING AT EVERY ROW
            String row = "";

            //FIRST ROW DOESN'T GET SPACE EVERY OTHER DOES INCREASINGLY MORE
            if (i != 0) {
                antiPattern += antiPattern;
            } else {
                antiPattern = antiPattern.substring(0,pattern.length()-2);
            }

            //EVERY ROW DECREASINGLY LESS PATTERN
            row += antiPattern;
            row += pattern;
            if (i != numberOfRows - 1) {
                pattern = pattern.substring(0, pattern.length() - 2);
            }

            //PRINT OUT STRING ROW
            System.out.println(row);
        }
    }

}



