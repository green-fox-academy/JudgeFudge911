package animals;

public abstract class Animal {

  private String name;
  int age;
  String gender;
  int legs;

  public Animal(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  abstract public String breed();

  public void eat(){

  }

  public void setName(String name) {
    this.name = name;
  }
}
