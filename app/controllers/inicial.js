var express = require('express'),
  router = express.Router(),
  models = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  models.Inicial.findAll().then(function (barinterativo) {
    res.status(200).json([]);
    // res.render('index', {
    //     title: 'Bar interativo Server',
    //   barinterativo: barinterativo
    // });
  });
});
