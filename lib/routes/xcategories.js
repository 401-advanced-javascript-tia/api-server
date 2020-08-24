// 'use strict';

// const express = require('express');

// // const Categories = require('../models/categories/categories-model.js');
// // const categories = new Categories();

// const route = express.Router();

// const categoryData = require('../../data/db.json');


// // ----------- ROUTES --------------


// route.post('/categories', createCategoryRecord);
// route.get('/categories', getCategories);
// route.get('/categories/:id', getCategoryWithId);
// route.put('/categories/:id', updateCategoryWithId);
// route.patch('/categories/:id', updateCategoryWithId);
// route.delete('/categories/:id', deleteCategoryWithId);



// // --------- ROUTE HANDLERS ----------


// function createCategoryRecord(req,res) {
//   //uses object in body of req to create a new record

//   let request = req.body;

//   let categoryRecord = {
//     id: request.id,
//     name: request.name,
//     display_name: request.display_name,
//     description: request.description,
//   };

//   res.status(200).json(categoryRecord);

// }




// function getCategories(req,res) {
//   res.status(200).json(categoryData.categories);
// }




// function getCategoryWithId(req,res) {

//   let reqId = req.params.id;
//   let allCategoriesArr = categoryData.categories;

//   allCategoriesArr.forEach(category => {

//     if(category.id === reqId){
//       res.status(200).json(category);
//     }

//   });

// }



// function updateCategoryWithId(req,res) {
//   //uses object in body to replace the record with id specified
  
//   let reqId = req.params.id;
//   let obj = req.body;

//   console.log('ID IN PUT: ', reqId);
//   console.log('OBJ in PUT: ', obj);

//   let allCategoriesArr = categoryData.categories;

//   allCategoriesArr.forEach(category => {

//     if(category.id === reqId){
//       // do a thing where you replace the stuff in json(category) with what comes back in obj
//       // send updated item to the user
//       // res.status(200).json(category);
//     }

//   });

// }


// function deleteCategoryWithId(req,res) {
//   //deletes record with id specified

//   let reqId = req.params.id;
//   let allCategoriesArr = categoryData.products;

//   allCategoriesArr.forEach(category => {

//     if(category.id === reqId){
//       // do a thing where you delete the item in json(categry)

//       res.status(200).send('Deleted the category!');
//     }

//   });

// }


// module.exports = route;
