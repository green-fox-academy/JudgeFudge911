public class CodingHours {
    public static void main(String[] args) {
        // An average Green Fox attendee codes 6 hours daily
        // The semester is 17 weeks long
        //
        // Print how many hours is spent with coding in a semester by an attendee,
        // if the attendee only codes on workdays.
        //
        // Print the percentage of the coding hours in the semester if the average
        // work hours weekly is 52
        byte semesterWeeks = 17;
        byte daysWeek = 5;
        byte dailyCodingHours = 6;
        int codingPerSemester = semesterWeeks*daysWeek*dailyCodingHours;
        byte avarageWorkPerWeek = 52;
        int avarageWorkSemester = avarageWorkPerWeek*semesterWeeks;

        System.out.println(codingPerSemester);
        System.out.println((double)codingPerSemester/avarageWorkSemester*100 + "%");
    }
}