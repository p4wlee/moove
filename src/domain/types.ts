export enum TipoMezzo {
    bici = "bici",
    scooter = "scooter",
    monopattino = "monopattino"
}
export enum Stato {
    disponibile = "disponibile",
    InUso = "In uso"
}

export interface IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;
    prenotaMezzo(mezzo: IMezzo): void;
}

export interface IMezzo {
    tipo: TipoMezzo;
    id: number;
    stato: Stato;
    assegnaUtente(utente: IUtente): void;
}

export interface ICitta {
    nome: string,
    mezziDisponibili: IMezzo[];
    aggiungiMezzo(mezzo: IMezzo): void;
}