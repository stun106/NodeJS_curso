exports.paginaInicial = (req,res) =>{
    res.send(`<form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome" ><br>
       password: <input type="password" name="senha"> <br>
            <button type="submit">Enviar</button> 
            </form>` )           
}

exports.resposta = (req,res) =>{
    console.log(req.body)
    res.send(`Recebi o formulario ${req.body['nome']} ${req.body['senha']}`)
}