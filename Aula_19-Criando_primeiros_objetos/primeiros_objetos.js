/* Criando objetos */

var fox = {
	cor: 'prata',
	modelo: 'fox',
	fabricante: 'VW'
}

console.log('fox', fox);
console.log('typeof fox', typeof fox);

// Acessando atríbutos de um objeto.
console.log('Cor do fox', fox.cor);

//pintando o fox
fox.cor = 'branco';
console.log('Cor depois de pintado', fox.cor);

console.log('Modelo', fox['modelo']);

// Adicionando nova propriedade em um objeto pronto
fox.peso = 1100;
console.log(fox);


console.log('Potencia:', fox.potencia);

// Definindo uma função dentro de um objeto.
fox.ligar = function() {
	console.log('ligando o carro');
}

console.log(fox);
fox.ligar();

// Criando um objeto com uma função pré definida
var celta = {
	cor: 'branco',
	modelo: 'celta',
	fabricante: 'GM',
	ligar: function() {
		console.log('ligando o carro...')
	}
};

console.log('celta', celta);
celta.ligar();