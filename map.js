// Array.map() - Mapeamento de Elementos:

// Definição:

// O método Array.map() é uma função de ordem superior que cria um novo array com os resultados de uma função fornecida para cada elemento do array original.
// Ele não modifica o array original, mas gera um novo array com base nas transformações aplicadas pela função fornecida.

// Retorna um novo array com o mesmo comprimento do array original.

// Sintaxe:

const novoArray = arrayOriginal.map(function(elemento, índice, array) {
    // Código para transformar o elemento
    return novoValor;
  });

// Parâmetros:

// elemento: O elemento atual que está sendo processado no array.
// índice (opcional): O índice do elemento atual que está sendo processado no array.
// array (opcional): O array ao qual a função map foi chamada.

// Valor de retorno:

// Um novo array com cada elemento sendo o resultado da função callback.

// Exemplo:

const numeros = [1, 2, 3, 4, 5];
const aoQuadrado = numeros.map(num => num ** 2);
// Resultado: [1, 4, 9, 16, 25]

