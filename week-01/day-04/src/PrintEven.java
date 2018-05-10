public class PrintEven {
    public static void main(String[] args) {
    // Create a program that prints all the even numbers between 0 and 500
        int firstNumber = 0;
        int lastNumber = 500;


        while (firstNumber < lastNumber+1) {
            if (firstNumber % 2 == 0){
                System.out.println(firstNumber);
            }
            firstNumber++;
        }
    }
}
