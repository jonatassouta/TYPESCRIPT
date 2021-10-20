//O array de numeros aceita apenas os numeros dentro de sua declaração
//E pode ser alterado por exemplo com push - acrescenta elemento no array
var numeroCarro = [4, 3, 5, 5, 8];
var Barco;
(function (Barco) {
    Barco[Barco["Motor"] = 2] = "Motor";
    Barco[Barco["Proa"] = 2] = "Proa";
    Barco[Barco["Popa"] = 1] = "Popa";
})(Barco || (Barco = {}));
var numeroMotores = Barco.Motor;
console.log(numeroMotores);
