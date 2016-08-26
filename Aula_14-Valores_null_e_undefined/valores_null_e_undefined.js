var x;
console.log(x); // undefined

console.log('null', typeof null); // object
console.log('undefined', typeof undefined); // undefined

console.log('null === undefined?', null === undefined); // false

console.log('x === undefined', x === undefined); // true
console.log('x === null', x === null); //false

// Usando operador curto
console.log('x == null', x == null); // true
console.log('x == undefined', x == undefined); // true
console.log('null == undefined', null == undefined); // true, pois não compara os tipos de dados.

/* Quando for testar se um valor não está inicializado, use apenas dois sinais
   de iguais para validar mais precisamente.
   */

// x = undefined;
// x = null;
x = 10;

if(x != null) {
	console.log('Existe um valor em x:', x);
} else {
	console.log('x não tem um valor útil');
}