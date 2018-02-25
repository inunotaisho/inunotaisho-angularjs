'use strict'
require('dotenv').config({ silent: true})
let express = require('express'),
    router = express.Router(),
    nodeMailer = require('nodemailer'),
    mg = require('nodemailer-mailgun-transport'),
    ejs = require('ejs');

// create reusable transporter object using the default SMTP transport
router.post('/', (req, res, next) => {

        let firstName = req.body.firstName,
            lastName = req.body.lastName,
            contactEmail = req.body.email;
    
    let auth = {
        auth:{
            api_key: process.env.api_key,
            domain: process.env.domain
        }
    }

    const mailer = nodeMailer.createTransport(mg(auth));

    let mailOptions = {
        from: firstName + ' ' + lastName + ' ' + contactEmail,
        to: process.env.myEmail,
        subject: req.body.subject,
        html: req.body.message
    };

    mailer.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('maybe err', error.mailOptions, '================', error);
            return;
        } else {
            console.log('Message %s sent: %s', info.messageId, info.response);
            console.log('reeeee', req.statusCode, 'vmnxvncvmnv', res.statusCode);
            res.send('<div class="alert alert--success row"><h4 class="col-xs-offset-5 col-xs-4 col-sm-offset-5 col-sm-4 col-md-offset-5 col-md-4" >Message sent!</h4></div>')
            mailer.close();
        };
    });
});

module.exports = router;