abstract class Tasse {
  redditoAnnuoLordo: number;
  constructor(_redditoAnnuoLordo: number) {
    this.redditoAnnuoLordo = _redditoAnnuoLordo;
  }

  abstract getTasseInps(): number;
  abstract getTasseIrpef(): number;
  abstract getRedditoNetto(): number;
}

class Lavoratore extends Tasse {
  nome: string;
  cognome: string;
  tasseInps: number;
  tasseIrpef: number;

  constructor(
    _nome: string,
    _cognome: string,
    _tasseInps: number,
    _tasseIrpef: number,
    _redditoAnnuoLordo: number
  ) {
    super(_redditoAnnuoLordo);
    this.nome = _nome;
    this.cognome = _cognome;
    this.tasseInps = _tasseInps;
    this.tasseIrpef = _tasseIrpef;
  }

  getTasseInps() {
    return this.redditoAnnuoLordo * (this.tasseInps / 100);
  }

  getTasseIrpef() {
    return this.redditoAnnuoLordo * (this.tasseIrpef / 100);
  }

  getRedditoNetto() {
    return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef();
  }
}

const artigiano = new Lavoratore("Luca", "Rossi", 26, 23, 15000);
console.log(
  `L'artigiano ${artigiano.nome} ${artigiano.cognome} ha guadagnato: ` +
    artigiano.getRedditoNetto() +
    "€"
);

const avvocato = new Lavoratore("Mario", "Bianchi", 26, 25, 28000);
console.log(
  `L'avvocato ${avvocato.nome} ${avvocato.cognome} ha guadagnato: ` +
    avvocato.getRedditoNetto() +
    "€"
);
