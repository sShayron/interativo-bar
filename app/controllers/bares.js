var express = require('express'),
  router = express.Router(),
  models = require('../models');

module.exports = function (app) {
  app.use('/bares', router);
};

router.get('/', function (req, res, next) {
  models.Bares.findAll().then(function (bares) {
    res.status(201).json(bares);
  });
});


//TESTE => curl -v -X POST http://localhost:3000/bares -d '{"bar_ds_nome": "BAR DO BRACIN", "bar_ds_descricao": "BOOTEQUIN DO BRACIN ESCROTAO", "bar_ds_site": "www.bracinboteco.ok" }' -H "Content-Type: application/json"router.post('/', function (req, res, next) {
router.post('/', function (req, res, next) {
  models.Bares.create(req.body)
  .then(function(bares) {
    res.status(201).json(bares);
  })
  .catch(function(error){
    res.status(412).json(error);
  });
});

//TEST: curl -v -X PUT -H 'Content-Type:application/json' -d '{"bar_ds_descricao": "BOTECAO LIXAO" }' http://localhost:3000/bares/1
router.put('/:id', function(req, res, next) {
    models.Bares.update(req.body, {
    where: {
      bar_cd_bar: req.params.id
      }
    })
    .then(function(bares) {
      res.json(bares);
    })
    .catch(function(error) {
      res.status(412).json(error);
    });
  });
