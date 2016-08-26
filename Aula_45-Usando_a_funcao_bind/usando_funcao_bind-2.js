var Estado = (function() {

	// Construtor;
	function Estado() {
		this.comboEstado = $('#combo-estado');
	}

	Estado.prototype.iniciar = function() {
		$.get({
			url: 'http://localhost:8080/estados',
			dataType: 'jsonp',
			success: onEstadosRetornados.bind(this),
			error: onError.bind(this)
		});
	}

	function onEstadosRetornados(estados) {
		this.comboEstado.html('<option>Selecione o estado</option>');
		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			this.comboEstado.append(optionEstado);
		}.bind(this));
	}

	function onError() {
		alert('Falha ao carregar estados do servidor');
	}

	return Estado;

})();

$(function() {
	var estado = new Estado();
	estado.iniciar();

});