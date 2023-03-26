// primeiro hello world em uma rota feita com nodejs
//chamando a class express 
const express = require('express')
// instanciando a classe
const app = express()
//definindo porta
const port = 3000
//criando rota
app.get('/',(req,res)=>{
    res.send('Hello World')
})
//exibindo msg afirmando que o servidor esta conectado.
app.listen(port,()=>{
    console.log(`o servidor esta sendo executado em http:localhost:${port}`)
})