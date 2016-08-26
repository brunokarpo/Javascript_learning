$(function(){

	$('#botao1').click(function(e) {
		console.log('Botao 1 clicado');
	});

	$('#link1').click(function(e) {
		e.preventDefault(); // Interrompe o comportamento padrão desse evento.
		console.log('Link 1 clicado');
	});

	$('#input1').keyup(function(e) {
		console.log(e.keyCode);
		if(e.keyCode === 13) {
			alert('Enter pressionado');
		}
	});

});
