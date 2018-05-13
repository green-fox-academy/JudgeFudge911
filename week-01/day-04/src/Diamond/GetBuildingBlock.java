package Diamond;

import java.util.Scanner;

public class GetBuildingBlock {

    static String getBuildingBlock(String a){
        Scanner scanner = new Scanner(System.in);

        System.out.println(a);

        String buildingBlock = scanner.next();

        return buildingBlock;
    }
}
