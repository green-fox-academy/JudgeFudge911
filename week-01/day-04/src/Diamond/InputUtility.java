package Diamond;

import java.util.Scanner;

public class InputUtility {

    private final Scanner scanner = new Scanner(System.in);

    public Integer getNumber(String a) {

        System.out.println(a);

        int numberOfRows = scanner.nextInt();

        return numberOfRows;
    }

    public String getBuildingBlock(String a){

        System.out.println(a);

        String buildingBlock = scanner.next();

        return buildingBlock;
    }

}



