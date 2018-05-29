public class Student extends Person {

  String previousOrganization;
  int skippedDays;


  public Student() {
    this.previousOrganization = "School of Life";
    this.skippedDays = 0;
  }

  public Student(String name, int age, String gender, String previousOrganization, int skippedDays) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }

  public void getGoal(){
    System.out.println("Be a junior software developer.");
  }

  public void introduce(){
    super.introduce();
    System.out.print(" from "+ previousOrganization + " who skipped " + skippedDays + " days from the course already.");
  }

  public void skipDays (int numberOfDays){
    skippedDays += numberOfDays;
  }

}
