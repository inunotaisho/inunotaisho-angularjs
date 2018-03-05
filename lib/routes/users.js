let express = require('express'),
  router = express.Router(),
  User = require('../../models').User;


router.post('/register', function (req, res) {
  if (req.body.password !== req.body.password_confirm) {
    res.status(400).json({ message: 'Passwords must match' });
  } else {
    User.findOne({ username: req.body.username })
      .then(function (existingUser) {
        if (existingUser) {
          res.status(400).json({ message: 'User already exists' });
        } else {
          User.create(req.body).then(function (user) {
            req.session.user_id = user._id;
            req.session.save(function () {
              res.status(200).json({ message: 'registration succesful' });
            });
          });
        }
      });
  }
});

router.get('/admin', (req, res) => {
  console.log('isnddddd')
  User.find({ email: ['ebfairweather@gmail.com', 'zack1209@icloud.com'] })
    .then(users => res.send(users))
    .catch(err => res.send(err));
})

router.post('/login', function (req, res) {
  console.log('Register');
  User.findOne({ username: req.body.username })
    .then(function (user) {
      console.log('after then', user)


          console.log('now jsonnnnn')
          if (!user) {
            return res.status(401).json({ error: 'User does not exist' });
          }

          user.comparePassword(req.body.password, (err, isMatch) => {
            console.log('aaaaaa', isMatch, err);
            if (err) {
              return res.status(401).json({ error: 'Password incorrect' });
            } else {
              req.user_id = user.id;
              req.session.save(function () {
                res.json({ success: true });
              });
            }
          })




    });
});

router.get('/logout', function (req, res) {
  req.session.destroy(function () {
    res.status(200).json({ message: 'logout successful' });
  });
});

module.exports = router;