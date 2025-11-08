import {IMezzo, IUtente, Stato, TipoMezzo} from "../domain/types";

export class Mezzo implements IMezzo {
    private static prossimoId = 1;
    public id: number;

    constructor (

        public tipo: TipoMezzo, 
        public stato: Stato = Stato.disponibile) {
            this.id = Mezzo.prossimoId++; 
        }

        assegnaUtente (utente:IUtente) : void {
            if (this.stato === Stato.disponibile){
                this.stato = Stato.InUso;
                console.log(`${utente.nome} ${utente.cognome} ha preso in uso il seguente mezzo: ${this.tipo} id:#${this.id}`)
            } else {
                console.log(`Il ${this.tipo} id:#${this.id} non è momentaneamente disponibile`);
            }
        }
}