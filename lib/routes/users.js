let express = require('express'),
  router = express.Router(),
  User = require('../../models').User;


router.post('/register', function (req, res) {
  if (req.body.Password !== req.body.Password_confirm) {
    res.status(400).json({ message: 'Passwords must match' });
  } else {
    User.findOne({ Username: req.body.Username })
      .then(function (existingUser) {
        if (existingUser) {
          res.status(400).json({ message: 'User already exists' });
        } else {
          const user = new User(req.body)
          console.log(user);
          user.setPassword(req.body.Password)
          user.save().then(function (newUser) {
            console.log('session', req.session)
            res.status(200).json({ message: 'registration succesful' });
          });
        }
      });
  }
});

router.post('/login', function (req, res) {
  console.log('Register');
  User.findOne({ Username: req.body.Username })
    .then(function (user) {
      console.log('after then', user)


          console.log('now jsonnnnn')
          if (!user) {
            return res.status(401).json({ error: 'User does not exist' });
          }

          if (!user.comparePassword(req.body.Password)) {
            return res.status(401).json({ error: 'Password incorrect' });
          }
          else{
            res.json({ success: true });
          }
    });
});

router.get('/logout', function (req, res) {
  req.session.destroy(function () {
    res.status(200).json({ message: 'logout successful' });
  });
});

module.exports = router;