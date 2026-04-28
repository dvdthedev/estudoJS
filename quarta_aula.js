function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
};

function pedirPao(temGas, tempo) {
    return new Promise((resolve, reject) => {
        if (!temGas) reject('Não tem gás');
        setTimeout(() => {
            resolve('Tem pão quentinho saindo.')
        }, tempo);
    })
}

pedirPao(false, 1000)
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log(e)
    });


pedirPao(true, 1000)
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log(e)
    });

esperaAi('Frase 1', rand(1, 2))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', rand(1, 2));
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi(22, rand(1, 2));
    })
    .then(resposta =>
        console.log(resposta)
    )
    .then(() =>
        console.log('Eu serei o ultimo a ser exibido!'))
    .catch(e => {
        console.log('ERRO', e);
    });
esperaAi('Frase 2', rand(1, 4));
esperaAi('Frase 3', rand(1, 2));
console.log('Serei exibido primeiro!');

const promises = ['primeiro valor',
    esperaAi('Promise 1'),
    esperaAi('Promise 2'),
    esperaAi('Promise 3'),];


Promise.all(promises)
    .then(valor => {
        console.log(valor)
    }).catch();