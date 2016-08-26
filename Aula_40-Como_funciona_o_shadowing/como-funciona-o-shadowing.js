var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111',
	fabricante: 'GM'
}

console.log('fox.fabricante', fox.fabricante);

// Object.setPrototypeOf(fox, volks);
fox.__proto__ = volks; // Jeito feio.

console.log('fox.fabricante', fox.fabricante); // GM mesmo trocando o prototipo
console.log('fox', fox); // mostra o fabricante porque tem o fabricante direto no objeto

delete fox.fabricante;
console.log('fox.fabricante ->', fox.fabricante);
console.log('fox ->', fox);

for(propriedade in fox) {
	console.log(propriedade, fox.hasOwnProperty(propriedade));

}