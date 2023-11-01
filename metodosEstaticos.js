// Método Estático:

// static trocaPilha() é um método estático, o que significa que é chamado na própria classe, não em uma instância.
// Métodos estáticos são associados à classe, não às instâncias individuais. No exemplo, ele exibe a mensagem 'Ok, vou trocar.'.

// Métodos estáticos são úteis para criar funções utilitárias para uma aplicação, pois não precisam ser chamados em uma instância.

// Exemplo:

// Path: metodosEstaticos.js
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    // Método de instância
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar.');
    }

    // Método estático
    static soma(x, y) {
        console.log(this); // [class ControleRemoto]
        return x + y;
    }
}

const controle2 = new ControleRemoto('LG');
controle2.aumentarVolume();
console.log(controle2);

ControleRemoto.trocaPilha(); // Ok, vou trocar.
ControleRemoto.soma(2, 3); // 5

// O método estático soma() recebe dois parâmetros e retorna a soma deles. Ele é chamado na própria classe, não em uma instância.
// O método estático soma() também exibe a classe ControleRemoto no console. Isso significa que o this dentro do método estático se refere à classe, não a uma instância.

// metodos estaticos nao tem acesso aos dados da instancia, somente a classe, ou seja, nao tem acesso aos dados do objeto, não tem como utilizar um metodo de instancia dentro de um metodo estatico.
