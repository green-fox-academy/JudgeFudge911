package Diamond;

import java.util.Scanner;

import static Diamond.GetBuildingBlock.getBuildingBlock;
import static Diamond.GetNumber.getNumber;

public class ReversePyramid {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

       
        //QUESTIONS FOR USER INPUT
        String questionRows = "How many rows should your pyramid have?";
        String questionBuildingBlock = "Enter a character for building block.";

        //GET NUMBER OF ROWS AND CHARACTER FOR BUILDING BLOCK
        int numberOfRows = getNumber(questionRows);
        String buildingBlock = getBuildingBlock(questionBuildingBlock);

        //FIRST ROW - BUILDING A FULL ROW
        String buildingBlockIncrement = buildingBlock + buildingBlock;
        for (int i = 0; i < numberOfRows - 1; i++) {
            buildingBlock += buildingBlockIncrement;
        }

        //EMPTY PARTS
        String empty = "";
        String emptyIncrement = " ";

        for (int i = 0; i < numberOfRows; i++) {

            //RESET ROW STRING BEFORE BUILDIN THE NEXT ROW
            String row = "";

            //ADD EMPTY AND BUILDINGBLOCK TO ROW STRING
            row += empty + buildingBlock;

            //INCREASE EMPTY BY 1 AND DECREASE BUILDINGBLOCK BY 2
            if (i != numberOfRows - 1) {
                buildingBlock = buildingBlock.substring(0, buildingBlock.length() - 2);
                empty += emptyIncrement;
            }

            //PRINTS OUT ROW
            System.out.println(row);
        }
    }

}



