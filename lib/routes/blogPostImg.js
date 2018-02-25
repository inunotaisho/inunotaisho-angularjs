const express = require('express'),
    cloudinary = require('cloudinary'),
    router = express.Router();
let Blog = require('../../models').Blog,
    User = require('../../models').User;

router.post('/image', (req, res) => {
    cloudinary.uploader.upload(imgUrl, options,
        function(result) { 
        console.log(result) 
        });
});

module.exports = router;