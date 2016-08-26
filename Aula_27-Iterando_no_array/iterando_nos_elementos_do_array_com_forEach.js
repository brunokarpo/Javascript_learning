var nomes = ['João', 'Pedro', 'Maria', 'José'];

// Forma tradicional
for (var i = 0 ; i < nomes.length ; i++ ) {
	console.log('nomes[', i ,'] =', nomes[i]);
}

/*
 O Array tem uma função chamada 'forEach'.
 Ela recebe como parâmetro uma função que recebe como atríbuto um elemento do array.
 A função é executada para cada elemento do Array.
 */
nomes.forEach(function(e) {
	console.log(e);
});