var som = {nome: 'Pionner', potencia: '400 W'};

var ligar = function() {
	console.log('Ligando o carro...');
}

/*
 É possível passar elementos de tipos de dados diferentes para dentro de uma Array
*/
var fox = [ 'Fox', 4, som, ligar ];

console.log( 'Modelo:', fox[0] );
console.log( 'Portas:', fox[1] );
console.log( 'Som:', fox[2].nome );
fox[3]();