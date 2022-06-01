package src;

public abstract class ClienteBancario {
    private String nomeCliente;
    private int nif;

    protected ClienteBancario(String nome) {
        this.nomeCliente = nome;
    }

    public ClienteBancario() {
    }

    public String getNomeCliente() {
        return nomeCliente;
    }

    public void setNif(int nif) {
        this.nif = nif;
    }

    public int getNif() {
        return nif;
    }
       
}
