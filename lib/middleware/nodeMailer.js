'use strict'
const nodeMailer = require('nodemailer'),
             hbs = require('nodemailer-express-handlebars');
let User = require('../../models').User,
    Contact = require('../../models').Contact,
    mhbs = require('../../template/message.hbs');

// create reusable transporter object using the default SMTP transport
let serviceName='';
if( User.email){
    serviceName =  User.email.split("@")[1].split(".")[0];
}
console.log(serviceName);
let mailer = nodeMailer.createTransport({
    service: serviceName,
    auth: {
        user: User.email,
        password: User.emailPassword
    }
});

let mailOptions = {
    from: Contact.email,
    to: User.email,
    subject: Contact.subject,
    html: mhbs
};

mailer.sendMail(mailOptions, (error, info) => {
    if(error){
        console.log(error.mailOptions);
        return;
    } else {
        console.log('Message %s sent: %s', info.messageId, info.response);
        mailer.close();
    };
});

module.exports=mailer
;