/**
 * ENUM che definisce i tipi di mezzi di trasporto disponibili nel sistema
 */
export var TipoMezzo;
(function (TipoMezzo) {
    TipoMezzo["bici"] = "bici";
    TipoMezzo["scooter"] = "scooter";
    TipoMezzo["monopattino"] = "monopattino";
})(TipoMezzo || (TipoMezzo = {}));
/**
 * ENUM che rappresenta lo stato corrente di un mezzo
 */
export var Stato;
(function (Stato) {
    Stato["disponibile"] = "disponibile";
    Stato["InUso"] = "In uso";
})(Stato || (Stato = {}));
