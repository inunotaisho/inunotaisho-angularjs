const express = require('express'),
    cloudinary = require('cloudinary');
    
let router = express.Router(),
    Blog = require('../../models').Blog,
    User = require('../../models').User;

router.post('/file', (req, res) => {
    cloudinary.uploader.upload(fileUrl, options, 
    function(result) {
        console.log(result)
    });
});

module.exports = router;