// Array.reduce() - Redução de Elementos:

// Definição:

// O método Array.reduce() é utilizado para reduzir os elementos de um array a um único valor.
// Ele aplica uma função acumuladora a cada elemento do array (da esquerda para a direita) para reduzi-los a um valor único.
// Pode ser usado para realizar operações como soma, concatenação, ou qualquer outra forma de agregação.

// Retorna um único valor - o valor acumulado.

// Sintaxe:

const novoValor = arrayOriginal.reduce(function(acumulador, elemento, índice, array) {
    // Código para reduzir o array
    return novoValorAcumulado;
  }, valorInicial);

// Parâmetros:

// acumulador: O valor acumulado retornado pela última invocação do callback, ou o argumento valorInicial, se fornecido. (Veja abaixo.)
// elemento: O elemento atual que está sendo processado no array.
// índice (opcional): O índice do elemento atual que está sendo processado no array.
// array (opcional): O array ao qual a função reduce foi chamada.
// valorInicial (opcional): Um valor a ser usado como o primeiro argumento da primeira chamada da função callback. Se nenhum valorInicial é fornecido, o primeiro elemento do array será usado como o valor inicial do acumulador e o índice inicial será igual a 1, em vez de 0.

// Valor de retorno:

// O valor resultante da redução.

// Exemplo:

const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acc, valor) => acc + valor);
// Resultado: 15

const pares = numeros.reduce((acc, valor) => {  // nao fazer isso, usar filter
    if (valor % 2 === 0) acc.push(valor);
    return acc;
})

const dobro = numeros.reduce((acc, valor) => {  // nao fazer isso, usar map
    acc.push(valor * 2);
    return acc;
}, []);

// O método reduce() é muito útil para reduzir os elementos de um array a um único valor, como um número, string, objeto, etc.

// retornar apenas a pessoa mais velha
const pessoas = [
    { nome: 'Maria', idade: 23 },
    { nome: 'João', idade: 18 },
    { nome: 'José', idade: 30 },
    { nome: 'Paulo', idade: 16 },
];

const maisVelha = pessoas.reduce((acc, obj) => {
    if (acc.idade > obj.idade) return acc;
})

// Resultado: { nome: 'José', idade: 30 }