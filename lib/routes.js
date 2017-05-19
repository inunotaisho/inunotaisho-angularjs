'use strict'


let express = require('express'),
    router = express.Router(),
    user = require('./routes/users');


router.use('/users', user);

router.get("*",(req, res) => {
    res.render('index');
});

/*router.get("/:template", (req, res)=> {
    res.render(`${req.params.template}`);
})*/



module.exports = router;