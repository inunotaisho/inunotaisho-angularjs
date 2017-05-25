    let app = require('./server');
        https = require('https'),
        fs = require('fs');

    let options = {
      ca: [fs.readFileSync('#########')],
      cert: fs.readFileSync('##############'),
      key: fs.readFileSync('###########')
    }

var server = https.createServer(options, app);

    
module.exports = server;