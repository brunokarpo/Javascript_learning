var estado = (function() {
	var comboEstado = $('#combo-estado');

	function iniciar() {
		$.get({
			url: 'http://localhost:8080/estados',
			dataType: 'jsonp',
			success: onEstadosRetornados,
			error: onError
		});
	}

	function onEstadosRetornados(estados) {
		comboEstado.html('<option>Selecione o estado</option>');
		estados.forEach( function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
		});
	}

	function onError() {
		alert('Falha ao carregar estados do servidor');
	}

	return {
		iniciar: iniciar
	}

})();

estado.iniciar();