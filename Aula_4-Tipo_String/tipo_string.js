/* Tipo String */

// Responde tanto com aspas simples como com aspas duplas
var x = 'Algaworks';
console.log(x);
console.log(typeof x);

var y = "Algaworks";
console.log(y);
console.log(typeof y);

/* Funções para String*/

// Tamanho da String
// lenght é uma propriedade, não uma função
console.log(x.length);

// Comparar Strings
var a = 'AlgaWorks';
var b = 'AlgaWorks';
// dá para comparar com 3 sinais de 'igual' ou dois. Use 3;
console.log(a === b);
console.log(a == b);

// Descobrir o indice de um caractere 
var m = 'Seja bem vindo a AlgaWorks';
console.log( m.indexOf('vindo') );

// Retorna o índice da primeira ocorrência do caractere
console.log( m.indexOf('a') );
// Retorna o índice da última ocorrência do caractere.
console.log( m.lastIndexOf('a') );
// Se não encontrar
console.log( m.indexOf('z') );
// Posso atribuir o retorno a uma variável.
var indice = m.indexOf('A');
console.log(indice);

/*Substring*/
var s = 'A arte de programar';
console.log(s);
console.log( s.substring(2, 6) );
var novaString = s.substring(2, 6);
console.log(s);
console.log(novaString);
console.log( s.substring(2) );

// Função Slice
// Quase a mesma função de Substring mas possibilita contar de trás para frente
console.log( s.slice(2, 6) );
console.log( s.slice(-17, -13) );

// Função substr
// o primeiro parametro é o índice inicial e o último parametro é a quantidade de caracteres desejados.
console.log( s.substr(2, 4));

/* Função replace */
var m = 'Seja bem vindo <nome>';
var substituido = m.replace('<nome>', 'Bruno');
console.log(substituido);

/* Função toUperCase */
console.log( substituido.toUpperCase() );
// toLowerCase
console.log( substituido.toLowerCase() );

/* Concatenação de Strings */
var n = 'Olá' + ' ' + 'Bruno';
console.log(n);
n = 'Olá'.concat(' ', 'Ricardo');
console.log(n);

/*Retornar caractere especifico de uma string*/
console.log( n.charAt(4) );