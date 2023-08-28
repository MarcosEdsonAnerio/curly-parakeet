let salario = 400;
let salarioRe;

if(salario <= 280){
    salarioRe = salario * 0.20
};

if(salario >= 280 && salario <= 700 ){
    salarioRe = salario * 0.15
};

if(salario > 700 && salario <= 15000 ){
    salarioRe = salario * 0.10
};

if(salario >= 1500){
    salarioRe = salario * 0.05
};

console.log ("Seu salario sem aumento: " +salario);
console.log ("Valor após o aumento: " + salarioRe);
console.log ("Valor com o aumento: " + (salarioRe+salario));
