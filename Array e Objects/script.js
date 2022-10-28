//Vetores

//como declarar
let array = ['felipe', 6, 9.3, true, ['array'], [1, 2, 3, 4], 50];
console.log(array);

// === MANIPULANDO ARRAYS===
// forEach() - itera um array; array.forEach(function(item, index)) {console.log(item, index)});
// push() - add item no final do array;
// pop() - remove item no final do array;
// shift() - remove item no início do array;
// unshift() - add item no início do array;
// indexOf() - retorna índice de um valor;
// splice() - remove ou substitui um item pelo índice;
// slice() - retorna uma parte de um array existente; Ex: retorna índice de 0 a 3

array.forEach(function(item, index) {console.log(item, index)});
array.push('javaScript');
array.pop();
array.shift();
array.unshift('Método Premium');
console.log('Valor encontrado no índice ',array.indexOf(50));
array.splice(0, 1);

// Objetos
let casa = {rua: 'Rua 9', numero: 10, bairro: 'Areia Branca', cep: '56328-510'};
console.log(casa);
//=======Desestruturando o objeto=======
let objBairro = casa.bairro;
console.log('Bairro: ' + objBairro);
let objRua = casa.rua;
console.log('Rua: ' + objRua);
let objNum = casa.numero;
console.log('Número: ' + objNum);
let objCep = casa.cep;
console.log('Cep: ' + objCep);




