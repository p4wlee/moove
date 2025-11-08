import {ICitta, IMezzo} from "../domain/types";

/**
 * CLASSE che implementa l'interfaccia ICitta e rappresenta una città
 * Gestisce i mezzi disponibili nella città
 */
export class Citta implements ICitta {

    // Array che contiene tutti i mezzi disponibili nella città
    public mezziDisponibili: IMezzo[] = []
    
    /**
    * COSTRUTTORE della classe Citta
    */
    constructor (public nome: string) {}

    /**
     * METODO per aggiungere un mezzo alla flotta della città
     */    
    aggiungiMezzo(mezzo:IMezzo): void {
        // Aggiunge il mezzo all'array dei mezzi disponibili
        this.mezziDisponibili.push(mezzo);
        // Console log di conferma dell' aggiunta del mezzo
        console.log(`${mezzo.tipo} id:#${mezzo.id} aggiunto a ${this.nome}`);
    }
}