var Carro = /** @class */ (function () {
    function Carro(marca, aro) {
        this.marca = marca;
        this.aro = aro;
    }
    Carro.prototype.verificarAro = function () {
        return "O aro \u00E9 de: " + this.aro;
    };
    return Carro;
}());
var ferrari = new Carro("Ferrari", 20);
console.log(ferrari);
console.log(ferrari.verificarAro());
