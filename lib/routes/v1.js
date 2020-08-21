// 'use strict';

// // I THINK WE'LL END UP PUTTING ALL ROUTES IN HERE 

// const express = require('express');
// const router = express.Router();

// const products = require('../models/products/products-collection.js');
// const categories = require('../models/categories/categories-collection.js');


// function getModel(req, res, next) {
//   let model = req.params.model; // This will be food, books, whatever is after /api/v1
  
//   // How can we get the right model into those functions?
//   // Well,l middleware is really good at letting us put data on the request object
//   // Lets do that and then get get ourselves back into the route handler
//   switch (model) {
//   case 'products':
//     req.model = products;
//     next();
//     return;
//   case 'categories':
//     req.model = categories;
//     next();
//     return;
//   default:
//     next('Invalid Model');
//     return;
//   }
// }
      
// //"hey! every routes listen up! if you run into any route using :model, notice it and run this function"      
// router.param('model', getModel);


// // ROUTE HANDLERS

// functon handle GetAll(req,res,next) {

//   // req.model is an instance of a subclass: products model
//   // when you call .get on it its going to be fetching it from different collections 
//   req.model.get()
//     .then(results => {
//       let count = results.length;
//       res.json({count, results});
//       //.json is a convenience method that sends json (instead of seeing it like res.send)
//     })
//     .catch(next);
//     // this catch says that if that then block fails, we're going to send the failure as the next and it will trigger an error handler 

// }






