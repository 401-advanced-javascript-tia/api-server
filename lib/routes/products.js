'use strict';

const express = require('express');

// const Products = require('../models/products/products-model.js');

// const products = new Products();

const route = express.Router();



const productData = require('../../data/db.json');


// ----------- ROUTES --------------

route.post('/products', createProductRecord);
route.get('/products', getProducts);
route.get('/products/:id', getProductWithId);
route.put('/products/:id', updateProductWithId);
route.delete('/products/:id', deleteProductWithId);



// -------- ROUTE HANDLERS -----------


function createProductRecord(req,res) {
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

}


function getProducts(req,res) {
  // GET all the products
  //THIS WILL RETURN COUNT AND RESULTS ARRAY


  res.status(200).json(productData.products);

}


function getProductWithId(req,res) {
  // GET all products with certain id

  let reqId = req.params.id;
  let allProductsArr = productData.products;

  allProductsArr.forEach(product => {

    if(product.id === reqId){
      res.status(200).json(product);
    }

  });

}

function updateProductWithId(req,res) {
  //uses object in body to replace the record with id specified

  let reqId = req.params.id;
  let obj = req.body;

  console.log('ID IN PUT: ', reqId);
  console.log('OBJ in PUT: ', obj);

  let allProductsArr = productData.products;

  allProductsArr.forEach(product => {

    if(product.id === reqId){
      // do a thing where you replace the stuff in json(product) with what comes back in obj
      // return the updated item to the user
      // res.status(200).json(product);
    }

  });

}


function deleteProductWithId(req,res) {
  //deletes record with id specified

  let reqId = req.params.id;
  let allProductsArr = productData.products;

  allProductsArr.forEach(product => {

    if(product.id === reqId){
      // do a thing where you delete the item in json(product)

      res.status(200).send('Deleted the item!');
    }

  });

}




module.exports = route;
