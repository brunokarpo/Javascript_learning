var contador = (function() {
	var valor = 0; // encapsulei dentro da função. Inacessível de fora. PRIVADO
	var incrementar = function() {
		valor++;
		funcaoPrivada();
	};

	var resetar = function() {
		console.log('Valor do contador', valor);
		valor = 0;
	};

	function funcaoPrivada() {
		console.log('Funcao privada');
	}

	return {
		incrementar: incrementar,
		resetar: resetar
	}

})();

contador.incrementar();
contador.incrementar();

contador.resetar();