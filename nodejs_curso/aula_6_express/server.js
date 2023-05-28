require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');

//importando o gerenciador mongodb
const mongoose = require('mongoose');

const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware');

//criando connexão + emitindo atravez de uma promisse quando a conexão estará pronta
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => {
        app.emit("pronto")
    })
    .catch( e => console.log(e))

const session = require("express-session");
const flash = require("connect-flash")
const MongoStore = require('connect-mongo');

// rotas
const routes = require("./router");


//usando metodos e modulos importados. 
app.use(express.urlencoded({extended:true}));

//conteudo statico
app.use(express.static(path.resolve(__dirname,'public')));

const sessionOptions = session({
    secret: "dawd#das*dcd*ccsddc#ddw125",
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash())
//pegando caminho absoluto para pasta views 
app.set("views",path.resolve(__dirname,'src','views'));

//usando a engine ejs
app.set('view engine', 'ejs');
app.use(middlewareGlobal);
app.use(outroMiddleware)
app.use(routes);

//conectando no servidor quando a conexão estiver pronta
app.on('pronto', () => {
    //definindo porta
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log("servidor executando na porta 3000");
    });
})
