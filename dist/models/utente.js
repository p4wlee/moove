import { Stato } from "../domain/types";
/**
 * CLASSE che implementa l'interfaccia IUtente
 */
export class Utente {
    /**
     * COSTRUTTORE con parametri pubblici
     */
    constructor(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    /**
     * METODO per prenotare un mezzo
     * */
    prenotaMezzo(mezzo) {
        if (mezzo.stato === Stato.disponibile) {
            mezzo.assegnaUtente(this);
        }
        else {
            console.log(`Mi dispiace ${this.nome} ${this.cognome}, il mezzo "${mezzo.tipo}" non è attualmente disponibile.`);
        }
    }
}
