package src;

public class ContaPremium extends ContaStandard {

    private float limiteCredito;
    
    public ContaPremium(String nome, int numeroConta, float limiteCredito) {
        this.limiteCredito = limiteCredito;
        super(nome);
        super(numeroConta);
    }

    public boolean levantar(float valor) {
        return true;
    }

    public void setLimiteCredito() {

    }
    
    public float getLimiteCredito() {
        return limiteCredito;
    }
}