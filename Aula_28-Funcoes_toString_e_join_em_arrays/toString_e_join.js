var carros = ['Celta', 'Fox', 'Gol', 'Fiesta'];

/* Função toString() retorna uma String com todos os elementos
   do Array separados por virgula ',';
*/
var c = carros.toString();
console.log('typeof c', typeof c);
console.log('carros.toString()', carros.toString());

/*
  Função join() retorna uma String com todos os elementos
  do Array, porém ela recebe como parâmetro o separador 
  dos elementos.
*/
var c2 = carros.join(' - ');
console.log('typeof c2', typeof c2);
console.log('carros.join(\' - \')', c2 );
console.log(carros.join(', ')); // separando por vírgula e espaço