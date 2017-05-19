# inunotaisho26

This is the fullstack version of my website which will become `www.ebseiten.com`.

Alough not complete, it still runs so long as you have `postegres` and `redis` running with sequelize files migrated

First clone this repo, then checkout the `server` branch. Before taking futher steps, make sure you have `nodejs` and `npm` installed. 

Once both steps are complete, run `npm install`. This will install all `node_modules` and `jspm_modules`. 

For those of you keeping score, `node_modules` holds backend modules and `jspm_packages` holds frontend modules. 
Those frontend modules are loaded using a module loader called `System.JS`. Not widely as used, but still effective enough for what we want.

Once npm has finished installing, make sure you have `postgres` and `redis-server` running. Go into the `config folder` and either copy the 
dev database or change database to your desired name. Either way, the databse must be setup using something like `PgAdmin`or something similar. 

Once connected and `sequelize` migration files loaded in the database, run `redis-server` in another terminal tab. 
Redis is your session server and is vitale to for applications that require you to login or logout. 

Once finished, then and only then, can you run `npm start`.

Navigate to `localhost:8080` and you should be there. 

**Documentation**
- http://docs.sequelizejs.com/
- https://www.postgresql.org/
- https://www.pgadmin.org/
- https://redis.io/
- https://expressjs.com/
- http://jspm.io/docs/getting-started.html
- https://code.angularjs.org/1.6.4/docs/guide
- http://lesscss.org/