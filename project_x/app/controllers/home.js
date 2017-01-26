var express = require('express'),
  router = express.Router(),
  db = require('../models');

var app = express();
var server = require('http').createServer(app);
io = require('socket.io')(server);
io.on('connection', function(socket) {
  socket.on('chat', function(msg) {
    io.emit('chat', msg);
  });
});

server.listen(4200);
module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  /*io.sockets.emit('chat', 'mensaje' ,{ for: 'everyone' });*/

  db.User.findAll().then(function (user) {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: user
    });
  });

});
