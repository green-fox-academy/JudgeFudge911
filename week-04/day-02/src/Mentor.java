public class Mentor extends Person {

  String level;

  public Mentor() {
    super();
    level = "intermidiate";
  }

  public Mentor(String name, int age, String gender, String level) {
    super(name, age, gender);
    this.level = level;
  }

  public void getGoal(){
    System.out.println("Educate brilliant junior software developers.");
  }

  public void introduce(){
    super.introduce();
    System.out.print(" " + level + " mentor.");
  }

}
