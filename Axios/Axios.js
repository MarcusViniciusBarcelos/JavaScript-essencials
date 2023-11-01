
// Axios
// Axios é uma biblioteca JavaScript que permite realizar requisições HTTP.

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
    .then(data => carregaElementosPagina(data))
    .catch(error => console.error(error));


// agora com axios:

/**
 * Faz uma requisição HTTP utilizando a Axios para obter dados de usuários de um servidor remoto.
 * @param {string} url - A URL do servidor remoto.
 * @returns {Promise} - Uma Promise que resolve com os dados obtidos ou rejeita com um erro.
 */
axios('https://jsonplaceholder.typicode.com/users')
    .then(response => carregaElementosPagina(response.data))
    .catch(error => console.error(error));
    


/**
 * Função que carrega elementos na página a partir de um array de objetos contendo nome e email.
 * @param {Array} data - Array de objetos contendo nome e email.
 * @returns {void}
 */
function carregaElementosPagina(data) {
    const div = document.querySelector('#root');
    const table = document.createElement('table');
    div.appendChild(table);
    const trHeader = document.createElement('tr');
    const thName = document.createElement('th');
    thName.textContent = 'Name';
    const thEmail = document.createElement('th');
    thEmail.textContent = 'Email';
    trHeader.appendChild(thName);
    trHeader.appendChild(thEmail);
    table.appendChild(trHeader);
    data.forEach(element => {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.textContent = element.name;
        const tdEmail = document.createElement('td');
        tdEmail.textContent = element.email;
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        table.appendChild(tr);
    });
}





