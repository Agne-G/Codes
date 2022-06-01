public class exemplo5 {

    public static void main (String args[]) {

        try {
            String str = "";
            System.out.println(str.length());
        }
        catch (NullPointerException e) {
            System.out.println("NullPointerException..");
        }
    }
    
}
