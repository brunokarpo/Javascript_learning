var percertualImposto = 0.15;
valorProduto = 100;
var total = valorProduto * percertualImposto;

var valorProduto;

console.log('O valor do imposto é', total);

// Hoisting
/* Facilidade do JavaScript que leva todas as declarações de variáveis
 para o inicio do Script para não ocorrer problemas de não declaração de variáveis.
 
 Assim é possível declarar variáveis em qualquer lugar do programa, que ela será
 levada para o início, assim que o script for executado.
 */
/*
var percertualImposto, total, valorProduto;
percentualImposto = 0.15;
total = valorProduto * percentualImposto;

console.log('O valor do imposto é', total);
*/
