import java.util.List;

public class Blog {

  List<BlogPost> list;

  public void add(BlogPost post){

    list.add(post);

  }

  public void delete(int index){

    list.remove(index);

  }

  public void update(int index, BlogPost post){

    delete(index);
    list.add(index,post);

  }

}
