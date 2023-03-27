const express = require('express');
const router = express.Router(); 
const homeController = require('../controllers/homecontroller') //responsavel pelo controller
const contatoConcontroller = require('../controllers/contatoController')
//rotas da home
router.get('/', homeController.paginaInicial)
router.post("/", homeController.resposta);

//rotas de contato
router.get('/contato', contatoConcontroller.pngInicial)

//exportando rotas para o servidor
module.exports = router