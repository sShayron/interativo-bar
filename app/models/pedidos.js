module.exports = function (sequelize, DataTypes) {

  var Sequelize = sequelize.Sequelize;

  var Pedidos = sequelize.define('pedidos', {
    ped_cd_pedido: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    ped_cd_comanda: {
      allowNull: true,
      type: Sequelize.INTEGER
    }
  }, {
      timestamps: false,
      classMethods: {
        associate: function (models) {

          Pedidos.belongsTo(models.Comandas, {
            foreignKey: 'ped_cd_comanda',
            allowNull: false
          })
        }
      }
  });

  return Pedidos;
}
