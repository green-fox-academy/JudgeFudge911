package Diamond;

import java.util.Scanner;

public class GetNumber {

    static Integer getNumber(String a) {

        Scanner scanner = new Scanner(System.in);

        System.out.println(a);

        int numberOfRows = scanner.nextInt();

        return numberOfRows;
    }

}
