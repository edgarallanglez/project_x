//User Connection

module.exports = function (sequelize, DataTypes){
  var UserConnection = sequelize.define('UserConnection', {
      user_one_id: DataTypes.INTEGER,
      user_two_id: DataTypes.INTEGER,
      start_date: DataTypes.DATE,
      status: DataTypes.STRING,
      user_one_revelation: DataTypes.BOOLEAN,
      user_two_revelation: DataTypes.BOOLEAN
  }, {
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models){
        UserConnection.belongsTo(models.User, { foreignKey: 'user_one_id', otherKey: 'id' });
        UserConnection.belongsTo(models.User, { foreignKey: 'user_two_id', otherKey: 'id' });
      }
    }
  });
  return UserConnection;
};