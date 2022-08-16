/* O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

*/

// Código refeito em TS com correções devidas


let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement; 
let campoSaldo = document.getElementById('campo-saldo');

let saldoAtual = 0

limparSaldo()


function somarAoSaldo(soma: number) {  
    if(campoSaldo) {   
    saldoAtual += soma;            
    campoSaldo.innerHTML = saldoAtual.toString(); 
    limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = '';         
}

function limparSaldo() {
    if (campoSaldo) {                   
        saldoAtual = 0;
        campoSaldo.innerHTML = saldoAtual.toString();
    }
}


if(botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}


botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});