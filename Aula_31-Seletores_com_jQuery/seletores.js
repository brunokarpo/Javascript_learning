$(function() {
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	var selecaoUsuarios = $('.js-selecao-usuario');

	selecaoUsuarios.click(function(e) {
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
		var checked = selecaoUsuarios.length === totalUsuariosSelecionados;

		selecaoTodosUsuarios.prop('checked', checked);

	});

	selecaoTodosUsuarios.click(function(e) {
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
	});
});