var emails = []; // Criando um array

console.log('typeof emails', typeof emails); // object

/* Adicionando elementos em um array */
emails[0] = 'joao@email.com';
emails[1] = 'maria@email.com';

/* Acessando elementos em um array */
console.log('emails[0]', emails[0]); 
console.log('emails[5]', emails[5]); // undefined

// Criando arrays declarando ao mesmo tempo
var nomes = ['João', 'Maria'];
console.log('Quantos nomes?', nomes.length);

nomes[4] = 'José';

console.log('Quantos nomes depois do José', nomes.length);
console.log('nomes[3]', nomes[3]); // undefined