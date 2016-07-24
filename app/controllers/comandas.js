var express = require('express'),
  router = express.Router(),
  models = require('../models');

module.exports = function (app) {
  app.use('/comandas', router);
};

router.get('/', function (req, res, next) {
    models.Comandas.findAll().then(function (comandas) {
      res.status(200).json(comandas);
    });
});

router.get('/:mesa', function (req, res, next) {
    models
    .Comandas
    .findAll({
      where: req.params.mesa
    })
    .then(function (comandas) {
      res.status(200).json(comandas);
    });
});

router.get('/:id', function (req, res, next) {
  models.Comandas.findById(req.params.id).then(function (comanda) {
    if(!comanda){
      res.status(404).json("Nenhuma comanda encontrada!");
      return;
    }
    res.status(200).json(comanda);
  });
});

//TESTE => curl -v -X POST http://localhost:3000/comandas -d '{"com_cd_mesa": "1", "com_ds_observacao": "comanda de 5 pessoas", "com_tm_abertura": "20:00:00" }' -H "Content-Type: application/json"
router.post('/', function (req, res, next) {
  models.Comandas.create(req.body).then(function(comanda) {
    res.status(201).json(comanda);
  })
  .catch(function(error){
    res.status(500).json(error);
  });
});
