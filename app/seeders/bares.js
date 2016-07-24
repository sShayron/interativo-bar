'use strict';

var Bares = require('./data/bares.json');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bares', Bares, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Bares', null, {});
  }
};
