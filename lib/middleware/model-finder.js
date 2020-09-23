'use strict';

const products = require('../models/products/products-collection.js');
const categories = require('../models/categories/categories-collection.js');
const todo = require('../models/todo/todo-collection.js');


function getModel(req, res, next) {
  let model = req.params.model; 
  // this will be categories or products
  
  // middleware lets us put data on the request object
  switch (model) {
  case 'products':
    req.model = products;
    next();
    return;
  case 'categories':
    req.model = categories;
    next();
    return;
  case 'todo':
    req.model = todo;
    next();
    return;
  default:
    next('Invalid Model');
    return;
  }
}


module.exports = getModel;