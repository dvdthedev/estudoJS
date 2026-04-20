class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(this.nome + ": Olá!")
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando.`)
}

const p1 = new Pessoa("Deivid", "Rocha");
p1.falar();
const p2 = new Pessoa2("Deivid", "Rocha");
p2.falar();

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    static trocaPilha() {
        console.log('ok, vou trocar a pilha')
    }
}

const controle1 = new ControleRemoto('LG');

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
ControleRemoto.trocaPilha();

console.log(Math.random() * 100)