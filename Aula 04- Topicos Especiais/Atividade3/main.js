// // main.js

// // Solicita ao usuário que insira um valor e armazena-o em uma variável
// var userInput = prompt("Por favor, insira um valor:");

// // Exibe o valor inserido pelo usuário no console
// console.log("Você inseriu: " + userInput);

console.log("\n--------------------------------------\n");
console.log("DIA 1 - SEGUNDA");
console.log("DIA 2 - TERÇA");
console.log("DIA 3 - QUARTA");
console.log("DIA 4 - QUINTA");
console.log("DIA 5 - SEXTA");
console.log("DIA 6 - SABADO");
console.log("DIA 7 - DOMINGO");
console.log("--------------------------------------\n");

let dia = "1";

switch (dia) {
    case "segunda-feira" && "1":
      console.log("Hoje é segunda-feira.");
      break;
    case "terça-feira" && "2":
      console.log("Hoje é terça-feira.");
      break;
    case "quarta-feira" && "3":
      console.log("Hoje é quarta-feira.");
      break;
    case "quinta-feira" && "4":
      console.log("Hoje é quinta-feira.");
      break;
    case "sexta-feira" && "5":
      console.log("Hoje é sexta-feira.");
      break;
    case "sábado" && "6":
    case "domingo" && "7":
      console.log("É fim de semana!");
      break;
    default:
      console.log("Dia inválido.");
      break;
  }
  
  
  
  