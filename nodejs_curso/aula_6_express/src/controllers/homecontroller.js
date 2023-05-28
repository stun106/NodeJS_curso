exports.paginaInicial = (req,res) =>{
    res.render('index',{
                    titulo: 'titulo da pagina ',
                    numeros: [0,1,5,6,8,9]                
                    });
                    return;      
}

exports.resposta = (req,res) =>{
    res.send(req.body.cliente)
    console.log(req.body)
}