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
// O método map() é muito útil para transformar os elementos de um array em outros elementos, como strings, objetos, outros arrays, etc. 

const pessoas = [
  { nome: 'Maria', idade: 23 },
  { nome: 'João', idade: 18 },
  { nome: 'José', idade: 30 },
  { nome: 'Paulo', idade: 16 },
];

const nomes = pessoas.map(obj => obj.nome); // retornando uma string apenas com o nome da pessoa
// Resultado: ['Maria', 'João', 'José', 'Paulo']
const idades = pessoas.map(obj => ({ idade: obj.idade })); // retornando um objeto com a idade da pessoa
// Resultado: [{ idade: 23 }, { idade: 18 }, { idade: 30 }, { idade: 16 }]
const comIds = pessoas.map((obj, index) => {
  const newObj = { ...obj };
  newObj.id = index + 1;
  return newObj;
}); // retornando um objeto com o nome, idade e id da pessoa

// Resultado: [
//   { nome: 'Maria', idade: 23, id: 1 },
//   { nome: 'João', idade: 18, id: 2 },
//   { nome: 'José', idade: 30, id: 3 },
//   { nome: 'Paulo', idade: 16, id: 4 },
// ]
