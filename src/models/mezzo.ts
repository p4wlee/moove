import {IMezzo, IUtente, Stato, TipoMezzo} from "../domain/types";

/**
 * CLASSE che implementa l'interfaccia IMezzo
 */
export class Mezzo implements IMezzo {
    private static prossimoId = 1;
    public id: number;

    /**
     * COSTRUTTORE con parametri pubblici
     */
    constructor (

        public tipo: TipoMezzo, 
        public stato: Stato = Stato.disponibile) {
            // Assegnazione ID univoco
            this.id = Mezzo.prossimoId++; 
        }

        /**
        * METODO per assegnare un utente al mezzo
        */        
        assegnaUtente (utente:IUtente) : void {
            if (this.stato === Stato.disponibile){
                this.stato = Stato.InUso;
                console.log(`${utente.nome} ${utente.cognome} ha preso in uso il seguente mezzo: ${this.tipo} id:#${this.id}`)
            } else {
                console.log(`Il ${this.tipo} id:#${this.id} non è momentaneamente disponibile`);
            }
        }
}