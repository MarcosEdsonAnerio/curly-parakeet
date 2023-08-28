const precos = {
    "File Duplo": {ate5Kg: 4.9, acima5Kg: 5.8 },
    "Alcatra": {ate5Kg: 5.9, acima5Kg: 6.8 },
    "Picanha" : {ate5Kg: 6.9, acima5Kg: 7.8 }
  };

  console.log("\nTipos de carne: File Duplo, Alcatra ou Picanha");
  let tipoCarne = "Picanha";
  let quantidade = 15;

  if (precos.hasOwnProperty(tipoCarne)) {
    let total;

    if (quantidade <= 5) {
      total = precos[tipoCarne].ate5Kg * quantidade;
    } else {
      total = precos[tipoCarne].acima5Kg * quantidade;
    }

    console.log("Tipos de pagamentos: Cartão Assaí ou outro");

    let pagamento = "cartão assaí";
    let desconto = 0;

    if (pagamento === "cartão assaí") {
      desconto = total * 0.05;
    }

    let valorAPagar = total - desconto;

    console.log("\n----------------------------------------------\n");
    console.log("\nCUPOM FISCAL");
    console.log("Tipo de carne: " + tipoCarne);
    console.log("Quantidade: " + quantidade + " Kg");
    console.log("Preço total: R$" + total.toFixed(2));
    console.log("Tipo de pagamento: " + pagamento);
    console.log("Desconto: R$" + desconto.toFixed(2));
    console.log("Valor a pagar: R$" + valorAPagar.toFixed(2));
  } else {
    console.log("Tipo de carne inválido.");
  }
  
  