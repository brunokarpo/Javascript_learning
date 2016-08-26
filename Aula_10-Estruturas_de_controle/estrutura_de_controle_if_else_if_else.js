/* Estrutura de controle */
// var pessoa = 'FISICA';
// var pessoa = 'JURIDICA';
var pessoa = 'EXTRANGEIRO';

if(pessoa === 'FISICA') {
	console.log('Selecionado pessoa física');
} else if (pessoa === 'JURIDICA') {
	console.log('Selecionado pessoa jurídica');
} else {
	console.log('Tipo pessoa invalida');
}

/* =================================== */
// complementa aula de tipo boolean
var valor = 0;
if(!valor) {
	console.log('Valor deve ser maior que zero!');
}

var idade = 10;
if(idade) {
	console.log('Daqui a 5 anos você terá', idade + 5, 'anos');
}