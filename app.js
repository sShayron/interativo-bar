

var express = require('express'),
  config = require('./config/config'),
  db = require('./app/models');

const port = process.env.PORT || 3000;

var app = express();

require('./config/express')(app, config);

db.sequelize
  .sync()
  .then(function () {
    app.listen(port, function () {
      console.log('Servidor escutando na porta: '+port);
    });
  }).catch(function (e) {
    throw new Error(e);
  });
