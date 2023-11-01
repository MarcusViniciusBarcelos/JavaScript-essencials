
/**
 * Uma promessa é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona.
 * Uma promessa é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise|Documentação de Promise no MDN}
 */

/**
 * Gera um número aleatório entre min e max, em segundos.
 * @param {number} min - O valor mínimo em segundos.
 * @param {number} max - O valor máximo em segundos.
 * @returns {number} - O número aleatório gerado em milissegundos.
 */
function aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

/**
 * Executa uma função após um determinado tempo.
 * @param {string} msg - A mensagem a ser exibida.
 * @param {number} tempo - O tempo em segundos para aguardar antes de executar a função.
 * @param {function} [cb] - Opcional. O callback a ser executado após a exibição da mensagem.
 */
function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo);
}

esperaAi('Frase 1', aleatorio(1, 3), function() {
    esperaAi('Frase 2', aleatorio(1, 3), function() {
        esperaAi('Frase 3', aleatorio(1, 3));
    });
})

/**
 *  O código acima é um exemplo de callback hell, ou seja, um callback dentro de outro callback, dentro de outro callback, e assim por diante.
 *  Para resolver esse problema, podemos utilizar as promises.
 * 
 * Uma promise pode ter 3 estados:
 * Pending: quando está pendente, ou seja, em execução.
 * Fulfilled: quando a operação foi concluída com sucesso.
 * Rejected: quando a operação falhou.
 * Para criar uma promise, utilizamos a classe Promise.
 * A classe Promise recebe uma função como parâmetro, que por sua vez recebe dois parâmetros: resolve e reject.
 * Resolve é uma função que será executada quando a promise for concluída com sucesso.
 * Reject é uma função que será executada quando a promise falhar.
 * 
 * Exemplo:
  */
  
function esperaAiPromise(msg, tempo) {
 return new Promise((resolve, reject) => {
       if(typeof msg !== 'string') reject('BAD VALUE');
         setTimeout(() => {
              resolve(msg);
          }, tempo);
     });
  }
  
  esperaAiPromise('Frase 1', aleatorio(1, 3))
      .then(resposta => {
          console.log(resposta);
          return esperaAiPromise('Frase 2', aleatorio(1, 3));
      })
      
    // para testar o reject, basta passar um valor diferente de string para o primeiro parametro da função esperaAiPromise
    .then(resposta => {
        console.log(resposta);
        return esperaAiPromise('Frase 3', aleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('ERRO:', e);
    });

/**
 * O método then() é executado quando a promise é concluída com sucesso.
 *  O método catch() é executado quando a promise falha.
 * 
 *  O método then() pode retornar qualquer valor, inclusive uma nova promise.
 *  O método then() pode receber dois parâmetros: resolve e reject.
 *  O primeiro parâmetro é executado quando a promise é concluída com sucesso.
 *  O segundo parâmetro é executado quando a promise falha.
 * 
 *  O método catch() pode ser encadeado, ou seja, podemos chamar um catch() após o outro.
 *  O método catch() é executado quando a promise falha.
 *  O método catch() pode receber um parâmetro: reject.
 *  O parâmetro reject é executado quando a promise falha.
 * 
 *  O método then() pode ser encadeado, ou seja, podemos chamar um then() após o outro.
 *  O método then() pode receber um parâmetro: resolve.
 * O parâmetro resolve é executado quando a promise é concluída com sucesso.
*/

console.log('Isso aqui será exibido antes de qualquer frase.');


/**
 * as vantagens de utilizar promises:
 * 1 - Elimina a pirâmide de callbacks, melhorando a legibilidade do código.
 * 2 - Melhor tratamento de erros, pois podemos utilizar o método catch() para tratar erros.
 * 3 - Podemos encadear várias promises, utilizando o método then(), melhorando a legibilidade do código.
 * 4 - Podemos utilizar o método Promise.all() para executar várias promises ao mesmo tempo.
 * 5 - introduz  os estados de uma promise: pending, fulfilled e rejected, que nos ajudam a saber o que está acontecendo com a promise, se ela está em execução, se foi concluída com sucesso ou se falhou.
 */