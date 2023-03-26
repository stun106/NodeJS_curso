// const falarNome = require('./nodejs_curso/app').falarNome

// console.log(falarNome());

//desestruturação 
// const { nome, sobrenome, falarNome} = require('./nodejs_curso/app')
// console.log(nome)

//outro exemplo

const {Pessoa}= require("./app");

const alien = new Pessoa("José");
console.log(alien.nome)

