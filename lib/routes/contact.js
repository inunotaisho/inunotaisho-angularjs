'use strict'
require('dotenv').config({ silent: true })
let express = require('express'),
    router = express.Router(),
    bcrypt = require('bcrypt'),
    nodemailer = require('nodemailer'),
    User = require('../../models').User,
    ejs = require('ejs');

// create reusable transporter object using the default SMTP transport
router.post('/', (req, res, next) => {


console.log('at the backendddd', req.body)


    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.FROM_EMAIL,
            pass: process.env.PASS,
        },
    });

    const mailOptions = {
        from: process.env.FROM_EMAIL, // sender address
        to: process.env.TO_EMAIL, // list of receivers
        subject: req.body.subject, // Subject line
        html: `<h3>Name:</h3> ${req.body.firstName} ${req.body.lastName}` +
            `<h3>Email:</h3> ${req.body.email}` +
            `<h3>Message:</h3> ${req.body.message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error)
            return res.send({ error });

        res.send({ success: info.messageId });
    });



    // //const myConfig = new AWS.Config

    // AWS.config.update({
    //     accessKeyId: process.env.ACCESS_KEY,
    //     secretAccessKey: process.env.SECRET_KEY,
    //     region: process.env.REGION
    // });

    // const ses = new AWS.SES({ apiVersion: '2010-12-01' });

    // const to = process.env.TO_EMAIL;
    // const from = process.env.FROM_EMAIL;

    // console.log('req shits', req.body);
    // const { firstName, lastName, email, subject, message } = req.body;

    // console.log('all env shits', typeof process.env.TO_EMAIL);

    // let params = {

    // }
    // var CRLF = '\r\n';

    // ses.sendRawEmail({
    //     Source: from,
    //     Destinations: to.split(" "),
    //     RawMessage: [
    //         'From: "Someone" <someone@example.com>',
    //         'To: "Someone Else" <other@example.com>',
    //         'Subject: greetings',
    //         'Content-Type: multipart/mixed;',
    //         '    boundary="_003_97DCB304C5294779BEBCFC8357FCC4D2"',
    //         'MIME-Version: 1.0',
    //         '',
    //         '--_003_97DCB304C5294779BEBCFC8357FCC4D2',
    //         'Content-Type: text/plain; charset="us-ascii"',
    //         'Content-Transfer-Encoding: quoted-printable',
    //         'Hi brozeph,',
    //         '',
    //         'I have attached a code file for you.',
    //         '',
    //         'Cheers.',
    //         '',
    //         '--_003_97DCB304C5294779BEBCFC8357FCC4D2',
    //         'Content-Type: text/plain; name="code.txt"',
    //         'Content-Description: code.txt',
    //         'Content-Disposition: attachment; filename="code.txt"; size=4;',
    //         '    creation-date="Mon, 03 Aug 2015 11:39:39 GMT";',
    //         '    modification-date="Mon, 03 Aug 2015 11:39:39 GMT"',
    //         'Content-Transfer-Encoding: base64',
    //         '',
    //         'ZWNobyBoZWxsbyB3b3JsZAo=',
    //         '',
    //         '--_003_97DCB304C5294779BEBCFC8357FCC4D2',
    //         ''
    //       ].join(CRLF)
    // }, (err, data) => {
    //     if (err) {
    //         res.send(err)
    //     }
    //     res.send(data);
    // });
});

module.exports = router;