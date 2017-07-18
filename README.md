# inunotaisho26

This is the fullstack version of my website which will become www.ebseiten.com.

Alough not complete, it still runs so long as you have `postegres` and `redis` running with sequelize files migrated

First clone this repo. Before taking futher steps, make sure you have `nodejs` and `npm` installed. Then run `npm install` to install all required `node_modules`.

All modules a stored in `node_modules` and `webpack` is used as a module loader. The `webpack.config.env.js` is basic, but it does what we need. 

 Make sure you have `postgres` and `redis-server` running. Go into the `config folder` and either copy the 
dev database or change database to your desired name. Either way, the databse must be setup using something like `PgAdmin`or something similar. Command line control of `postgres` is also an option, but is not covered by this readme.

Once connected and `sequelize` migration files loaded in the database, run `redis-server` in another terminal tab. 
Redis is your session server and is vitale to for applications that require you to login or logout. 

Once finished, then and only then, can you run `npm start`.

Navigate to `localhost:8080` and you should be there. 

**Documentation**
- http://docs.sequelizejs.com/
- https://www.postgresql.org/
- https://redis.io/
- https://expressjs.com/
- https://webpack.js.org/configuration/
- https://code.angularjs.org/1.6.4/docs/guide
- http://lesscss.org/

**Supportting Software Documentation**
- https://www.pgadmin.org/