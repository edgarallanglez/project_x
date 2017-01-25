
var express = require('express'),
    config = require('./config/config'),
    db = require('./app/models');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(){ /* … */ });
server.listen(3000);

module.exports = require('./config/express')(app, config);

db.sequelize
  .sync()
  .then(function () {
    if (!module.parent) {
      app.listen(config.port, function () {
        console.log('Express server listening on port ' + config.port);
      });
    }
  }).catch(function (e) {
    throw new Error(e);
  });
