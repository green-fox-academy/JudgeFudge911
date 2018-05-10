public class Cuboid {
    public static void main(String[] args) {
// Write a program that stores 3 sides of a cuboid as variables (doubles)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
        double sideOne = 10;
        double sideTwo = 10;
        double sideThree = 10;

        int surfaceArea = (int) (2 * sideOne * sideTwo + 2 * sideOne * sideThree + 2 * sideThree * sideTwo);
        int volume = (int) (sideOne * sideTwo * sideThree);

        System.out.println("Surface Area: " + surfaceArea);
        System.out.println("Volume: " + volume);
    }
}
