package Diamond;

public class ReversePyramid {

    //QUESTIONS FOR NUMBER OF ROWS AND BUILDING BLOCK CHARACTER
    private static final String HOW_MANY_ROWS_SHOULD_YOUR_PYRAMID_HAVE = "How many rows should your pyramid have?";
    static final String ENTER_A_CHARACTER_FOR_BUILDING_BLOCK = "Enter a character for building block.";

    public static void main(String[] args) {

        InputUtility input = new InputUtility();


        //GET NUMBER OF ROWS AND CHARACTER FOR BUILDING BLOCK
        int numberOfRows = input.getNumber(HOW_MANY_ROWS_SHOULD_YOUR_PYRAMID_HAVE);
        String buildingBlock = input.getBuildingBlock(ENTER_A_CHARACTER_FOR_BUILDING_BLOCK);

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

            //PRINTS OUT ROW
            System.out.println(row);

            //INCREASE EMPTY BY 1 AND DECREASE BUILDINGBLOCK BY 2
            if (i != numberOfRows - 1) {
                buildingBlock = buildingBlock.substring(0, buildingBlock.length() - 2);
                empty += emptyIncrement;
            }
        }
    }

}




