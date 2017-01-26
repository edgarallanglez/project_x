var express = require('express'),
  router = express.Router(),
  db = require('../models');

var app = express();
var server = require('http').createServer(app);


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
 

