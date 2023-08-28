const precoPorGasolina = 2.5;
const precoPorAlcool = 1.9;

let litros = 100;
let tipoCombustivel = ("A").toUpperCase();

var precoTotal;

if (tipoCombustivel === "A") {
  if (litros <= 20) {
    precoTotal = litros * precoPorAlcool * 0.97;
  } else {
    precoTotal = litros * precoPorAlcool * 0.95;
  }
} else if (tipoCombustivel === "G") {
  if (litros <= 20) {
    precoTotal = litros * precoPorGasolina * 0.96;
  } else {
    precoTotal = litros * precoPorGasolina * 0.94; 
  }
} else {
  console.log("Tipo de combustível inválido.");
  precoTotal = 0;
}


console.log("Valor a ser pago: R$" + precoTotal.toFixed(2));
