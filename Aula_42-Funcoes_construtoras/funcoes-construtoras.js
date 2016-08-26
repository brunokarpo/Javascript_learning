// Funcao construtora deve ser declarada com letras maísculas no início, por convensão
var Carro = function(nome, placa) {
	this.nome = nome;
	this.placa = placa;
	this.fabricante = 'VM';
}

var fox = new Carro('Fox', 'AAA-1111');
console.log('fox', fox);