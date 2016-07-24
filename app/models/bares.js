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
    bar_tm_abertura: {
      allowNull: true,
      type: Sequelize.TIME
    },
    bar_tm_fechamento: {
      allowNull: true,
      type: Sequelize.TIME
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
    },
    bar_ds_cidade:{
      allowNull: true,
      type: Sequelize.STRING
    },
    bar_ds_complemento: {
      allowNull: true,
      type: Sequelize.STRING
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function (models) {
         Bares.hasMany(models.Mesas, {
           foreignKey: 'mes_cd_bar',
           allowNull: false
         })
      }
    }
  });

  return Bares;
};
