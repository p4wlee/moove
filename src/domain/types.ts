/**
 * ENUM che definisce i tipi di mezzi di trasporto disponibili nel sistema
 */
export enum TipoMezzo {
    bici = "bici",
    scooter = "scooter",
    monopattino = "monopattino"
}

/**
 * ENUM che rappresenta lo stato corrente di un mezzo
 */
export enum Stato {
    disponibile = "disponibile",
    InUso = "In uso"
}

/**
 * Contratto (interface) che definisce le proprietà e i metodi che la classe Utente deve avere
 */
export interface IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;
    prenotaMezzo(mezzo: IMezzo): void;
}

/**
 * Contratto (interface) che definisce le proprietà e i metodi che la classe Mezzo deve avere
 */
export interface IMezzo {
    tipo: TipoMezzo;
    id: number;
    stato: Stato;
    assegnaUtente(utente: IUtente): void;
}

/**
 * Contratto (interface) che definisce le proprietà e i metodi che la classe Città deve avere
 */
export interface ICitta {
    nome: string,
    mezziDisponibili: IMezzo[];
    aggiungiMezzo(mezzo: IMezzo): void;
}