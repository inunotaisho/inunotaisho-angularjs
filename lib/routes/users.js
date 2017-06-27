let express = require('express'),
    router = express.Router(),
     User = require('../../models').User;


router.post('/register', function (req, res) {
  if (req.body.password !== req.body.password_confirm) {
    res.status(400).json({message: 'Passwords must match'});
  } else {
    User.findOne({ where: { username: req.body.username } })
      .then(function (existingUser) {
        if (existingUser) {
          res.status(400).json({message: 'User already exists'});
        } else {
          User.create(req.body).then(function (user) {
            req.session.user_id = user.id;
            req.session.save(function () {
              res.status(200).json({message: 'registration succesful'});
            });
          });
        }
      });
  }
});

router.post('/login', function (req, res) {
  console.log('Register');
  User.findOne({ where: { username: req.body.username } })
    .then(function (user) {
      res.format({
        html: function () {
          if (!user) {
            res.end('User not found');
          } else if (user.isValidPassword(req.body.password)) {
            req.session.user_id = user.id;
            req.session.save(function () {
              res.redirect('/');
              res.status(200).json({ message: 'login successful' });
            });
          } else {
            res.status(401).end('Password incorrect');
          }
        },
        json: function () {
          if (!user) {
            res.status(401).json({ error: 'User does not exist' });
          } else if (user.isValidPassword(req.body.password)) {
            req.session.user_id = user.id;
            req.session.save(function () {
              res.json({ success: true });
            });
          } else {
            res.status(401).json({ error: 'Password incorrect' });
          }
        }
      });
    });
});

router.get('/logout', function (req, res) {
  req.session.destroy(function () {
    res.redirect('/');
    res.status(200).json({message: 'logout successful'});
  });
});

module.exports = router;