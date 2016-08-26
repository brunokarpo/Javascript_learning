/* Minhas primeiras funções */

// function declartion
function somar(a, b) {
	var resultado = a + b;
	return resultado;
}

// function expression
var subtrair = function(a, b) {
	return a - b;
}

var soma = somar(2, 3);
console.log('2 + 3 =', soma);

var resto = subtrair(6, 2);
console.log('6 - 2 =', resto);

/* ANOTACOES IMPORTANTES
 
 A Function declaration, quando declarada ao final do código, graças ao mecanismo
 de hoisting, ela é levada para o início do código.

 Assim sendo, o código abaixo funcionaria

 ==========================================
 var soma = somar(4, 3);

 function somar(a, b) {
	return a + b;
 }

 ==========================================

 No cenário acima, o hoisting vai levar toda a função para o início do programa,
 deixando a função disponível para ser utilizada. Seria traduzida assim:

 ==========================================
 function somar(a, b) {
	return a + b;
 }

 var soma = somar(4, 3);

 ==========================================


 Porém quando se usa uma function expression, um problema pode ocorrer. Veja o cenário
 apresentado abaixo:

 ==========================================
 var soma = somar(4, 3);

 var somar = function(a, b) {
	return a + b;
 }

 ==========================================

 Nesse exemplo, quando o prgrama for executado, a declaração da variável vai ser levada
 para o início do programa, graças ao mecanismo de hoisting, mas a declaração da função não.
 Assim, o código apresenta um erro, informando que somar não é uma função. O programa traduzido
 ficaria assim:

 ==========================================
 var soma;
 var somar;

 soma = somar(4, 3);

 somar = function(a, b) {
	return a + b;
 }
 
 ==========================================
 
 A regra de ouro: não declare funções no meio ou no fim do código. Declare sempre no início
 para evitar problemas
 */

// No JavaScript as funções não são obrigadas a dar return.
// Quando a função não tem return, ela retorna um 'undefined'
function multiplicar(a, b) {
	var resultado = a * b;
}

var resultado = multiplicar(4, 3);
console.log('4 * 3 =', resultado); // undefined

// Visualizando argumentos das funções
function potencializacao(a, b) {
	console.log('Argumentos', arguments); // Mostra os argumentos recebidos em formato JSON
	var resultado = 1;
	for(var i = 1; i <= b; i++) {
		resultado *= a;
	}
	return resultado;
}

var potencia = potencializacao(5, 0);
console.log('Potencializacao', potencia);

// Função é um tipo de dado no JavaScript
console.log('Typeof subtrair', typeof subtrair);