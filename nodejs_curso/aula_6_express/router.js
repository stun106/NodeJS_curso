const express = require('express');
const router = express.Router(); 
const homeController = require('./src/controllers/homecontroller') //responsavel pelo controller
const resposta = require('./src/controllers/homecontroller')



//rotas da home
router.get('/', homeController.paginaInicial)
router.post('/',resposta.resposta)


//exportando rotas para o servidor
module.exports = router



