var express = require('express'),
  router = express.Router(),
  db = require('../models');

var app = express();

module.exports = function (app) {
  app.use('/', router);
};

/*
 |--------------------------------------------------------------------------
 | Generate JSON Web Token
 |--------------------------------------------------------------------------
 */

function createJWT(user) {
  var payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
}

/*
 |--------------------------------------------------------------------------
 | Decode JSON Web Token
 |--------------------------------------------------------------------------
 */

function ensureAuthenticated(req, res, next) {
  if (!req.header('Authorization')) {
    return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
  }
  var token = req.header('Authorization').split(' ')[0];
  var payload = null;
  try { payload = jwt.decode(token, config.TOKEN_SECRET); }
  catch (err) { return res.status(401).send({ message: err.message }); }

  if (payload.exp <= moment().unix()) {
     return res.status(401).send({ message: 'Token has expired' });
  }
  req.user_id = payload.sub;
  next();
}

/*
 |--------------------------------------------------------------------------
 | Log in
 |--------------------------------------------------------------------------
 */

router.post('/auth/login', function(req, res) {
  db.User.findOne({
    where: { facebook_key: req.body.facebook_key }
  }).then(function (user){
    if (!user) {
      db.User.create({
          facebook_key: req.body.facebook_key,
          email: req.body.email,
          names: req.body.names,
          surnames: req.body.surnames,
          user_image: req.body.user_image
        }).then(function (new_user){
          res.json({ token: createJWT(new_user),
                     user: new_user });
        });
    } else {
      res.json({ token: createJWT(user),
                 user: user });
    }
  });
});

router.get('/', function (req, res, next) {
  //var user_list = req.body.user_list
  //io.sockets.emit('chat', 'mensaje' ,{ for: 'everyone' });
  res.json({ msgId: "Hola" })
  /*db.User.findAll().then(function (user) {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: user
    });
  });*/

});

router.get('/web_chat', function (req, res, next) {
  io.sockets.emit('chat', 'mensaje' ,{ for: 'everyone' });

  db.User.findAll().then(function (user) {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: user
    });
  });

});
