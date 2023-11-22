var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tasse = /** @class */ (function () {
    function Tasse(_redditoAnnuoLordo) {
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
    }
    return Tasse;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(_nome, _cognome, _tasseInps, _tasseIrpef, _redditoAnnuoLordo) {
        var _this = _super.call(this, _redditoAnnuoLordo) || this;
        _this.nome = _nome;
        _this.cognome = _cognome;
        _this.tasseInps = _tasseInps;
        _this.tasseIrpef = _tasseIrpef;
        return _this;
    }
    Lavoratore.prototype.getTasseInps = function () {
        return this.redditoAnnuoLordo * (this.tasseInps / 100);
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        return this.redditoAnnuoLordo * (this.tasseIrpef / 100);
    };
    Lavoratore.prototype.getRedditoNetto = function () {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef();
    };
    return Lavoratore;
}(Tasse));
var artigiano = new Lavoratore("Luca", "Rossi", 26, 23, 15000);
console.log("L'artigiano ".concat(artigiano.nome, " ").concat(artigiano.cognome, " ha guadagnato: ") +
    artigiano.getRedditoNetto() +
    "€");
var avvocato = new Lavoratore("Mario", "Bianchi", 26, 25, 28000);
console.log("L'avvocato ".concat(avvocato.nome, " ").concat(avvocato.cognome, " ha guadagnato: ") +
    avvocato.getRedditoNetto() +
    "€");
