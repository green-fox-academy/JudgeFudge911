public class Trees {
  String type;
  String color;
  int age;
  String sex;

  public Trees(String type, String color, int age, String sex){
    this.type = type;
    this.color = color;
    this.age = age;
    this.sex = sex;
  }

  public static void main(String[] args) {
    Trees treeNumberOne = new Trees("a","brown",14,"No thanks");
    Trees treeNumberTwo = new Trees("b","brown",15,"No thanks");
    Trees treeNumberThree = new Trees("c","brown",16,"No thanks");
    Trees treeNumberFour = new Trees("d","brown",17,"No thanks");
    Trees treeNumberFive = new Trees("e","brown",18,"Yass");
  }
}
