'use strict';

var logger = function (req,res,next) {
  console.log(`Logged at: ${req.timestamp}\n Path: ${req.path}\n Method: ${req.method}`);
  next();
};

module.exports = logger;
