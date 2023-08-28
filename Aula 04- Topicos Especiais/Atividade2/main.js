let horas = 5;
let salario = (220 * horas);
let salarioIr = 0;
let salarioInss = (salario * 0.10);
let salarioFgts = (salario * 0.11);

if(salario >= 900 && salario <=1500){
salarioIr = (salario * 0.05)
}
if(salario >= 1500 && salario <= 2500){
    salarioIr = (salario * 0.10)
}
if(salario > 2500){
    salarioIr = (salario * 0.20)
}
let totalDescontos = (salarioIr + salarioInss)
let salarioLiquido = (salario - totalDescontos)

console.log("Seu salario bruto: " + salario)
console.log("IR: " + salarioIr)
console.log("INSS: " + salarioInss)
console.log("Salario FGTS: " + salarioFgts)
console.log("Total Descontos: " + totalDescontos)
console.log("Salario Liquido: " + salarioLiquido)
