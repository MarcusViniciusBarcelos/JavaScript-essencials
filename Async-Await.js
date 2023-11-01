/**
 * Async/await é uma funcionalidade do JavaScript que permite escrever código assíncrono de forma síncrona.
 * Isso significa que você pode escrever código que aguarda a conclusão de uma operação assíncrona sem bloquear a execução do restante do código.
 * O uso do async/await é uma alternativa mais limpa e legível do que o uso de callbacks ou Promises.
 * Quando você usa async/await, você pode escrever código que se parece com código síncrono, mas que na verdade está executando operações assíncronas em segundo plano.
 */

/**
 * Gera um número aleatório entre min e max, em segundos.
 * @param {number} min - O valor mínimo em segundos.
 * @param {number} max - O valor máximo em segundos.
 * @returns {number} - O número aleatório gerado em milissegundos.
 */
function aleatorio(min=0, max=3) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

/**
 * Retorna uma Promise que aguarda um determinado tempo e resolve com uma mensagem em maiúsculas.
 * @param {string} msg - A mensagem a ser retornada.
 * @param {number} tempo - O tempo em milissegundos que a Promise deve aguardar antes de resolver.
 * @returns {Promise<string>} - Uma Promise que resolve com a mensagem em maiúsculas.
 * @throws {string} - Se a mensagem não for uma string, a Promise é rejeitada com uma mensagem de erro.
 */
function esperaAiPromise(msg, tempo) {
    return new Promise((resolve, reject) => {
          if(typeof msg !== 'string') reject('CAI NO ERRO');
            setTimeout(() => {
                 resolve(msg.toUpperCase() + ' - Passei na promise');
             }, tempo);
        });
}

// Exemplo de uso de Promises encadeadas com then/catch
esperaAiPromise('Fase 1', aleatorio())
    .then(valor => {
        console.log(valor);
        return esperaAiPromise('Fase 2', aleatorio());
    })
    .then(fase => {
        console.log(fase);
        return esperaAiPromise('Fase 3', aleatorio());
    })
    .then(fase => {
        console.log(fase);
    })
    .catch(e => console.log(e));

/**
 * Função assíncrona que executa três fases de esperaAiPromise e imprime o resultado de cada uma delas.
 * @returns {Promise<void>} - Uma Promise que resolve quando todas as fases são concluídas.
 */
async function executa() {
    try {
        const fase1 = await esperaAiPromise('Fase 1', aleatorio());
        console.log(fase1);

        const fase2 = await esperaAiPromise('Fase 2', aleatorio());
        console.log(fase2);

        const fase3 = await esperaAiPromise('Fase 3', aleatorio());
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);
    } catch(e) {
        console.log(e);
    }
}

// Chamada da função assíncrona
executa();

// O await só pode ser usado dentro de uma função async
// entre then e catch, o await é mais legivel, não precisa encadear as promisses, o await aguarda a promisse ser resolvida para executar a proxima linha de codigo
// porem, dependendo do caso, o then e o catch podem ser mais uteis, pois o await so pode ser usado dentro de uma função async, e o then e o catch podem ser usados em qualquer lugar