const express = require('express')
const app = express()
// rotas
const routes = require("./router/router")
//usando metodos e modulos importados. 
app.use(express.urlencoded({extended:true}))
app.use(routes)



//definindo porta
app.listen(3000,() =>{
    console.log('Acessar http://localhost:3000')
    console.log("servidor executando na porta 3000")
});