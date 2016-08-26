var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111'
}

// cria um objeto usando como prototipo o objeto passado por parâmetro
var gol = Object.create(volks);

gol.nome = 'Gol';
gol.placa = 'AAA-2222';
/*var gol = {
	nome: 'Gol',
	placa: 'AAA-2222'
}*/

console.log('fox', fox);
console.log('gol', gol);


console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));

console.log('fox.fabricante', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);

// Essa pohha não funciona
//Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante ->', fox.fabricante);

var golf = {
	nome: 'Golf',
	placa: 'AAA-3333',

	// evite usar para não ter problemas de compatibilidade
	__proto__: volks
}

console.log('golf.fabricante', golf.fabricante);



/* =================================
 *
 * Pequeno código de brincadeira
 *
 */

var pessoa = {
	nome: 'Bruno Nogueira'
}

var tipoPessoa = Object.create(pessoa);
tipoPessoa.tipo = 'Fisica';

var codigoPessoa = Object.create(tipoPessoa);
codigoPessoa.cpf = '111.111.111-11';

var ocupacao = Object.create(codigoPessoa);
ocupacao.atual = 'Programador';

console.log(ocupacao.nome);
console.log(ocupacao.cpf);
console.log(ocupacao.tipo);
console.log(ocupacao.atual);