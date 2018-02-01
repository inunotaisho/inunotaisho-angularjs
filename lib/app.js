'use strict'
let os = require('os'),
    cluster = require('cluster'),
    app = require('./server'),
    models = require('../models');

if(cluster.isMaster){

    // Count the machine's CPUs
    let cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (let i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

}else{
    app.set('port', process.env.PORT || 5000);

        app.listen(app.get('port'), function() {
            console.log('server running', cluster.worker.id);
        });
}
