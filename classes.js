class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

function Pessoa2(nome,idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa2.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
};

const p1 = new Pessoa('João', 20);
const p2 = new Pessoa2('João', 20);
p1.falar(); // Meu nome é João e eu tenho 20 anos.
p2.falar(); // Meu nome é João e eu tenho 20 anos.


// Diferenças entre Classe e Função Construtora:

// Ambas as abordagens permitem a criação de objetos com propriedades e métodos.
// A sintaxe de classe é uma forma mais recente e declarativa de definir objetos, enquanto a função construtora é uma abordagem mais antiga.
// No entanto, ambas as abordagens atendem ao mesmo propósito fundamental de criar objetos.

// prototype em Pessoa2

// ao adicionar o metodo falar() ao prototype de Pessoa2, todas as instancias de Pessoa2 terão acesso a esse metodo, economizando memória, porem, se o metodo falar() for adicionado diretamente ao construtor, cada instancia de Pessoa2 terá seu proprio metodo falar(), ocupando mais memória.

// no caso da classe, o metodo da classe é instanciado uma vez apenas e é compartilhado por todas as instancias da classe como herança.

// a abordagem de classe é mais simples, fácil de entender e orientada a objetos, enquanto a função construtora oferece uma visão mais explicita do protótipo e é mais comum em códigos mais antigos ou bibliotecas legadas.