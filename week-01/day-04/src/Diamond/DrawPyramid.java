package Diamond;

public class DrawPyramid {
    
    //QUESTIONS FOR NUMBER OF ROWS AND BUILDING BLOCK CHARACTER
    private static final String HOW_MANY_ROWS_SHOULD_YOUR_PYRAMID_HAVE = "How many rows should your pyramid have?";
    static final String ENTER_A_CHARACTER_FOR_BUILDING_BLOCK = "Enter a character for building block.";
    
    public static void main(String[] args) {
        
        InputUtility input = new InputUtility();
  
        int numberOfRows = input.getNumber(HOW_MANY_ROWS_SHOULD_YOUR_PYRAMID_HAVE);

        String buildingBlock = input.getBuildingBlock(ENTER_A_CHARACTER_FOR_BUILDING_BLOCK);
                
        int numberOfColumn = 2 * numberOfRows - 1;
        int columnHalf = numberOfColumn/2;

        String empty = " ";

        String[][] pyramid;

        pyramid = new String[numberOfRows][numberOfColumn];

        for (int i = 0; i < numberOfColumn; i++) {
            for (int j = 0; j < numberOfRows; j++) {
                if (j < numberOfRows-1) {
                    pyramid[i][j] = empty;
                } else {
                    pyramid[i][j] = buildingBlock;
                }
            }
        }

        for (int i = 0; i < pyramid.length; i++) {
            System.out.println();
            for (int j = 0; j < numberOfRows; j++) {
                System.out.println(pyramid[i][j]);
            }
        }
    }
}