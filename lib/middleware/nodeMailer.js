'use strict'
const nodeMailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodeMailer.createTtansport({
    service: 'gmail',
    auth: {
        user:'{{}}',
        password:'{{}}'
    }
});
