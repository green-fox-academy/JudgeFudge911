public class Sponsor extends Person {
  String company;
  int hiredStudents;

  public Sponsor() {
    super();
    company = "Google";
    hiredStudents = 0;
  }

  public Sponsor(String name, int age, String gender, String company) {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = 0;
  }

  public void introduce(){
    super.introduce();
    System.out.print(" who represents " + company + " and hired " + hiredStudents + " students so far.");
  }

  public void hire(){
    hiredStudents++;
  }

  public void getGoal(){
    System.out.println("Hire brilliant junior software developers.");
  }
}
