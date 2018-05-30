import java.util.Random;

public class Reservation implements Reservationy {

  private String code;
  private String dow;

  public Reservation() {
    this.code = getCodeBooking();
    this.dow = getDowBooking();
  }

  @Override
  public String getDowBooking() {
    String[] dows = new String[] {"MON","TUE", "WEN", "THU", "FRI", "SAT", "SUN"};
    Random r = new Random();
    return dows[r.nextInt(7)];
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

  public void printReservation(){
    System.out.println("Booking# " + getCode() + " for " + getDow());
  }

  public String getDow() {
    return dow;
  }

  public void setDow(String dow) {
    this.dow = dow;
  }

  public String getCode() {
    return code;
  }
}
