'use strict';

const express = require('express');

const category = require('./models/categories/categories-model.js');

const router = express.Router();

router.get('/category', getCategory);

function getCategory (req,res,next) {

}

