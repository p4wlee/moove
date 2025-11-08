import {TipoMezzo} from "./domain/types";
import {Mezzo} from "./models/mezzo";
import {Utente} from "./models/utente";
import {Citta} from "./models/citta";

// Creazione utenti
const utente1 = new Utente("Luca", "Rossi", "luca@moove.com", "Carta di credito");
const utente2 = new Utente("Sara", "Bianchi", "sara@moove.com", "PayPal");
const utente3 = new Utente("Marco", "Verdi", "marco@moove.com", "Apple Pay");
const utente4 = new Utente("Giulia", "Neri", "giulia@moove.com", "Google Pay");

// Creazione città
let milano = new Citta("Milano");
let roma = new Citta("Roma");
let torino = new Citta("Torino");
let napoli = new Citta("Napoli");
let firenze = new Citta("Firenze");
let bologna = new Citta("Bologna");
let venezia = new Citta("Venezia");
let verona = new Citta("Verona");
let genova = new Citta("Genova");
let palermo = new Citta("Palermo");
let catania = new Citta("Catania");
let bari = new Citta("Bari");
let lecce = new Citta("Lecce");
let ancona = new Citta("Ancona");
let perugia = new Citta("Perugia");
let pescara = new Citta("Pescara");
let ferrara = new Citta("Ferrara");
let trento = new Citta("Trento");
let bolzano = new Citta("Bolzano");
let parma = new Citta("Parma");

// Aggiungo i mezzi disponibili alle città
// Creo i mezzi in ciascuna città (con id generati automaticamente)

// Milano
let milanoBici = new Mezzo(TipoMezzo.bici);
let milanoScooter = new Mezzo(TipoMezzo.scooter);
let milanoMono = new Mezzo(TipoMezzo.monopattino);
milano.aggiungiMezzo(milanoBici);
milano.aggiungiMezzo(milanoScooter);
milano.aggiungiMezzo(milanoMono);

// Roma
let romaBici = new Mezzo(TipoMezzo.bici);
let romaScooter = new Mezzo(TipoMezzo.scooter);
let romaMono = new Mezzo(TipoMezzo.monopattino);
roma.aggiungiMezzo(romaBici);
roma.aggiungiMezzo(romaScooter);
roma.aggiungiMezzo(romaMono);

// Torino
let torinoBici = new Mezzo(TipoMezzo.bici);
let torinoScooter = new Mezzo(TipoMezzo.scooter);
let torinoMono = new Mezzo(TipoMezzo.monopattino);
torino.aggiungiMezzo(torinoBici);
torino.aggiungiMezzo(torinoScooter);
torino.aggiungiMezzo(torinoMono);

// Napoli
let napoliBici = new Mezzo(TipoMezzo.bici);
let napoliScooter = new Mezzo(TipoMezzo.scooter);
let napoliMono = new Mezzo(TipoMezzo.monopattino);
napoli.aggiungiMezzo(napoliBici);
napoli.aggiungiMezzo(napoliScooter);
napoli.aggiungiMezzo(napoliMono);

// Firenze
let firenzeBici = new Mezzo(TipoMezzo.bici);
let firenzeScooter = new Mezzo(TipoMezzo.scooter);
let firenzeMono = new Mezzo(TipoMezzo.monopattino);
firenze.aggiungiMezzo(firenzeBici);
firenze.aggiungiMezzo(firenzeScooter);
firenze.aggiungiMezzo(firenzeMono);

// Bologna
let bolognaBici = new Mezzo(TipoMezzo.bici);
let bolognaScooter = new Mezzo(TipoMezzo.scooter);
let bolognaMono = new Mezzo(TipoMezzo.monopattino);
bologna.aggiungiMezzo(bolognaBici);
bologna.aggiungiMezzo(bolognaScooter);
bologna.aggiungiMezzo(bolognaMono);

// Venezia
let veneziaBici = new Mezzo(TipoMezzo.bici);
let veneziaScooter = new Mezzo(TipoMezzo.scooter);
let veneziaMono = new Mezzo(TipoMezzo.monopattino);
venezia.aggiungiMezzo(veneziaBici);
venezia.aggiungiMezzo(veneziaScooter);
venezia.aggiungiMezzo(veneziaMono);

// Verona
let veronaBici = new Mezzo(TipoMezzo.bici);
let veronaScooter = new Mezzo(TipoMezzo.scooter);
let veronaMono = new Mezzo(TipoMezzo.monopattino);
verona.aggiungiMezzo(veronaBici);
verona.aggiungiMezzo(veronaScooter);
verona.aggiungiMezzo(veronaMono);

// Genova
let genovaBici = new Mezzo(TipoMezzo.bici);
let genovaScooter = new Mezzo(TipoMezzo.scooter);
let genovaMono = new Mezzo(TipoMezzo.monopattino);
genova.aggiungiMezzo(genovaBici);
genova.aggiungiMezzo(genovaScooter);
genova.aggiungiMezzo(genovaMono);

