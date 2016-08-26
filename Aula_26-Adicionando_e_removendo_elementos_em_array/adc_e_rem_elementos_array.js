var emails = []; // Criando um array

console.log('Tamanho do array', emails.length);

/* Adicionando elementos no Array */
var tamanhoArray = emails.push('joao@email.com'); // Adiciona elemento no array e retorna o tamanho do array
console.log('Tamanho do array depois do primeiro push', tamanhoArray);
console.log('Array de emails', emails);

tamanhoArray = emails.push('maria@email.com');
console.log('Tamanho do array depois da maria', tamanhoArray);
console.log('Array de emails', emails);

emails.push('jose@email.com');
console.log('Array de emails depois do jose', emails); // O elemento é sempre adicionado no final do array.


/* Removendo elementos no Array */
var elementoRetornado = emails.pop(); // Remove o último elemento do array e retorna o elemento
console.log('elemento removido', elementoRetornado);

console.log('Tamanho do array depois da primeira remoção', emails.length);
console.log(emails);


/* Adicionando elementos na primeira posição do array */

tamanhoArray = emails.unshift('pedro@email.com'); // Adiciona o elemento no iníco do array e retorna o tamanho do array
console.log('Tamanho do array', tamanhoArray);
console.log('Elementos do array', emails);

/* Removendo primeiro elemento do Array */
var primeiroElemento = emails.shift();
console.log('Elemento removido do início', primeiroElemento);
console.log('Array depois da remoção', emails);

/*
 Funções aprendidas
 push(); Adiciona elementos no array
 pop(); remove último elemento do array
 unshift(); Adiciona elemento na primeira posição do array;
 shift(); remove o elemento da primeira posição do array;
*/