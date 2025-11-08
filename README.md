# 🚲 Moove – Sistema di Micromobilità in TypeScript

Benvenuto in **Moove**, un progetto sviluppato interamente in **TypeScript** che simula il funzionamento di un servizio moderno di micromobilità condivisa.  
L'applicazione modella il comportamento di **utenti**, **mezzi** e **città**, mostrando come essi interagiscono in un sistema scalabile e organizzato.

Questo progetto è stato realizzato come esercizio avanzato per comprendere:

- ✅ Interfacce TypeScript  
- ✅ Classi e incapsulamento  
- ✅ Gestione dello stato  
- ✅ Organizzazione del codice in moduli  
- ✅ Compilazione tramite TypeScript  
- ✅ Struttura professionale di un progetto

---

## ✨ Funzionalità principali

### 🚲 Gestione dei mezzi
Ogni mezzo è definito da:
- Tipo (bici, scooter, monopattino)
- ID unico generato automaticamente
- Stato (disponibile / in uso)

### 👤 Gestione degli utenti
Ogni utente dispone di:
- Dati anagrafici
- Metodo di pagamento
- Possibilità di prenotare un mezzo

### 🌆 Gestione delle città
Ogni città può:
- Aggiungere mezzi disponibili
- Tenere traccia della flotta di micromobilità

### 🔗 Logica di collegamento
- Quando un utente prenota un mezzo, questo passa allo stato **InUso**
- Se un mezzo non è disponibile, viene mostrato un messaggio in console
- Le operazioni simulano il comportamento reale dei servizi di sharing urbano

---

## 📂 Struttura del progetto

```bash
moove/
│
├── package.json
├── tsconfig.json
├── README.md
│
├── src/
│   ├── domain/
│   │   └── types.ts
│   │
│   ├── models/
│   │   ├── Mezzo.ts
│   │   ├── Utente.ts
│   │   └── Citta.ts
│   │
│   └── main.ts
│
└── dist/
    ├── domain/
    │   └── types.js
    ├── models/
    │   ├── Mezzo.js
    │   ├── Utente.js
    │   └── Citta.js
    └── main.js
```

---

## ⚙️ Installazione

Assicurati di avere installato **Node.js**.

1. **Clona la repository**
```bash
git clone https://github.com/tuo-username/nome-repo.git
```

2. **Accedi alla cartella del progetto**
```bash
cd nome-repo
```

3. **Installa le dipendenze**
```bash
npm install
```

4. **Compila TypeScript**
```bash
npm run build
```

5. **Avvia il programma**
```bash
npm start
```

---

## 🛠 Configurazione

Il file `tsconfig.json` è configurato per:

- ✅ prendere i file sorgente da `src/`
- ✅ generare i file compilati in `dist/`
- ✅ utilizzare moduli ES2020
- ✅ abilitare la modalità `strict`
- ✅ supportare import/export moderni

---

## ▶️ Utilizzo

All’avvio, l'applicazione:

- crea utenti
- registra varie città italiane
- aggiunge mezzi ai rispettivi comuni
- esegue una serie di test di prenotazione
- mostra i risultati direttamente in console

---

## 🌐 Demo su CodePen

👉 **https://codepen.io/p4wlee/pen/NPxmbGm**

---

## 📞 Contatti

* GitHub: [P4wlee](https://github.com/p4wlee)
* LinkedIn: [Davide Paulicelli](https://www.linkedin.com/in/davide-paulicelli-00295222b/)

---

## 📜 Licenza

Questo progetto è distribuito sotto licenza **MIT License**.