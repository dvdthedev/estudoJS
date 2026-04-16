// ==========================================
// BEM-VINDO À SUA PRIMEIRA AULA DE JAVASCRIPT!
// ==========================================

// 1. Imprimindo mensagens na tela (console)
// O console.log é o seu melhor amigo. Ele serve para mostrar mensagens e ver se o seu código está funcionando.
console.log("Olá, mundo! Este é o meu primeiro programa em JavaScript.");

// 2. Variáveis (Guardando informações)
// 'let' e 'const' são usados para criar caixinhas para guardar valores.
let nomez = "Deivid Rocha";       // Texto (String) usa aspas
let idadez = 25;          // Números (Number) não precisam de aspas
const ehEstudante = true; // Booleano (Boolean) - true (verdadeiro) ou false (falso)

// Vamos imprimir nossas variáveis!
//console.log("Nome do Aluno:", nome);
//console.log("Idade:", idade, "anos");

// 3. Operações Matemáticas Básicas
// O JavaScript sabe fazer contas muito bem!
let numero1 = 10;
let numero2 = 5;

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

console.log("A soma de 10 e 5 é:", soma);
console.log("A subtração de 10 e 5 é:", subtracao);

// 4. Condicionais (Tomando decisões)
// O "If" (Se) e "Else" (Senão) ensinam o computador a tomar decisões.
if (ehEstudante) {
    console.log("Mensagem: Parabéns, continue focado em aprender JavaScript!");
} else {
    console.log("Mensagem: Nunca é tarde para começar a estudar programação =)");
}

// ==========================================
// EXERCÍCIO: Tente mudar o valor da variável 'nome'
// lá em cima para o seu próprio nome e veja o que acontece!
// ==========================================

const [a, b, c] = [1, 2, 3];

console.log(a, b, c)

const numeros = [10, 200, 3000, 40000, 50];

const [primeiroNumero, , segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero, resto);

const pessoa = {
    nome: "Luis",
    sobrenome: "Miranda",
    idade: 30,
    endereco: {
        rua: "Julio Mesquita",
        numero: 268,
    }
}

const { nome: teste = 'não existe', sobrenome, idade } = pessoa;
console.log(teste, sobrenome, idade);

const { endereco: { rua, numero } } = pessoa;
console.log(rua);

function falaOi() {
    console.log("Oi!")
}

falaOi();