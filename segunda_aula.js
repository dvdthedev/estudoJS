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

console.log(pessoasFiltradas)