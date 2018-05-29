public class App {
  public static void main(String[] args) {
    Carrier carrier0 = new Carrier(0, 100);
    Carrier carrier1 = new Carrier(30, 100);

    F16 f16 = new F16();

    F35 f35 = new F35();

    carrier0.add(f16);
    carrier1.add(f35);

    carrier0.fill();
    carrier1.fill();

    System.out.println(carrier0.getStatus());
    System.out.println(carrier1.getStatus());

    carrier0.fight(carrier1);

    System.out.println(carrier0.getStatus());
    System.out.println(carrier1.getStatus());
  }
}
