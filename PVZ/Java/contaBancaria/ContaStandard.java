package src;

public class ContaStandard extends ClienteBancario {

    private int numeroConta;
    private float saldo = 0;

    protected ContaStandard(String nome, int numeroConta) {
        super(nome);
        this.numeroConta = numeroConta;
    }

    public float depositar(float valor) {
        return 0;
    }

    public boolean levantar(float valor) {
        return false;
    }

    public void setSaldo() {

    }

    public float getSaldo() {
        return saldo;
    }

    public int getNumeroConta() {
        return numeroConta;
    }
        
}