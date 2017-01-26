// User

module.exports = function (sequelize, DataTypes){
  var User = sequelize.define('User', {
      names: DataTypes.STRING,
      surnames: DataTypes.STRING,
      birth_date: DataTypes.DATEONLY,
      gender: DataTypes.STRING,
      available: DataTypes.BOOLEAN,
      facebook_id: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models){
        User.belongsToMany(models.UserImage, { through: 'image_user', foreignKey: 'id', otherKey: 'user_id' });
        User.belongsToMany(models.UserLocation, { through: 'location_user', foreignKey: 'id', otherKey: 'user_id' });
        User.belongsToMany(models.UserFeatures, { through: 'features_user', foreignKey: 'id', otherKey: 'user_id' });
        User.belongsToMany(models.UserConnection, { through: 'connection_user_one', foreignKey: 'id', otherKey: 'user_one_id' });
        User.belongsToMany(models.UserConnection, { through: 'connection_user_two', foreignKey: 'id', otherKey: 'user_two_id' });

      }
    }
  });

  return User;

};

