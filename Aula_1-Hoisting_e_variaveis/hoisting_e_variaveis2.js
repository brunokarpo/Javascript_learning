var percertualImposto = 0.15;
var total = valorProduto * percertualImposto;

var valorProduto = 100;

console.log('O valor do imposto é', total);

// Hoisting
/*
 É importante atenta que o Hoisting leva a declaração da variável
 para o início do programa, mas não leva a as atribuições. 
 Portanto, o programa acima vai apresentar problemas pois será traduzido conforme abaixo,
 causando um NaN (Not a Number)
*/

/*var percertualImposto, total, valorProduto;
total = valorProduto * percertualImposto;

valorProduto = 100;
console.log('O valor do imposto é', total);
*/