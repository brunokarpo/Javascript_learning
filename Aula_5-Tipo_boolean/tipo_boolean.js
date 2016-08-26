/* Tipo Boolean */
var ativo = true;
console.log(typeof ativo);
ativo = false;
console.log(typeof ativo);

// 0 é false
if(0) {
	console.log('Zero é true');
} else {
	console.log('Zero é false');
}

console.log(!0);

// Os seis valores que são false como booleanos.
// Para descobrir o valor padrão de uma variável como boolean, basta colocar
// duas exclamações antes do valor (!!)
console.log(!!0);
console.log(!!'');
console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);
console.log(!!false);

// pequeno exemplo prático
var nome = '';
if(!nome) {
	console.log('Informe o nome');
}

nome = 'João';
if(!nome) {
	console.log('Informe o nome');
} else {
	console.log('Obrigado');
}