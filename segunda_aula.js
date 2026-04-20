const numeros = [1, 5, 5123, 123, 54, 98, 2, 3, 4];

const numerosFiltrados = numeros.filter((valor) => valor > 10);

console.log(numerosFiltrados);

const pessoas = [
    { nome: "Ana Silva", idade: 28 },
    { nome: "Bruno Costa", idade: 34 },
    { nome: "Carla Souza", idade: 22 },
    { nome: "Diego Oliveira", idade: 41 },
    { nome: "Elena Martins", idade: 29 }
];


const pessoasFiltradas = pessoas.filter(pessoas => pessoas.idade > 30);

console.log(pessoasFiltradas);

const numerosDobrados = numeros.map((valor) => valor * 2);

console.log(numerosDobrados);

const addToPessoas = pessoas.map(pessoa => 'nome: ' + pessoa.nome)

console.log(addToPessoas);

const PessoasIdade = pessoas.map(pessoas => ({ idade: pessoas.idade }));

console.log(PessoasIdade);

const comIds = pessoas.map((pessoas, index) => {
    const newObj = { ...pessoas }
    newObj.id = index + 1;
    return newObj;
});

//console.log(comIds)
//console.log(pessoas)

const somaIdades = pessoas.reduce((value, pessoas, indice, array) => {

    value += pessoas.idade;
    //console.log(value);
    return value;
}, 0)

//console.log(somaIdades);

const maisVelha = pessoas.reduce((acumulador, valor) => {
    //console.log('idade: ' + valor.idade)
    //if (acumulador.idade > valor.idade) {
    //  return acumulador;
    //}


})

const valores = [2, 3, 5, 10, 22, 33, 55, 80, 88];

const numerosPares = valores.filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);

console.log(numerosPares);

valores.forEach(function (valor, indice, array) {
    console.log(valor, indice)
})
//console.log(maisVelha);