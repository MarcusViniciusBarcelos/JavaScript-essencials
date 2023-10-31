//retorne a soma do dobro de todos os pares
// -> filtrar pares
// -> dobrar valores
// -> reduzir (somar tudo)

const numeros = [1, 2, 3, 4, 5, 40, 50, 60, 70, 80, 90, 100];
const numerosPares = numeros.filter(num => num % 2 === 0);  
//retorno: [2, 4, 40, 50, 60, 70, 80, 90, 100]
const dobro = numerosPares.map(num => num * 2);
//retorno: [4, 8, 80, 100, 120, 140, 160, 180, 200]
const soma = dobro.reduce((acc, num) => acc + num);
//retorno: 992

console.log(soma); // 992

// simplificando e resumindo o codigo acima
const somaDoDobroDosBumerosPares = numeros
.filter(num => num % 2 === 0)
.map(num => num * 2)
.reduce((acc, num) => acc + num);

console.log(somaDoDobroDosBumerosPares); // 992
