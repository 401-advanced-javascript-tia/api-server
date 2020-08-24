'use strict';

const logMiddelware = require('../lib/middleware/logger.js');

describe('Logger Middleware', () => {
  
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); //to spy on the next method

  beforeEach(() => {
  // Attach to the console (take it over)
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
  //puts the console back
    consoleSpy.mockRestore();
  });

  it('should log some output to console.log', () => {

    logMiddelware(req,res,next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should move to next middleware when done', () => {

    logMiddelware(req,res,next);
    expect(next).toHaveBeenCalled();
  });

});