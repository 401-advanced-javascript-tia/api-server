// const express = require('express');
// require('dotenv').config();

// const app = express();
// const fruitRouter = require('./routes.js'); 

// // ------------------------------------------------------------
// // Global Middleware
// app.use(express.json()); //step in front of ALL requests, inspect it for body, parse as needed and include it on the request. turns fragmented body into a json format

// app.use(fruitRouter); //fruitRouter needs body to be parsed so we should have it after express.json

// // ------------------------------------------------------------








// module.exports = {
//   start: port => {
//     const PORT = port || process.env.PORT || 3002;
//     app.listen(PORT, () => console.log(`Listening on ${PORT}`));
//   },
// };
