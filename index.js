'use strict';

// adding persistence with mongo/mongoose
const mongoose = require('mongoose');

// index wants stuff from server
const server = require('./lib/server.js');

// bring in dotend to use .env file
require('dotenv').config();

// port var to use port in env file
const PORT = process.env.PORT;
// ditto to user mongoose uri in env file
const MONGOOSE = process.env.MONGODB_URI;

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(MONGOOSE, mongooseOptions);

// // index.js job is to be front door, and to start server. server itself will have all other stuff. so server needs something called start (method)
server.start(PORT);
