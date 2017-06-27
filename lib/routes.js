'use strict'


let express = require('express'),
    router = express.Router(),
    user = require('./routes/users'),
    //blog = require('./routes/blog'),
    contact = require('./routes/contact');
  


router.use('/users', user);
router.use('/contact', contact);

router.get("*",(req, res) => {
    res.render('index');
});

/*router.get("/:template", (req, res)=> {
    res.render(`${req.params.template}`);
})*/



module.exports = router;