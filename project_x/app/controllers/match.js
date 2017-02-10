var express = require('express'),
  router = express.Router(),
  db = require('../models'),
  graph = require('fbgraph');

var app = express();

module.exports = function (app) {
  app.use('/match', router);
};

router.get('/', function (req, res, next) {
  graph.setAccessToken(req.query.access);

  var params = { fields: "uid" };
  graph.get("/me/friends", params,function(err, fb_res) {
    res.json({response: fb_res.data})
  });
	//res.json({ msgId: req.query.access })
  /*db.User.findAll().then(function (user) {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: user
    });
  });*/

});