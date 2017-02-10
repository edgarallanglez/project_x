//User UserFeatures

module.exports = function (sequelize, DataTypes){
  var UserFeatures = sequelize.define('UserFeatures', {
      user_id: DataTypes.INTEGER,
      reveal_after: DataTypes.BOOLEAN,
      double_chats: DataTypes.BOOLEAN
  }, {
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models){
        UserFeatures.belongsTo(models.User, { foreignKey: 'user_id', otherKey: 'id' });
      }
    }
  });
  return UserFeatures;
};
