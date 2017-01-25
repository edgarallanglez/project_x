// Message
module.exports = function (sequelize, DataTypes){
  var Message = sequelize.define('Message', {
      from: DataTypes.INTEGER,
      to: DataTypes.INTEGER,
      sent_date: DataTypes.DATE,
      delivered_date: DataTypes.DATE,
      read_date: DataTypes.DATE,
      text: DataTypes.STRING,
      type: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models){
        //
      }
    }
  });
  
  return Message;

};