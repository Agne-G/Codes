import java.util.Scanner;

public class Main {
    public static void main(String args[]) {

        Scanner scan = new Scanner(System.in);
        Calculadora calc = new Calculadora();


        System.out.println("BEM VINDO A CALCULADORA FEITA EM JAVA");
        System.out.println("Digite o primeiro numero desejado --pode ser com (,) ou (.)-- em seguida");
        System.out.println("Digite o operador e finalmente o segundo numero");
        System.out.println("***Nao ha distincao entre digitar com ou sem espaco entre os numeros e o operador***");
        System.out.println("");
        try {  
            calc.getUserInput(scan);
        }
        catch (Exception e) {
            System.out.println("Ocorreu um erro de execucao do algoritimo...");
        }        
        scan.close();
    }
}
