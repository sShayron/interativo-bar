var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bar-interativo-server'
    },
     port:"32776",
     username: "admin",
     password: "passw0rd",
     database: "barinterativo",
     dialect: "postgres",
     host: "192.168.99.100",
     db: 'postgres://admin:passw0rd@192.168.99.100:32776/barinterativo'
    //db: 'postgres://admin:passw0rd@localhost:32776/barinterativo'
  },

  test: {
    root: rootPath,
    app: {
      name: 'bar-interativo-server'
    },
    port:"32776",
    db: 'postgres://admin:passw0rd@192.168.99.100:32776/barinterativotest'
  },

  production: {
    root: rootPath,
    app: {
      name: 'bar-interativo-server'
    },
    port:"32776",
    db: 'postgres://admin:passw0rd@192.168.99.100:32776/barinterativodb'
  }
};

module.exports = config[env];
