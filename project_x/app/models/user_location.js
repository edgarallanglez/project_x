//User Location

module.exports = function (sequelize, DataTypes){
  var UserLocation = sequelize.define('UserLocation', {
      user_id: DataTypes.INTEGER,
      latitude: DataTypes.DECIMAL,
      longitude: DataTypes.DECIMAL
  }, {
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models){
        UserLocation.belongsTo(models.User, { foreignKey: 'user_id', otherKey: 'id' });
      }
    }
  });
  return UserLocation;
};