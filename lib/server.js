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
let productData = require('../data/db.json');
const categoryData = require('../data/db.json');
// const productRoutes = require('');
// const categoryRoutes = require('');



// ====================== GLOBAL MIDDLEWARE =========================

//step in front of ALL requests, inspect it for body, parse as needed and include it on the request. turns fragmented body into a json format
app.use(express.json());
// app.use(router); //router needs body to be parsed so we should have it after express.json
app.use(getTime);
app.use(logger);



// ============================= ROUTES =============================

app.get('/test', (req, res) => {
  console.log('test for logger that includes time stamp');
});


// ----------- PRODUCTS --------------

app.post('/products', (req,res) => {
  //uses object in body of req to create a new record

  let request = req.body;

  let productRecord = {
    id: request.id,
    category: request.category,
    name: request.name,
    display_name: request.display_name,
    description: request.description,
  };

  res.status(200).json(productRecord);

});


app.get('/products', (req,res) => {
  // GET all the products
  // in the future this should have a COUNT and a RESULTS[]

  res.status(200).json(productData.products);

});


app.get('/products/:id', (req,res) => {
  // GET all products with certain id

  let reqId = req.params.id;
  let allProductsArr = productData.products;

  allProductsArr.forEach(product => {

    if(product.id === reqId){
      res.status(200).json(product);
    }

  });

});

app.put('/products/:id', (req,res) => {
  //uses object in body to replace the record with id specified

  let reqId = req.params.id;
  let obj = req.body;

  console.log('ID IN PUT: ', reqId);
  console.log('OBJ in PUT: ', obj);

  let allProductsArr = productData.products;

  allProductsArr.forEach(product => {

    if(product.id === reqId){
      // do a thing where you replace the stuff in json(product) with what comes back in obj
      // res.status(200).json(product);
    }

  });



});

app.delete('/products/:id', (req,res) => {
  //deletes record with id specified

  let reqId = req.params.id;
  let allProductsArr = productData.products;

  allProductsArr.forEach(product => {

    if(product.id === reqId){
      // do a thing where you delete the item in json(product)

      res.status(200).send('Deleted the item!');
    }

  });

  

});

// ----------- CATEGORIES --------------

app.post('/categories', (req,res) => {
  //uses object in body of req to create a new record

  let request = req.body;

  let categoryRecord = {
    id: request.id,
    name: request.name,
    display_name: request.display_name,
    description: request.description,
  };

  res.status(200).json(categoryRecord);


});


app.get('/categories', (req,res) => {

  res.status(200).json(categoryData.categories);

});


app.get('/categories/:id', (req,res) => {

  let reqId = req.params.id;
  let allCategoriesArr = categoryData.categories;

  allCategoriesArr.forEach(category => {

    if(category.id === reqId){
      res.status(200).json(category);
    }

  });

});

app.put('/categories/:id', (req,res) => {
  //uses object in body to replace the record with id specified
  
  let reqId = req.params.id;
  let obj = req.body;

  console.log('ID IN PUT: ', reqId);
  console.log('OBJ in PUT: ', obj);

  let allCategoriesArr = categoryData.categories;

  allCategoriesArr.forEach(category => {

    if(category.id === reqId){
      // do a thing where you replace the stuff in json(category) with what comes back in obj
      // res.status(200).json(category);
    }

  });

});


app.delete('/categories/:id', (req,res) => {
  //deletes record with id specified

  let reqId = req.params.id;
  let allCategoriesArr = categoryData.products;

  allCategoriesArr.forEach(category => {

    if(category.id === reqId){
      // do a thing where you delete the item in json(categry)

      res.status(200).send('Deleted the category!');
    }

  });

});

// ONCE WE MODULARIZE, ITLL LOOK LIKE BELOW (with the CONSTS for each declared above):

// app.use('/api/v1/', productRoutes);
// app.use('/api/v1/', categoryRoutes);



// ------------- ERRORS --------------

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
