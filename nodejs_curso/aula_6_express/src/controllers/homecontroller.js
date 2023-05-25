
exports.paginaInicial = (req,res) =>{
    res.render('index')      
}

exports.resposta = (req,res) =>{
    res.send(req.body.cliente)
    console.log(req.body)
}