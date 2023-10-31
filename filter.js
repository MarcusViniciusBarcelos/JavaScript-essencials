// Array.filter() - Filtragem de Elementos:

// Definição:

// O método Array.filter() cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
// Ele não modifica o array original, mas retorna um novo array contendo apenas os elementos que atendem à condição especificada.

// Retorna um novo array com os elementos que atendem à condição especificada.

// Sintaxe:

const novoArray = arrayOriginal.filter(function(elemento, índice, array) {
    // Código para verificar a condição
    return condição;
  });

// Parâmetros:

// elemento: O elemento atual que está sendo processado no array.
// índice (opcional): O índice do elemento atual que está sendo processado no array.
// array (opcional): O array ao qual a função filter foi chamada.

// Valor de retorno:

// Um novo array com os elementos que atendem à condição especificada. Se nenhum elemento atender à condição, será retornado um array vazio.

// Exemplo:

const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros.filter(num => num % 2 === 0);
// Resultado: [2, 4]
