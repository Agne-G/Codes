package src;

public class ContaPremium extends ContaStandard {

    private float limiteCredito;
    
    public ContaPremium(String nome, int numeroConta, float limiteCredito) {
        super(nome, numeroConta);
        this.limiteCredito = limiteCredito;
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