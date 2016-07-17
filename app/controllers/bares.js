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

router.get('/:id', function (req, res, next) {
  models.Bares.findById(req.params.id).then(function (bares) {
    if(!bares){
      res.status(404).json("Nenhum bar encontrado!");
      return;
    }
    res.status(201).json(bares);
  });
});

//TESTE => curl -v -X POST http://localhost:3000/bares -d '{"bar_ds_nome": "BAR DO BRACIN", "bar_ds_descricao": "BOOTEQUIN DO BRACIN ESCROTAO", "bar_ds_site": "www.bracinboteco.ok" }' -H "Content-Type: application/json"router.post('/', function (req, res, next) {
router.post('/', function (req, res, next) {
  models.Bares.create(req.body).then(function(bares) {
    res.status(201).json(bares);
  })
  .catch(function(error){
    res.status(500).json(error);
  });
});

//TEST: curl -v -X PUT -H 'Content-Type:application/json' -d '{"bar_ds_descricao": "BOTECAO LIXAO" }' http://localhost:3000/bares/1
router.put('/:id', function(req, res, next) {
    models.Bares.update({
    where: {
      bar_cd_bar: req.params.id
      }
    })
    .then(function(bares) {
      res.status(201).json(bares);
    })
    .catch(function(error) {
      res.status(500).json(error);
    });
  });

//TEST: curl -v -X DELETE -H 'Content-Type:application/json' -d '{"segredo": "1" }' http://localhost:3000/bares/1
router.delete('/:id', function(req, res, next) {

  models.Bares.findById(req.params.id).then(function (bares) {
    if(!bares){
      res.status(404).json("Nenhum bar encontrado!");
      console.log("MY EGSS");
      return;
    }
  });

   function autenticado(){
     return req.body.segredo == "1";
   }

  if(autenticado()){
    models.Bares.destroy({
      where: {
        bar_cd_bar: req.params.id
      }
    })
    .then(function(success) {
      res.status(201).json("Deletado com sucesso.");
    })
    .catch(function(error) {
      res.status(500).json(error);
    })
  }
  if(!autenticado()){
    res.status(401).json("Sem autorizacao para esta operacao.")
  }
});
