'use strict'
const nodeMailer = require('nodemailer'),
             ejs = require('ejs');
let User = require('../../models').User,
    Contact = require('../../models').Contact;
    

// create reusable transporter object using the default SMTP transport

let serviceName = function (emailService){

   let serVice = '';
   for(let i = 0; i < emailService.length; i++){
       if(User.email){

       }
   }

}
let mailer = nodeMailer.createTransport({
    service: app,
    host: app,
    secure: app,
    auth: {
        user: User.email,
        password: User.emailPassword
    }
});

let mailOptions = {
    from: Contact.email,
    to: User.email,
    subject: Contact.subject,
    html: ejs.renderFile(__dirname + '')
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

module.exports=mailer;

