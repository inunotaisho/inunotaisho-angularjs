'use strict'
const nodeMailer = require('nodemailer');
let User = require('../../models').User;
    Contact = require('../../models').Contact;

// create reusable transporter object using the default SMTP transport
let transporter = nodeMailer.createTtansport({
    service: {
        
    },
    auth: {
        user:'{{User.email}}',
        password:'{{User.emailPassword}}'
    }
});

let mailOptions = {
    from: '{{Contact.email}}',
    to: '{{User.email}}',
    subject: '{{Contact.subject}}',
    html: ''
};

transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        console.log(error.mailOptions);
        return;
    } else {
        console.log('Message %s sent: %s', info.messageId, info.response);
        transporter.close();
    };
});
