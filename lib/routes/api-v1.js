'use strict';

const express = require('express');

// const products = require('../models/products/products-collection.js');
// const categories = require('../models/categories/categories-collection.js');
const route = express.Router();

const getModel = require('../middleware/model-finder.js');


// -------------- PARAM MIDDLEWARE ----------------------

//"hey! every route listen up! if you run into any route using :model, notice it and run this function"      
route.param('model', getModel);


// ------------------------- ROUTES ---------------------

route.post('/:model', createRecord);
route.get('/:model', getAllRecords);
route.get('/:model/:id', getById);
route.put('/:model/:id', updateRecordById);
route.patch('/:model/:id', updateRecordById);
route.delete('/:model/:id', deleteRecordById);


// -------------------- ROUTE HANDLERS ------------------

      
function createRecord(req,res,next) {
  //uses object in body of req to create a new record

  // console.log('REQ.MODEL IN API-VI TO CREATE:', req.model);


  // console.log('REQ.BODY IN API-VI TO CREATE:', req.body);

  req.model.create(req.body)
    .then(result => {

      // console.log('RESULTS IN CREATE IN APIV1:', result);

      res.status(200).json(result);
    }).catch(next);


}



function getAllRecords(req,res, next) {
  
  // req.model is an instance of a subclass: products model
  // when you call .get on it its going to be fetching it from different collections 
  req.model.get()
    .then(results => {
    
      let count = results.length;
    
      res.status(200).json({count, results});
      //.json is a convenience method that sends json (instead of seeing it like res.send)
    
    }).catch(next);
  // this catch says that if that then block fails, we're going to send the failure as the next and it will trigger an error handler 
  
}



function getById(req,res,next) {

  console.log('REQ IN GET BY ID:', req.params);
  let id = req.params._id;
  req.model.get(id)
    .then(record => {
      res.status(200).json(record);
    }).catch(next);

}


function updateRecordById(req,res,next){ 

  let id = req.params.id;
  console.log('REQUEST IN API-VI TO UPDATE:', req.body);

  let infoToUpdate = req.body;

  req.model.update(id, infoToUpdate)
    .then(record => {
      console.log('RESULT IN UPDATE BY ID:', record);
      res.status(200).json(record);
    }).catch(next);

}

function deleteRecordById(req,res,next) {
  console.log('REQ.PARAMS IN DELETE FUNCTION', req.params);

  let id = req.params.id;

  console.log('IN DELETE REQ.MODEL', req.model);
  console.log('IN DELETE ID USED:', id);
  req.model.delete(id)
    .then(result => {
      res.status(200).json(result);
      console.log('RESULT IN DELETE BY ID:', result);
    }).catch(next);

}






module.exports = route;





