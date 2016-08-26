var contador = {
	total: 0,
	incrementar: function() {
		this.total++;
	},
	resetar: function() {
		console.log('Valor do contador', this.total);
		this.total = 0;
	}
}

// problema e que eu tenho acesso ao total;
contador.total = 'AlgaWorks';

contador.incrementar();
contador.incrementar();

contador.resetar();

contador.incrementar();
contador.resetar();
