'use strict';

// this file will serve as server module and will contain all of the logic for the server


const express = require('express');
// const router = express.Router();
require('dotenv').config();
const app = express();

// custom middlewares
const getTime = require('./middleware/timestamp.js');
const logger = require('./middleware/logger.js');
const error404 = require('./middleware/404.js');
const error500 = require('./middleware/500.js');


// custom route routers
const productsRouter = require('./routes/products.js');
const categoriesRouter = require('./routes/categories.js');
const apiRouter = require('./routes/v1.js');

// route param router, see app.use below
// const paramsRouter = require('../routes/params.js');



// ====================== GLOBAL MIDDLEWARE =========================

//step in front of ALL requests, inspect it for body, parse as needed and include it on the request. turns fragmented body into a json format
app.use(express.json());
// app.use(router); //router needs body to be parsed so we should have it after express.json
app.use(getTime);
app.use(logger);



// ============================= ROUTERS =============================


// WANT TO CHANGE TO THIS
app.use('/api/v1/', apiRouter);


app.use('/api/v1/', productsRouter);
app.use('/api/v1/', categoriesRouter);


// app.use(paramsRouter);



// ============================= ERRORS ==============================


// 404 tied to any route it hits at the end if the other routes didnt work
app.use('*', error404);
// this is hit if there are no routes to hit and all else fails
app.use(error500);



module.exports = {
  server: app,
  start: port => {
    let PORT = port ||  3001;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
