// Example model


module.exports = function (sequelize, DataTypes) {

  var Inicial = sequelize.define('Inicial', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    text: DataTypes.STRING
  }, {
    timestamps: false,
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return Inicial;
};
