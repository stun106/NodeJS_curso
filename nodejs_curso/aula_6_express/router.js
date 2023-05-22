const express = require('express');
const router = express.Router(); 
const homeController = require('./src/controllers/homecontroller') //responsavel pelo controller
const contatoConcontroller = require('./src/controllers/contatoController')



//rotas da home
router.get('/', homeController.paginaInicial)
router.post("/", homeController.resposta);

//rotas de contato
router.get('/contato', contatoConcontroller.pngInicial)

//exportando rotas para o servidor
module.exports = router



