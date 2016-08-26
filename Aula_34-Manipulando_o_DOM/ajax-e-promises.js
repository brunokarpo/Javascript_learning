$(function() {
	var resposta = $.get({
		url: 'http://localhost:8080/estados',
		dataType: 'jsonp' // Comente para forçar o erro no carregamento para chamar a promises
	});

	resposta.done(function(estados) {
		var comboEstado = $('#combo-estado');
//		comboEstado.empty();
		comboEstado.html('<option>Selecione o estado</option>');
		estados.forEach( function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
//			comboEstado.prepend(optionEstado); // Adiciona de baixo para cima
		});
	});

	resposta.fail(function() {
		alert('Falha ao carregar estados do servidor');
	});

})