// Palermo
let palermoBici = new Mezzo(TipoMezzo.bici);
let palermoScooter = new Mezzo(TipoMezzo.scooter);
let palermoMono = new Mezzo(TipoMezzo.monopattino);
palermo.aggiungiMezzo(palermoBici);
palermo.aggiungiMezzo(palermoScooter);
palermo.aggiungiMezzo(palermoMono);

// Catania
let cataniaBici = new Mezzo(TipoMezzo.bici);
let cataniaScooter = new Mezzo(TipoMezzo.scooter);
let cataniaMono = new Mezzo(TipoMezzo.monopattino);
catania.aggiungiMezzo(cataniaBici);
catania.aggiungiMezzo(cataniaScooter);
catania.aggiungiMezzo(cataniaMono);

// Bari
let bariBici = new Mezzo(TipoMezzo.bici);
let bariScooter = new Mezzo(TipoMezzo.scooter);
let bariMono = new Mezzo(TipoMezzo.monopattino);
bari.aggiungiMezzo(bariBici);
bari.aggiungiMezzo(bariScooter);
bari.aggiungiMezzo(bariMono);

// Lecce
let lecceBici = new Mezzo(TipoMezzo.bici);
let lecceScooter = new Mezzo(TipoMezzo.scooter);
let lecceMono = new Mezzo(TipoMezzo.monopattino);
lecce.aggiungiMezzo(lecceBici);
lecce.aggiungiMezzo(lecceScooter);
lecce.aggiungiMezzo(lecceMono);

// Ancona
let anconaBici = new Mezzo(TipoMezzo.bici);
let anconaScooter = new Mezzo(TipoMezzo.scooter);
let anconaMono = new Mezzo(TipoMezzo.monopattino);
ancona.aggiungiMezzo(anconaBici);
ancona.aggiungiMezzo(anconaScooter);
ancona.aggiungiMezzo(anconaMono);

// Perugia
let perugiaBici = new Mezzo(TipoMezzo.bici);
let perugiaScooter = new Mezzo(TipoMezzo.scooter);
let perugiaMono = new Mezzo(TipoMezzo.monopattino);
perugia.aggiungiMezzo(perugiaBici);
perugia.aggiungiMezzo(perugiaScooter);
perugia.aggiungiMezzo(perugiaMono);

// Pescara
let pescaraBici = new Mezzo(TipoMezzo.bici);
let pescaraScooter = new Mezzo(TipoMezzo.scooter);
let pescaraMono = new Mezzo(TipoMezzo.monopattino);
pescara.aggiungiMezzo(pescaraBici);
pescara.aggiungiMezzo(pescaraScooter);
pescara.aggiungiMezzo(pescaraMono);

// Ferrara
let ferraraBici = new Mezzo(TipoMezzo.bici);
let ferraraScooter = new Mezzo(TipoMezzo.scooter);
let ferraraMono = new Mezzo(TipoMezzo.monopattino);
ferrara.aggiungiMezzo(ferraraBici);
ferrara.aggiungiMezzo(ferraraScooter);
ferrara.aggiungiMezzo(ferraraMono);

// Trento
let trentoBici = new Mezzo(TipoMezzo.bici);
let trentoScooter = new Mezzo(TipoMezzo.scooter);
let trentoMono = new Mezzo(TipoMezzo.monopattino);
trento.aggiungiMezzo(trentoBici);
trento.aggiungiMezzo(trentoScooter);
trento.aggiungiMezzo(trentoMono);

// Bolzano
let bolzanoBici = new Mezzo(TipoMezzo.bici);
let bolzanoScooter = new Mezzo(TipoMezzo.scooter);
let bolzanoMono = new Mezzo(TipoMezzo.monopattino);
bolzano.aggiungiMezzo(bolzanoBici);
bolzano.aggiungiMezzo(bolzanoScooter);
bolzano.aggiungiMezzo(bolzanoMono);

// Parma
let parmaBici = new Mezzo(TipoMezzo.bici);
let parmaScooter = new Mezzo(TipoMezzo.scooter);
let parmaMono = new Mezzo(TipoMezzo.monopattino);
parma.aggiungiMezzo(parmaBici);
parma.aggiungiMezzo(parmaScooter);
parma.aggiungiMezzo(parmaMono);

// Test di prenotazione
// Test 1: Luca prenota una bici a Milano (dovrebbe andare a buon fine)
utente1.prenotaMezzo(milanoBici);

// Test 2: Sara prova a prenotare la stessa bici (mezzo già in uso)
utente2.prenotaMezzo(milanoBici);

// Test 3: Marco prenota uno scooter a Roma
utente3.prenotaMezzo(romaScooter);

// Test 4: Giulia prenota un monopattino a Napoli
utente4.prenotaMezzo(napoliMono);

// Test 5: Sara prenota una bici a Firenze
utente2.prenotaMezzo(firenzeBici);

// Test 6: Luca prova a prenotare lo scooter di Roma (già occupato da Marco)
utente1.prenotaMezzo(romaScooter);

// Test 7: Giulia prenota un monopattino a Bologna
utente4.prenotaMezzo(bolognaMono);

// Test 8: Marco prenota una bici a Venezia
utente3.prenotaMezzo(veneziaBici);