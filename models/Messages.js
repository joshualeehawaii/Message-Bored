/*jshint esversion: 6 */
module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define("Messages", {
    body: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
    }
  }
});

  return Messages;
};