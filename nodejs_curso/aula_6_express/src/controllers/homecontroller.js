const HomeModel = require('../models/homeModel');

HomeModel.create({
    titulo: 'Um título de testes.',
    descricao: 'Uma descrição de testes.'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))    

exports.paginaInicial = (req,res) =>{
    res.render('index')      
}

exports.resposta = (req,res) =>{
    res.send(req.body.cliente)
    console.log(req.body)
}