var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  db.User.findAll().then(function (user) {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: user
    });
  });
});
