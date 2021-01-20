var express = require('express');
var router = express.Router();
var Batismo = require('../controllers/controller')

/* GET home page. */
router.get('/batismos', function(req, res, next) {
   if(req.query.year){
    Batismo.listaBatismosAno(req.query.year)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  } else {
    Batismo.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }
});

router.get('/batismos/:id', function(req, res, next) {
    Batismo.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/batismos/batisado', function(req, res, next) {
    Batismo.listaBatisados()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/batismos/projenitores', function(req, res, next) {
    Batismo.listaBatismosProgenitores()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/batismos/stats', function(req, res, next) {
    Batismo.listaStats()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
