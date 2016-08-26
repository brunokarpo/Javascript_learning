function Carro(nome, placa) {
	this.nome = nome;
	this.placa = placa;
}

// var fox = new Carro('Fox', 'AAA-1111');
var fox = {};
var gol = {}
Carro.call(gol, 'Gol', 'AAA-2222');
Carro.apply(fox, ['Fox', 'AAA-1111']);

console.log('fox', fox);
console.log('gol', gol);