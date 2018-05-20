public class T_06_CodingHours {
  public static void main(String[] args) {
    // An average Green Fox attendee codes 6 hours daily
    // The semester is 17 weeks long
    //
    // Print how many hours is spent with coding in a semester by an attendee,
    // if the attendee only codes on workdays.
    //
    // Print the percentage of the coding hours in the semester if the average
    // work hours weekly is 52
    byte weeksPerSemester = 17;
    byte daysPerWeek = 5;

    byte codeHoursPerDay = 6;
    int codeHoursPerSemester = weeksPerSemester * daysPerWeek * codeHoursPerDay;

    byte averageWorkHoursPerWeek = 52;
    int averageWorkHoursPerSemester = averageWorkHoursPerWeek * weeksPerSemester;

    System.out.println(codeHoursPerSemester);
    System.out.println((double) codeHoursPerSemester / averageWorkHoursPerSemester * 100 + "%");
  }
}