import {IMezzo, IUtente, Stato} from "../domain/types";

/**
 * CLASSE che implementa l'interfaccia IUtente
 */
export class Utente implements IUtente {
  
    /**
     * COSTRUTTORE con parametri pubblici
     */  
    constructor (
        public nome: string,
        public cognome: string,
        public email: string,
        public metodoPagamento: string
    ){}

    /**
     * METODO per prenotare un mezzo
     * */
  prenotaMezzo(mezzo: IMezzo): void {
    if (mezzo.stato === Stato.disponibile) {
      mezzo.assegnaUtente(this);
    } else {
      console.log(`Mi dispiace ${this.nome} ${this.cognome}, il mezzo "${mezzo.tipo}" non è attualmente disponibile.`);
    }
  }
}