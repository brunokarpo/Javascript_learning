/* Operadores lógicos */

var ativo = true;
var administrador = false;

console.log(ativo && administrador); // false;
console.log(ativo || administrador); // true;

if(ativo || administrador) {
	console.log('Usuario ativo mas não é administrador');
}

console.log(ativo | administrador); // 1
console.log(ativo & administrador); // 0

console.log(10 | 1); // 11. questão de comparação entre valores binários
console.log(10 & 1); // 0. 