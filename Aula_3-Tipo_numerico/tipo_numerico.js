// Toda variável numérica é do tipo number.
// A precisão é de 64 bits.
var idade = 25;
console.log(typeof idade);

var preco = 14.99;
console.log(typeof preco);

/* Problema de precisão */
var x = 0.3 - 0.2;
console.log(x);
// Retorna 0.09999999999999998

// Gambiarra para resolver.
x = (0.3 * 10 - 0.2 * 10) / 10;
console.log(x);

/* Funções para variáveis de tipo number. */
var y = 10;
console.log(typeof y);

// Capturando valor em formato difernte de decimal
// O dois é binário
console.log( y.toString(2) );
// O dezesseis é hexadecimal
console.log( y.toString(16) );

// Arredonda um número de precisão flutuante
console.log( preco.toFixed() );

/* Casos especiais */
// Um número dividido por 0 vai para o infinito
var i = 10 / 0;
console.log(i); //+Infinity
console.log(typeof i); // number

i = -10 / 0;
console.log(i); // -Infinity
console.log(typeof i); // number

i = 10 / 'algaworks';
console.log(i); // NaN
console.log(typeof i); // Number
// Função que avalia se a variável é um NaN
console.log( isNaN(i) );

// O JavaScript tenta converter uma String em número para operaçõs numéricas
// Se conseguir, o calculo vai funcionar legal
i = 10 / '2';
console.log(i);
console.log(typeof i);

