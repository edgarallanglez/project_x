//User Image

module.exports = function (sequelize, DataTypes){
  var UserImage = sequelize.define('UserImage', {
      user_id: DataTypes.INTEGER,
      image: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models){
        UserImage.belongsTo(models.User, { foreignKey: 'user_id', otherKey: 'id' });
      }
    }
  });
  return UserImage;
};