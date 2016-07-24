module.exports = function (sequelize, DataTypes) {

  var Sequelize = sequelize.Sequelize;

  var Comandas = sequelize.define('Comandas', {
    com_cd_comanda: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    com_cd_mesa: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    com_ds_observacao: {
      allowNull: true,
      type: Sequelize.STRING
    },
    com_tm_abertura: {
      allowNull: false,
      defaultValue: new Date(),
      type: Sequelize.TIME
    }
  }, {
      timestamps: false,
      classMethods: {
        associate: function (models) {

           Comandas.hasMany(models.Pedidos, {
            foreignKey: 'ped_cd_comanda',
             allowNull: false
           })

           Comandas.belongsTo(models.Mesas, {
             foreignKey: 'com_cd_mesa',
             allowNull: false
           })
        }
      }
  });

  return Comandas;
}
