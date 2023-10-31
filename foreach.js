// Array.forEach() - Iteração de Elementos:

// Definição:

// O método Array.forEach() é utilizado para executar uma função de callback uma vez para cada elemento no array, em ordem.
// Ele não cria um novo array, mas itera sobre os elementos do array existente.
// Geralmente utilizado para a execução de operações em cada elemento sem a necessidade de criar um novo array resultante.

// Sintaxe:

// array.forEach(function callback(currentValue, index, array) {
//     // código aqui
// }[, thisArg]);

// Parâmetros:

// callback: Função a ser executada para cada elemento, recebendo três argumentos:
// currentValue: O valor do elemento atual sendo processado no array.
// index: O índice do elemento atual sendo processado no array.
// array: O array que forEach() está sendo aplicado.
// thisArg: Valor a ser utilizado como this quando executar callback.

// Exemplo 1:

const array = [1, 2, 3, 4, 5];

array.forEach((value, index) => {
    console.log(`O elemento ${index} é ${value}`);
});

// O elemento 0 é 1
// O elemento 1 é 2
// O elemento 2 é 3
// O elemento 3 é 4
// O elemento 4 é 5

