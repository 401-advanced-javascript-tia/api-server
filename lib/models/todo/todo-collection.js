'use strict';

const schema = require('./todo-schema.js');
const Model = require('../mongo.js');

class Todo extends Model {}

module.exports = new Todo(schema);