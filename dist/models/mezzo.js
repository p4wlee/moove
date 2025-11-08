import { Stato } from "../domain/types";
/**
 * CLASSE che implementa l'interfaccia IMezzo
 */
export class Mezzo {
    /**
     * COSTRUTTORE con parametri pubblici
     */
    constructor(tipo, stato = Stato.disponibile) {
        this.tipo = tipo;
        this.stato = stato;
        // Assegnazione ID univoco
        this.id = Mezzo.prossimoId++;
    }
    /**
    * METODO per assegnare un utente al mezzo
    */
    assegnaUtente(utente) {
        if (this.stato === Stato.disponibile) {
            this.stato = Stato.InUso;
            console.log(`${utente.nome} ${utente.cognome} ha preso in uso il seguente mezzo: ${this.tipo} id:#${this.id}`);
        }
        else {
            console.log(`Il ${this.tipo} id:#${this.id} non è momentaneamente disponibile`);
        }
    }
}
Mezzo.prossimoId = 1;
