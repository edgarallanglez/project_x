var express = require('express'),
  router = express.Router(),
  db = require('../models');

var app = express();

module.exports = function (app) {
  app.use('/match', router);
};

router.post('/', function (req, res, next) {
	res.json({ msgId: "Hola" })
  /*db.User.findAll().then(function (user) {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: user
    });
  });*/

});