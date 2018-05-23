import java.util.List;

public class SharpieSet {

  List<Sharpie> sharpies;

  public int countUsable() {
    int usable = 0;

    for (Sharpie element :
            sharpies) {
      if (element.inkAmount != 0) {
        usable++;
      }
    }
    return usable;
  }

  public void removeThrash() {
    for (Sharpie element : sharpies) {
      if(element.inkAmount <= 0){
        sharpies.remove(element);
      }
    }

  }
}

