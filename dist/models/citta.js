/**
 * CLASSE che implementa l'interfaccia ICitta e rappresenta una città
 * Gestisce i mezzi disponibili nella città
 */
export class Citta {
    /**
    * COSTRUTTORE della classe Citta
    */
    constructor(nome) {
        this.nome = nome;
        // Array che contiene tutti i mezzi disponibili nella città
        this.mezziDisponibili = [];
    }
    /**
     * METODO per aggiungere un mezzo alla flotta della città
     */
    aggiungiMezzo(mezzo) {
        // Aggiunge il mezzo all'array dei mezzi disponibili
        this.mezziDisponibili.push(mezzo);
        // Console log di conferma dell' aggiunta del mezzo
        console.log(`${mezzo.tipo} id:#${mezzo.id} aggiunto a ${this.nome}`);
    }
}
