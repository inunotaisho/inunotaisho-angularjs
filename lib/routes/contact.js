let express = require('express'),
router = express.Router(),
mailer = require('../middleware/nodeMailer'),
Contact = require('../../models').Contact;

router.get('/getUser', (req, res, next) =>{

});
router.post('/addUser', (req, res, next) => {
    console.log(req.body.user);
    Conatct=(req.body.user);

    mailer.sendMail()
});

module.exports = router;