import java.util.Random;

public class Reservation implements Reservationy {
  @Override
  public String getDowBooking() {
    return null;
  }

  @Override
  public String getCodeBooking() {
    Random r = new Random();
    String code = "";
    for (int i = 0; i < 8; i++) {
      char c = (r.nextInt(2) == 1) ? (char) (r.nextInt(26) + 'A') : (char) (r.nextInt(10) + '0');
      code += c;
    }
    return code;
  }
}
