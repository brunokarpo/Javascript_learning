/* Operadores de comparacao */

// Maior, maior igual, menor, menor igual (básico e padrão)
console.log(10 > 4); // true
console.log(10 < 4); // false
console.log(10 <= 4); // false
console.log(10 >= 4); // true

// Comparadores de igualdade
console.log(10 == 10); // true
console.log('AlgaWorks' == 'AlgaWorks'); // true
console.log('AlgaWorks' == 'Algaworks'); // false (case sensitive)

var x = 10;
var y = '10';

console.log(typeof x);
console.log(typeof y);
console.log(x == y); // true (estranho! Compara apenas os valores e 
					 //em caso de tipos diferentes, tenta converter 
					 // o tipo de alguma das variáveis à outra)


console.log(x === y); // false. Quando se usa 3 sinais de igual
					  // o tipo de dado também é comparado.

// O mesmo vale para diferente
console.log(x != y); // false. Os tipos de dados não são comparados
console.log(x !== y); // true. Os tipos de dados são comparados