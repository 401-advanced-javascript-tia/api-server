'use strict';

// index wants stuff from server
const server = require('./lib/server.js');

// bring in dotend to use .env file
require('dotenv').config();

// port var to use port in env file
const PORT = process.env.PORT;


// // index.js job is to be front door, and to start server. server itself will have all other stuff. so server needs something called start (method)
server.start(PORT);
