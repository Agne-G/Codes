import java.util.Scanner;

public class Calculadora {

    static String input;
    static String number1 = "";
    static double num1;
    static String number2 = "";
    static double num2;
    static char operator = '0';
    static int i;
    static char c;

    public void getUserInput(Scanner scan) {
            System.out.print("Entre a expressao desejada: ");
            input =  scan.nextLine();            
            
            for(i=0; i < input.length(); i++) {
                c = input.charAt(i);
                
                if (Character.isDigit(c) || getDot(c)) {
                    createNumber(c);;
                } else if(getOperator(c)) {
                    operator = c;
                } else if (!(c == ' ')) {
                    error();
                    break;
                }
            }
            if (number1 != "" && number2 != "" & operator != '0') {
                preparNumbers();
                makeCalculation();
            }
    }
    
    public static void createNumber(char num1) {
        if (operator == '0') {
            number1 = number1 + c;
        } else {
            number2 = number2 + c;
        }
    }

    public static boolean getOperator(char op) {
        switch(op) {
            case '+':
            case '-':
            case '*':
            case '/':
                return true;
           default:
                return false;
        }
    }

    public static boolean getDot(char dot) {
        switch(dot) {
            case '.':
            case ',':
                c = '.';
                return true;
            default:
                return false;
        }
    }

    public static void error() {
            System.out.println("Expressao matematica invalida");
    }

    public static boolean preparNumbers() {
        num1 = Math.round(Double.parseDouble(number1)*100);
        num1 = num1 / 100;
        num2 = Math.round(Double.parseDouble(number2)*100);
        num2 = num2 / 100;

        return true;
    }

    public static void makeCalculation() {
        double result = 0;
        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
        System.out.println("O resultado da operacao " 
            + num1 
            + " " 
            + operator 
            + " "
            + num2
            + " e: "
            + result);
    }
}
