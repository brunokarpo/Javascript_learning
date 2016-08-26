/* Escopo de função */
var nome = 'AlgaWorks'; // variável de escopo global;

var capitalizar = function() {
	// Variavel de escopo local a função capitalizar
	var nome = 'Algaworks'.toUpperCase();
}

capitalizar();
console.log('nome', nome);

var capitalizar2 = function() {
	nome = 'Algaworks'.toUpperCase(); // Acessando a variável global
}

capitalizar2();
console.log('nome', nome);

/* Criando variável global dentro de escopo de função. */

var capitalizar3 = function() {
	// como a variável cidade foi criada sem a palavra 'var' então
	// ela será criada como variável global.
	cidade = 'Goiania'.toLowerCase();
}

capitalizar3();
console.log('Cidade', cidade);