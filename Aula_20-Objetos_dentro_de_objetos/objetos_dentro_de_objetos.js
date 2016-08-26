/* Objetos dentro de Objetos */
var joao = {
	nome: 'joao',
	idade: 25,
	endereco: {
		logradouro: 'Av Brasil',
		numero: 100,
		complemento: 'Apto 202',
		cidade: 'Rio de Janeiro',
		uf: 'RJ'
	}
};

console.log(joao);

console.log('Cidade do João ->', joao.endereco.cidade);

// Mudando propriedade de objeto dentro de objeto
joao.endereco.numero = 101;
console.log('Endereco do Joao:', joao.endereco);

// Acessando propriedade que não existe
console.log('cep', joao.endereco.cep); //undefined

// Acessando dinamicamente
console.log('Estado', joao['endereco']['uf']);