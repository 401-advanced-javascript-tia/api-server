'use strict';

var requestTime = function (req,res,next) {
  req.timestamp = new Date();
  next();
};

module.exports = requestTime;
