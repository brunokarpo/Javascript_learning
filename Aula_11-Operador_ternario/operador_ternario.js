/* Operador ternario */

var temFoto = false;

var pathFoto = '';

if(temFoto) {
	pathFoto = 'maria-perfil.jpg';
} else {
	pathFoto = 'mock-perfil.jpg';
}

console.log('path da foto', pathFoto);

// operação ternária.
pathFoto = temFoto ? 'maria-perfil.jpg' : 'mock-perfil.jpg';
console.log('path da foto', pathFoto);