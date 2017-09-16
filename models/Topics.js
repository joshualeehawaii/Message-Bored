/*jshint esversion: 6 */
module.exports = function(sequelize, DataTypes) {
  var Topics = sequelize.define("Topics", {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
    }
  }
});

  return Topics;
};