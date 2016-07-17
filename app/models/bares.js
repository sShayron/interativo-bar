module.exports = function (sequelize, DataTypes) {

  var Sequelize = sequelize.Sequelize;

  var Bares = sequelize.define('Bares', {
    bar_cd_bar: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    bar_ds_nome: {
      allowNull: false,
      type: Sequelize.STRING
    },
    bar_ds_descricao: {
      allowNull: false,
      type: Sequelize.STRING
    },
    bar_ds_site: {
      allowNull: true,
      type: Sequelize.STRING
    },
    bar_vl_longitude: {
      allowNull: true,
      type: Sequelize.DOUBLE
    },
    bar_vl_latitude: {
      allowNull: true,
      type: Sequelize.DOUBLE
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function (models) {
      }
    }
  });

  return Bares;
};
