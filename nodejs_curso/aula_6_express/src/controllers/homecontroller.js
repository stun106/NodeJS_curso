exports.paginaInicial = (req,res) =>{
    res.render('index')      
}

exports.resposta = (req,res) =>{
    console.log(req.body)
    res.send(`Recebi o formulario ${req.body['nome']} ${req.body['senha']}`);
}