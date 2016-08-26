/* Apagando propriedade do objeto */
var joao = {
	nome: 'joao',
	idade: 25,
	endereco: {
		logradouro: 'Av Brasil',
		numero: 100,
		complemento: 'Apto 202',
		cidade: 'Rio de Janeiro',
		estado: 'RJ'
	}
};

console.log(joao);

// Palavra 'delete' reservada para excluir propriedade de um objeto
delete joao.idade;

console.log(joao);

var enderecoString = 'endereco';

delete joao[enderecoString].estado;

console.log(joao);