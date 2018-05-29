public class App {
  public static void main(String[] args) {
    Carrier carrier0 = new Carrier(23000, 1000);
    Carrier carrier1 = new Carrier(23000, 1000);

    int numberOfAircraft = 4;

    for (int i = 0; i < numberOfAircraft; i++) {
      carrier0.add(new F16());
      carrier1.add(new F35());
    }

    while (carrier0.healthPoints > 0 && carrier1.healthPoints > 0 ){

    carrier0.fill();
    carrier1.fill();

    System.out.println(carrier0.getStatus());
    System.out.println(carrier1.getStatus());

    carrier0.fight(carrier1);
    carrier1.fight(carrier0);

    System.out.println(carrier0.getStatus());
    System.out.println(carrier1.getStatus());

    }
  }
}
