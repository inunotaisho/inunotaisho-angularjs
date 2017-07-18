'use strict'
let express = require('express'),
    router = express.Router();
const nodeMailer = require('nodemailer'),
    ejs = require('ejs');

// create reusable transporter object using the default SMTP transport
router.post('/', (req, res, next) => {
    console.log('req shits', req.body)
    let mailer = nodeMailer.createTransport({
        service: {
            service: '',
            port: 465,
            secure: false
        },
        service: "",
        auth: {
            user: '',
            password: ''
        }
    });


//   smtpTrans = nodemailer.createTransport('SMTP', {
//       service: 'Gmail',
//       auth: {
//           user: "me@gmail.com",
//           pass: "application-specific-password" 
//       }
//   });＀


    let mailOptions = {
        from: req.body.firstName + ' ' + req.body.lastName + ' ' + req.body.email,
        to: '',
        subject: req.body.subject,
        html: req.body.message
    };

    mailer.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('maybe err', error.mailOptions, '================', error);
            return;
        } else {
            console.log('Message %s sent: %s', info.messageId, info.response);
            mailer.close();
        };
    });

});

module.exports = router;