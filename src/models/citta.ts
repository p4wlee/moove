import {ICitta, IMezzo} from "../domain/types";

export class Citta implements ICitta {
    public mezziDisponibili: IMezzo[] = []
    
    constructor (public nome: string) {}

    aggiungiMezzo(mezzo:IMezzo): void {
        this.mezziDisponibili.push(mezzo);
        console.log(`${mezzo.tipo} id:#${mezzo.id} aggiunto a ${this.nome}`);
    }
}