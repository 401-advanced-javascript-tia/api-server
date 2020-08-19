'use strict';

// this file will serve as server module and will contain all of the logic for the server


const express = require('express');
// const router = express.Router();
require('dotenv').config();
const app = express();

const getTime = require('./middleware/timestamp.js');
const logger = require('./middleware/logger.js');
const error404 = require('./middleware/404.js');
const error500 = require('./middleware/500.js');



// ----------------------------------- GLOBAL MIDDLEWARE -------------------------

//step in front of ALL requests, inspect it for body, parse as needed and include it on the request. turns fragmented body into a json format
app.use(express.json());
// app.use(router); //router needs body to be parsed so we should have it after express.json
app.use(getTime);
app.use(logger);



// ------------------------------------------------------------


app.get('/test', (req, res) => {
  console.log('test for logger that includes time stamp');
});


// ---------- COUPLE EX FROM DEMO TO REVIEW
// router.get('/stuff', stuffFunction);


// function stuffFunction(req, res) {
//   let output = {
//     type: req.query.type || 'unknown',
//   };
//   res.status(200).json(output);
// }

// router.get('stuff/:type', (req,res) => {
//   let output = {
//     type: req.params.type,
//   };
//   res.status(200).json(output);
// });





// 404 tied to any route it hits at the end if the other routes didnt work
app.use('*', error404);
// this is hit if there are no routes to hit and all else fails
app.use(error500);







module.exports = {
  start: port => {
    const PORT = port ||  3001;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
