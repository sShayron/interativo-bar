module.exports = function (sequelize, DataTypes) {

  var Sequelize = sequelize.Sequelize;

  var Mesas = sequelize.define('mesas', {
    mes_cd_mesa: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    mes_cd_bar: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    mes_ds_referencia: {
      allowNull: true,
      type: Sequelize.STRING
    },
    mes_ds_comentario: {
      allowNull: true,
      type: Sequelize.STRING
    }
  }, {
      timestamps: false,
      classMethods: {
        associate: function (models) {

          Mesas.hasMany(models.Comandas, {
            foreignKey: 'com_cd_mesa',
            allowNull: false
          })

          Mesas.belongsTo(models.Bares, {
            foreignKey: 'mes_cd_bar',
            allowNull: false
          })
        }
      }
  });

  return Mesas;
}
