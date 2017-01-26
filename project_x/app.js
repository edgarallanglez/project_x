
var express = require('express'),
    config = require('./config/config'),
    db = require('./app/models');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(socket) {
  socket.on('chat', function(msg) {
    io.emit('chat', msg);
  });
});
//
// server.listen(4200);

module.exports = require('./config/express')(app, config);

db.sequelize
  .sync()
  .then(function () {
    if (!module.parent) {
      server.listen(config.port, '0.0.0.0', function () {
        console.log('Express server listening on port ' + config.port);
      });
    }
  }).catch(function (e) {
    throw new Error(e);
  });
