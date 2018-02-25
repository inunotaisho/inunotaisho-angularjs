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

    cluster.on('exit', worker => {
        console.log('Worker %d died', worker.id);
        cluster.fork();
    })

}else{
    app.set('port', process.env.PORT || 5000);

    models.sequelize.sync().then(() => {
        app.listen(app.get('port'), function() {
            console.log('server running', cluster.worker.id);
        });
    })
}
