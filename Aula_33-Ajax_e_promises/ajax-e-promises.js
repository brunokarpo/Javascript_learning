$(function() {
	var resposta = $.get({
		url: 'http://localhost:8080/estados',
		dataType: 'jsonp' // Comente para forçar o erro no carregamento para chamar a promises
	});

	resposta.done(function(estados) {
		console.log('Tudo certo!', estados);
		estados.forEach( function(estado) {
			console.log(estado);
		});
	});

	resposta.fail(function() {
		alert('Falha ao carregar estados do servidor');
	});

})