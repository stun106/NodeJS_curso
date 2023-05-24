const express = require('express');
const app = express();
const path = require('path');
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware');
// rotas
const routes = require("./router");
//usando metodos e modulos importados. 
app.use(express.urlencoded({extended:true}));
//conteudo statico
app.use(express.static(path.resolve(__dirname,'public')));

//pegando caminho absoluto para pasta views 
app.set("views",path.resolve(__dirname,'src','views'));
//usando a engine ejs
app.set('view engine', 'ejs');
app.use(middlewareGlobal);
app.use(outroMiddleware)
app.use(routes);




//definindo porta
app.listen(3000,() =>{
    console.log('Acessar http://localhost:3000');
    console.log("servidor executando na porta 3000");
});