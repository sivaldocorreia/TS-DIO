"use strict";
/* Como podemos melhorar o esse código usando TS?

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}

*/
// O código foi reescrito em TS utilizando o enum para designar a lista de profissões
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
const maria = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};
const roberto = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};
const laura = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
};
const carlos = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
};
