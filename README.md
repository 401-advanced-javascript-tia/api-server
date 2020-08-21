# API-Server
Code 401 Lab 6-9 Project
**Description**: virtual storefront using MongoDB persistence and modularity to provide for maximum flexiblity.

## See the Site
IF SITE IS PUBLISHED PUT THE LINK HERE

## Author
Tia Low

### About
Full-stack JavaScript developer with a diverse background of personal and professional experience.

## Collaborations and Resources
- Alex, Beasley, Joe, Jen
- https://stackoverflow.com/questions/6528876/how-to-redirect-404-errors-to-a-page-in-expressjs
- https://expressjs.com/en/guide/writing-middleware.html

## Version
1.0.3

## Tech Used
ALL TECH GOES HERE IN LIST FORMAT

## ENV SAMPLES
- PORT:
- MONGODB_URI:

## Domain Modeling
- MongoDB name: products

## Daily Log
Monday : 8-17-20 : **Phase 1** 
- API should perform CRUD operations using ReST methods on 2 data models (categories and products) using json-server, can test in terminal using HTTPIE
- Set goal for business requirements
- Created working documentation with Swagger Hub

Tuesday : 8-18-20 : **Phase 2** 
- Transition from json-server that served as a "mock" towards an API server using Express and Node.js
  - Create full express server with modular middleware and routes
  - Note that today data doesn't persist between server sessions, that functonality will come in future phase

Wednesday : 8-19-20 : **Phase 3**
- Adding persistence by migrating from in-memory data storage to using Mongo to store the data permanently
- Modularize routes for flexiblity
- Maintain same interface for users

Thursday : 8-20-20 : **Phase 4**
- Create a single router module that will work for any data model, rather than having separate router modules for every data module
- Create a single "mongo" collection class that every data model can extend from, keeping the CRUD login for the models very dry

### Swagger Hub Documentation
https://app.swaggerhub.com/apis/TiaLow/online-store/0.1#/info

### Stretch Goals
ANY STRETCH GOALS CAN BE ADDED HERE
