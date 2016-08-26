/* 
funcition nome(args) {
	return;
}
*/

/* Funções Matemáticas */
// Retorna o menor valor de uma lista de números
var menorNumero = Math.min(10, 8, 46, 128, -36, 22, 1);
console.log('Menor número', menorNumero);

// Retorna o maior valor de uma lista de números
var maiorNumero = Math.max(10, 8, 46, 128, -36, 22, 1);
console.log('Maior número', maiorNumero);

// Arredonda um número fracionado para um número inteiro
var arredondado = Math.round(22.3);
console.log('Valor arredondado', arredondado);
arredondado = Math.round(22.5);
console.log('Valor arredondado', arredondado);

// Gera um número aleatório entre 0 e 1. Incluíndo o 1 e excluíndo o 0
// 0 < x <= 1
var aleatorio = Math.random();
console.log('Valor aleatorio', aleatorio);

// Arredonda um número fracionário para um inteiro. Arredonda para baixo
arredondado = Math.floor(45.8);
console.log('Arredondado para baixo', arredondado);

/* Crie um código que gere os 6 números da mega senna.
 * Não precisa se preocupar em tratar repetição ainda.
 * Os números deve estar entre 0 e 60;
 */ 
var numero;
for(var i = 0; i < 6; i++) {
	numero = Math.floor(Math.random() * 60) + 1;
	console.log(numero);
}