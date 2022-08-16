"use strict";
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
let soma = document.getElementById('soma'); // campos de input devem ser declarados desta forma no TS
let campoSaldo = document.getElementById('campo-saldo');
let saldoAtual = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) { //Verificação do elemento HTML
        saldoAtual += soma; //A operação de incremento é realizada
        campoSaldo.innerHTML = saldoAtual.toString(); //Conversão de número para String
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = ''; // Este método value permite retornar string
}
function limparSaldo() {
    if (campoSaldo) { //Verificação do elemento HTML
        saldoAtual = 0;
        campoSaldo.innerHTML = saldoAtual.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); // Number vai realizar a conversão da string em número
    });
}
botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});
