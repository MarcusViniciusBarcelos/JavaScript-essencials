


/**
 * Função assíncrona que realiza uma requisição HTTP GET para a URL especificada e retorna os dados em formato JSON.
 * @param {string} url - A URL para a qual a requisição será enviada.
 * @returns {Promise<void>} - Uma Promise que resolve com os dados em formato JSON ou rejeita com um erro HTTP.
 */
async function fetchUsers(url) {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch(e) {
        console.log(e);
    }

}
// Chamada da função assíncrona

fetchUsers('https://jsonplaceholder.typicode.com/users')

// O método fetch() recebe uma URL como parâmetro e retorna uma promise, que é resolvida com um objeto Response quando a requisição é concluída.
// nativo do navegador e não precisa ser importado, mas não é suportado em todos os navegadores.
// uma alternativa ao método XMLHttpRequest, que é mais antigo e mais complexo.
// mais simples de usar que o método XMLHttpRequest, mas também é menos flexível, pois não permite monitorar o progresso da requisição.


// exemplo com then e catch:
/**
 * Faz uma requisição HTTP utilizando a Fetch API para obter dados de usuários de um servidor remoto.
 * @param {string} url - A URL do servidor remoto.
 * @returns {Promise} - Uma Promise que resolve com os dados obtidos ou rejeita com um erro.
 */
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()})
    .then(data => console.log(data))
    .catch(error => console.error(error));



