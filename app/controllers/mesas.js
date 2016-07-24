var express = require('express'),
  router = express.Router(),
  models = require('../models');

module.exports = function (app) {
  app.use('/mesas', router);
};


router.get('/', function (req, res, next) {
  models.Mesas.findAll().then(function (mesas) {
    res.status(200).json(mesas);
  });
});

router.get('/:id', function (req, res, next) {
  models.Mesas.findById(req.params.id).then(function (messa) {
    if(!mesa){
      res.status(404).json("Nenhuma mesa encontrada!");
      return;
    }
    res.status(200).json(mesa);
  });
});

//TESTE => curl -v -X POST http://localhost:3000/mesas -d '{"mes_cd_bar": "1", "mes_ds_referencia": "09872", "mes_ds_comentario": "Esta mesa e muito loca memo maluco ce e loco" }' -H "Content-Type: application/json"
router.post('/', function (req, res, next) {
  models.Mesas.create(req.body).then(function(mesa) {
    res.status(201).json(mesa);
  })
  .catch(function(error){
    res.status(500).json(error);
  });
});
