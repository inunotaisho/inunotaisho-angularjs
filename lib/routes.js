'use strict'


let express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    path = require('path'),
    user = require('./routes/users'),
    blog = require('./routes/blog'),
    contact = require('./routes/contact');
  


router.use('/users', user);
router.use('/contact', contact);

router.get("/pdf",(req, res) => {
    var file = fs.createReadStream(__dirname + '/assets/resumetemplate.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=name.pdf');
    file.pipe(res);
});

router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + './../src/index.html'));
})



module.exports = router;