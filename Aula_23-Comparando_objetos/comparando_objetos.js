/* Comparando objetos */

var joao = {
	nome: 'joao',
	idade: 25,
	email: 'teste@email.com',
	// Tem de criar função que compara objetos dentro do objeto.
	igualA: function(obj) {
		// 'this' é uma palavra reservada para identificar o escopo dentro do objeto
		return this.email === obj.email;
	}
}

var maria = {
	nome: 'maria',
	idade: 27,
	email: 'teste2@email.com',
	igualA: function(obj) {
		// 'this' é uma palavra reservada para identificar o escopo dentro do objeto
		return this.email === obj.email;
	}
}

console.log(joao === maria); false

console.log('Joao e Maria tem os mesmos emails?', joao.igualA(maria));