/* Closures */

function incrementar() {
	var valor = 0;

	return ++valor;
}

console.log(incrementar());
console.log(incrementar());     // retorna sempre 1
console.log(incrementar());
console.log(incrementar());

console.log('===============================');
/*  Uma forma de resolver  */
// Variável global;
var valor = 0;

function incrementar2() {
	return ++valor;
}

console.log(incrementar2());
console.log(incrementar2());  // Retorna uma contagem de 1 à 4
console.log(incrementar2());  // Mas uso de variável global não é legal
console.log(incrementar2());

console.log('===============================');
/* Resolvendo com closures */
function incrementar3() {
	var valor = 0; // Variável de escopo local

	return function() {
		return ++valor;
	}
}

var fn = incrementar3();

console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());

console.log('typeof fn', typeof fn);

console.log('===============================');

/* funções auto-executavies*/
// Lembrando que incrementar4 é uma function expression,
// o que não é caracterizado uma variável global.
var incrementar4 = (function() {
	var valor = 0;

	return function() {
		return ++valor;
	}
})();

console.log(incrementar4());
console.log(incrementar4());
console.log(incrementar4());
console.log(incrementar4());

console.log('typeof incrementar4', typeof incrementar4);