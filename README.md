# InuNoTaisho: AngularJS

This is the AngularJS fullstack version of my website, [ngjs.ebseiten.com](https://ngjs.ebseiten.com/#!/).

Its about 92% of the way complete. It runs so long as you have `mongodb` and `redis` running. This stack was originally a SEAN stack, but has changed to MEAN staclk configuration.

First clone this repo. Before taking futher steps, make sure you have `nodejs` and `npm` installed. Then run `npm install` to install all required `node_modules`.

All modules are stored in `node_modules` and `webpack` is used as a module loader. The `webpack.config.env.js` is basic, but it does what we need.

 Make sure you have `mongodb` and `redis-server` installed. Open another terminal tab and create the desired name for your database using **Mongo Shell**. Run the command `mongo` to open the shell and run the `use "DATABASE_NAME"` to create your desired database. 

Run `redis-server` in another terminal tab. Redis is your session server and is vitale for applications that require you to login or logout.  

Once finished, then and only then, can you run `npm start`.

Navigate to `localhost:8080` and you should be there. 

**Documentation**
- http://mongoosejs.com/docs/guide.html
- https://docs.mongodb.com/manual/
- https://redis.io/
- https://expressjs.com/
- https://webpack.js.org/configuration/
- https://code.angularjs.org/1.6.5/docs/guide
- http://lesscss.org/
