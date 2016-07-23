var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bar-interativo-server'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://admin:passw0rd@localhost:32776/barinterativo'
    //db: 'postgres://admin:passw0rd@192.168.99.100:32776/barinterativo'
  },

  test: {
    root: rootPath,
    app: {
      name: 'bar-interativo-server'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/barinterativoservertest'
  },

  production: {
    root: rootPath,
    app: {
      name: 'bar-interativo-server'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://192.168.99.100/barinterativodb'
  }
};

module.exports = config[env];
