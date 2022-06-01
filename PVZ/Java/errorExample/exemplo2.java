public class exemplo2 {

    public static void main(String[] args) {

        try {
            int a[] = new int[10];
            a[10] = 9;
        }
        catch(ArrayIndexOutOfBoundsException e) {
            System.out.println("ArrayIndexOutOfBounds");
        }
    }
    
}
